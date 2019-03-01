import { ChartType } from "../types/chart-type";
import { GraphQLNonNull, GraphQLString } from "graphql";
import { getConnection } from "typeorm";
import { GraphQLDateTime } from "graphql-iso-date";
import * as moment from "moment";

interface IChartQueryType {
  str: string;
  chartName: string;
}

const queries = {
  chart: {
    type: ChartType,
    args: {
      chartType: {
        name: "chartType",
        type: new GraphQLNonNull(GraphQLString)
      },
      dateStart: {
        name: "dateStart",
        type: GraphQLDateTime
      },
      dateEnd: {
        name: "dateEnd",
        type: GraphQLDateTime
      }
    },
    resolve: async (root, params) => {
      let query: IChartQueryType = {
        str: "",
        chartName: ""
      };

      switch (params.chartType) {
        case "coverage":
          query = {
            str:
              "cast(aa.qt_covered as float) / cast(aa.qt_line as float) * 100 y",
            chartName: "Cobertura de testes"
          };
          break;
        case "lines":
          query = { str: "aa.qt_line y", chartName: "Quantidade de linhas" };
          break;
        case "cyclomatic_mod":
          query = {
            str: "aa.qt_routinecyclomaticmod y",
            chartName: "Complexidade Ciclomática"
          };
          break;
      }

      const chartQuery: string = `
        select
          aa.id_project,
          (select nm_project from project xx where xx.id_project = aa.id_project) name_project,
          aa.dt_build x,
          ${query.str}
        from
          build aa,
          (select
            id_project,
            max(id_build) id_build
          from build
          where
            dt_build >= '${moment(params.dateStart).format(
              "YYYY-MM-DD HH:mm:SS"
            )}'
            and dt_build <= '${moment(params.dateEnd).format(
              "YYYY-MM-DD HH:mm:SS"
            )}'
          group by id_project, cast(dt_build as date)
          order by id_project, id_build) as tmp
        where
          tmp.id_project = aa.id_project
          and tmp.id_build = aa.id_build
      `;
      const result = await getConnection().query(chartQuery);
      const mountAxis = result.map(item => {
        return { x: item.x, y: `${item.y}` };
      });

      return {
        nameProject: result[0].name_project,
        chartName: query.chartName,
        axisNameY: "Eixo Y",
        axisNameX: "Eixo X",
        axis: mountAxis
      };
    }
  }
};

export default queries;

import { ChartType } from "../types/chart-type";
import { GraphQLList } from "graphql";
import { getConnection } from "typeorm";
import * as moment from "moment";

const queries = {
  chart: {
    type: ChartType,
    resolve: async () => {
      const chartQuery: string = `
      select
        aa.id_project,
        (select nm_project from project xx where xx.id_project = aa.id_project) name_project,
        aa.dt_build x,
        cast(aa.qt_covered as float) / cast(aa.qt_line as float) * 100 y 
      from
        build aa,
        (select
          id_project,
          max(id_build) id_build
        from build
        where
          dt_build >= '2019-02-12 00:00:00'
          and dt_build <= '2019-02-15 23:59:59'   
        group by id_project, cast(dt_build as date)
        order by id_project, id_build) as tmp
      where
        tmp.id_project = aa.id_project
        and tmp.id_build = aa.id_build
      `;
      const result = await getConnection().query(chartQuery);
      const mountAxis = result.map(item => {
        return { x: moment(item.x).format("DD/MM/YYYY"), y: `${item.y}` };
      });

      const resultData = {
        name_project: result[0].name_project,
        axisNameY: "Data do build",
        axisNameX: "Linhas cobertas",
        axis: mountAxis
      };
      return resultData;
    }
  }
};

export default queries;

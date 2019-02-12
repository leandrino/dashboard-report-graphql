import { ChartType } from "../types/chart-type";
import { GraphQLList } from "graphql";

const queries = {
  charts: {
    type: new GraphQLList(ChartType),
    resolve: () => {
      return [
        { columnX: 12.22, columnY: 1, name: "Julius" },
        { columnX: 12.22, columnY: 1, name: "Rodolfo" }
      ];
    }
  }
};

export default queries;

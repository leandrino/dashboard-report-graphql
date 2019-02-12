import ChartQuery from "./chart-query";
import { GraphQLObjectType } from "graphql";

const QueryType = new GraphQLObjectType({
  name: "Query",
  fields: () => ({
    ...ChartQuery
  })
});

export default QueryType;

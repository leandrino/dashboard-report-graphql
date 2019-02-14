import {
  GraphQLID,
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat,
  GraphQLList
} from "graphql";

import AxisType from "./axis-type";

export const ChartType: GraphQLObjectType<any, any> = new GraphQLObjectType({
  name: "Chart",
  description: "Select a chart type and be happy",
  fields: () => ({
    _id: { type: GraphQLID },
    name: { type: GraphQLString },
    axisNameX: { type: GraphQLString },
    axisNameY: { type: GraphQLString },
    axis: { type: new GraphQLList(AxisType) }
  })
});

export default ChartType;

import {
  GraphQLID,
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat
} from "graphql";

export const hartType: GraphQLObjectType<any, any> = new GraphQLObjectType({
  name: "Chart",
  description: "Select a chart type and be happy",
  fields: () => ({
    _id: { type: GraphQLID },
    x: { type: GraphQLFloat },
    y: { type: GraphQLFloat }
  })
});

export default ChartType;

/*
 * query {
 *  charts (type: ciclomatic){
 *   name
 *   nameX
 *   nameY
 *   eixos {
 *     x
 *     y
 *   }
 * }
 *}
 */

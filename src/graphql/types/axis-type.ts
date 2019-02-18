import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

export const AxisType: GraphQLObjectType<any, any> = new GraphQLObjectType({
  name: "Axis",
  description: "Axis to Chart!!!",
  fields: () => ({
    id: { type: GraphQLID },
    x: { type: GraphQLString },
    y: { type: GraphQLString }
  })
});

export default AxisType;

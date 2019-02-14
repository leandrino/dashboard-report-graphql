import { GraphQLObjectType, GraphQLFloat } from "graphql";

export const AxisType: GraphQLObjectType<any, any> = new GraphQLObjectType({
  name: "Axis",
  description: "Axis to Chart!!!",
  fields: () => ({
    x: { type: GraphQLFloat },
    y: { type: GraphQLFloat }
  })
});

export default AxisType;

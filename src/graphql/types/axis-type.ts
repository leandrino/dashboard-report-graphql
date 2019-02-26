import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";
import { GraphQLDateTime } from "graphql-iso-date";

export const AxisType: GraphQLObjectType<any, any> = new GraphQLObjectType({
  name: "Axis",
  description: "Axis to Chart!!!",
  fields: () => ({
    id: { type: GraphQLID },
    x: { type: GraphQLDateTime },
    y: { type: GraphQLString }
  })
});

export default AxisType;

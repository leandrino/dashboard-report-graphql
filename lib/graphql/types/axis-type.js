"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.AxisType = void 0;

var _graphql = require("graphql");

var AxisType = new _graphql.GraphQLObjectType({
  name: "Axis",
  description: "Axis to Chart!!!",
  fields: function fields() {
    return {
      id: {
        type: _graphql.GraphQLID
      },
      x: {
        type: _graphql.GraphQLString
      },
      y: {
        type: _graphql.GraphQLString
      }
    };
  }
});
exports.AxisType = AxisType;
var _default = AxisType;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ncmFwaHFsL3R5cGVzL2F4aXMtdHlwZS50cyJdLCJuYW1lcyI6WyJBeGlzVHlwZSIsIkdyYXBoUUxPYmplY3RUeXBlIiwibmFtZSIsImRlc2NyaXB0aW9uIiwiZmllbGRzIiwiaWQiLCJ0eXBlIiwiR3JhcGhRTElEIiwieCIsIkdyYXBoUUxTdHJpbmciLCJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRU8sSUFBTUEsUUFBcUMsR0FBRyxJQUFJQywwQkFBSixDQUFzQjtBQUN6RUMsRUFBQUEsSUFBSSxFQUFFLE1BRG1FO0FBRXpFQyxFQUFBQSxXQUFXLEVBQUUsa0JBRjREO0FBR3pFQyxFQUFBQSxNQUFNLEVBQUU7QUFBQSxXQUFPO0FBQ2JDLE1BQUFBLEVBQUUsRUFBRTtBQUFFQyxRQUFBQSxJQUFJLEVBQUVDO0FBQVIsT0FEUztBQUViQyxNQUFBQSxDQUFDLEVBQUU7QUFBRUYsUUFBQUEsSUFBSSxFQUFFRztBQUFSLE9BRlU7QUFHYkMsTUFBQUEsQ0FBQyxFQUFFO0FBQUVKLFFBQUFBLElBQUksRUFBRUc7QUFBUjtBQUhVLEtBQVA7QUFBQTtBQUhpRSxDQUF0QixDQUE5Qzs7ZUFVUVQsUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdyYXBoUUxPYmplY3RUeXBlLCBHcmFwaFFMSUQsIEdyYXBoUUxTdHJpbmcgfSBmcm9tIFwiZ3JhcGhxbFwiO1xuXG5leHBvcnQgY29uc3QgQXhpc1R5cGU6IEdyYXBoUUxPYmplY3RUeXBlPGFueSwgYW55PiA9IG5ldyBHcmFwaFFMT2JqZWN0VHlwZSh7XG4gIG5hbWU6IFwiQXhpc1wiLFxuICBkZXNjcmlwdGlvbjogXCJBeGlzIHRvIENoYXJ0ISEhXCIsXG4gIGZpZWxkczogKCkgPT4gKHtcbiAgICBpZDogeyB0eXBlOiBHcmFwaFFMSUQgfSxcbiAgICB4OiB7IHR5cGU6IEdyYXBoUUxTdHJpbmcgfSxcbiAgICB5OiB7IHR5cGU6IEdyYXBoUUxTdHJpbmcgfVxuICB9KVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEF4aXNUeXBlO1xuIl19
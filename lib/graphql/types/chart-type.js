"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ChartType = void 0;

var _graphql = require("graphql");

var _axisType = _interopRequireDefault(require("./axis-type"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ChartType = new _graphql.GraphQLObjectType({
  name: "Chart",
  description: "Select a chart type and be happy",
  fields: function fields() {
    return {
      id: {
        type: _graphql.GraphQLID
      },
      nameProject: {
        type: _graphql.GraphQLString
      },
      chartName: {
        type: _graphql.GraphQLString
      },
      axisNameX: {
        type: _graphql.GraphQLString
      },
      axisNameY: {
        type: _graphql.GraphQLString
      },
      axis: {
        type: new _graphql.GraphQLList(_axisType.default)
      }
    };
  }
});
exports.ChartType = ChartType;
var _default = ChartType;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ncmFwaHFsL3R5cGVzL2NoYXJ0LXR5cGUudHMiXSwibmFtZXMiOlsiQ2hhcnRUeXBlIiwiR3JhcGhRTE9iamVjdFR5cGUiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJmaWVsZHMiLCJpZCIsInR5cGUiLCJHcmFwaFFMSUQiLCJuYW1lUHJvamVjdCIsIkdyYXBoUUxTdHJpbmciLCJjaGFydE5hbWUiLCJheGlzTmFtZVgiLCJheGlzTmFtZVkiLCJheGlzIiwiR3JhcGhRTExpc3QiLCJBeGlzVHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQVFBOzs7O0FBRU8sSUFBTUEsU0FBc0MsR0FBRyxJQUFJQywwQkFBSixDQUFzQjtBQUMxRUMsRUFBQUEsSUFBSSxFQUFFLE9BRG9FO0FBRTFFQyxFQUFBQSxXQUFXLEVBQUUsa0NBRjZEO0FBRzFFQyxFQUFBQSxNQUFNLEVBQUU7QUFBQSxXQUFPO0FBQ2JDLE1BQUFBLEVBQUUsRUFBRTtBQUFFQyxRQUFBQSxJQUFJLEVBQUVDO0FBQVIsT0FEUztBQUViQyxNQUFBQSxXQUFXLEVBQUU7QUFBRUYsUUFBQUEsSUFBSSxFQUFFRztBQUFSLE9BRkE7QUFHYkMsTUFBQUEsU0FBUyxFQUFFO0FBQUVKLFFBQUFBLElBQUksRUFBRUc7QUFBUixPQUhFO0FBSWJFLE1BQUFBLFNBQVMsRUFBRTtBQUFFTCxRQUFBQSxJQUFJLEVBQUVHO0FBQVIsT0FKRTtBQUtiRyxNQUFBQSxTQUFTLEVBQUU7QUFBRU4sUUFBQUEsSUFBSSxFQUFFRztBQUFSLE9BTEU7QUFNYkksTUFBQUEsSUFBSSxFQUFFO0FBQUVQLFFBQUFBLElBQUksRUFBRSxJQUFJUSxvQkFBSixDQUFnQkMsaUJBQWhCO0FBQVI7QUFOTyxLQUFQO0FBQUE7QUFIa0UsQ0FBdEIsQ0FBL0M7O2VBYVFmLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBHcmFwaFFMSUQsXG4gIEdyYXBoUUxPYmplY3RUeXBlLFxuICBHcmFwaFFMU3RyaW5nLFxuICBHcmFwaFFMRmxvYXQsXG4gIEdyYXBoUUxMaXN0XG59IGZyb20gXCJncmFwaHFsXCI7XG5cbmltcG9ydCBBeGlzVHlwZSBmcm9tIFwiLi9heGlzLXR5cGVcIjtcblxuZXhwb3J0IGNvbnN0IENoYXJ0VHlwZTogR3JhcGhRTE9iamVjdFR5cGU8YW55LCBhbnk+ID0gbmV3IEdyYXBoUUxPYmplY3RUeXBlKHtcbiAgbmFtZTogXCJDaGFydFwiLFxuICBkZXNjcmlwdGlvbjogXCJTZWxlY3QgYSBjaGFydCB0eXBlIGFuZCBiZSBoYXBweVwiLFxuICBmaWVsZHM6ICgpID0+ICh7XG4gICAgaWQ6IHsgdHlwZTogR3JhcGhRTElEIH0sXG4gICAgbmFtZVByb2plY3Q6IHsgdHlwZTogR3JhcGhRTFN0cmluZyB9LFxuICAgIGNoYXJ0TmFtZTogeyB0eXBlOiBHcmFwaFFMU3RyaW5nIH0sXG4gICAgYXhpc05hbWVYOiB7IHR5cGU6IEdyYXBoUUxTdHJpbmcgfSxcbiAgICBheGlzTmFtZVk6IHsgdHlwZTogR3JhcGhRTFN0cmluZyB9LFxuICAgIGF4aXM6IHsgdHlwZTogbmV3IEdyYXBoUUxMaXN0KEF4aXNUeXBlKSB9XG4gIH0pXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hhcnRUeXBlO1xuIl19
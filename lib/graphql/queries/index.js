"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _chartQuery = _interopRequireDefault(require("./chart-query"));

var _graphql = require("graphql");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var QueryType = new _graphql.GraphQLObjectType({
  name: "Query",
  fields: function fields() {
    return _objectSpread({}, _chartQuery.default);
  }
});
var _default = QueryType;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ncmFwaHFsL3F1ZXJpZXMvaW5kZXgudHMiXSwibmFtZXMiOlsiUXVlcnlUeXBlIiwiR3JhcGhRTE9iamVjdFR5cGUiLCJuYW1lIiwiZmllbGRzIiwiQ2hhcnRRdWVyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7OztBQUVBLElBQU1BLFNBQVMsR0FBRyxJQUFJQywwQkFBSixDQUFzQjtBQUN0Q0MsRUFBQUEsSUFBSSxFQUFFLE9BRGdDO0FBRXRDQyxFQUFBQSxNQUFNLEVBQUU7QUFBQSw2QkFDSEMsbUJBREc7QUFBQTtBQUY4QixDQUF0QixDQUFsQjtlQU9lSixTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENoYXJ0UXVlcnkgZnJvbSBcIi4vY2hhcnQtcXVlcnlcIjtcbmltcG9ydCB7IEdyYXBoUUxPYmplY3RUeXBlIH0gZnJvbSBcImdyYXBocWxcIjtcblxuY29uc3QgUXVlcnlUeXBlID0gbmV3IEdyYXBoUUxPYmplY3RUeXBlKHtcbiAgbmFtZTogXCJRdWVyeVwiLFxuICBmaWVsZHM6ICgpID0+ICh7XG4gICAgLi4uQ2hhcnRRdWVyeVxuICB9KVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFF1ZXJ5VHlwZTtcbiJdfQ==
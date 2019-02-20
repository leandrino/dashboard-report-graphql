"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _graphql = require("graphql");

var _queries = _interopRequireDefault(require("./queries"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var schema = new _graphql.GraphQLSchema({
  query: _queries.default
});
var _default = schema;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ncmFwaHFsL3NjaGVtYS50cyJdLCJuYW1lcyI6WyJzY2hlbWEiLCJHcmFwaFFMU2NoZW1hIiwicXVlcnkiLCJRdWVyeVR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUVBLElBQU1BLE1BQU0sR0FBRyxJQUFJQyxzQkFBSixDQUFrQjtBQUMvQkMsRUFBQUEsS0FBSyxFQUFFQztBQUR3QixDQUFsQixDQUFmO2VBSWVILE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHcmFwaFFMU2NoZW1hIH0gZnJvbSBcImdyYXBocWxcIjtcbmltcG9ydCBRdWVyeVR5cGUgZnJvbSBcIi4vcXVlcmllc1wiO1xuXG5jb25zdCBzY2hlbWEgPSBuZXcgR3JhcGhRTFNjaGVtYSh7XG4gIHF1ZXJ5OiBRdWVyeVR5cGVcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBzY2hlbWE7XG4iXX0=
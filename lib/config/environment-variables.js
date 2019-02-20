"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DB_DATABASE = exports.DB_PORT = exports.DB_HOST = exports.DB_PASS = exports.DB_USER = void 0;

var dotenv = _interopRequireWildcard(require("dotenv"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// use dotenv library with you don't use docker or docker-compose
dotenv.config();
var DB_USER = process.env.POSTGRES_USER;
exports.DB_USER = DB_USER;
var DB_PASS = process.env.POSTGRES_PASSWORD;
exports.DB_PASS = DB_PASS;
var DB_HOST = process.env.POSTGRES_HOST;
exports.DB_HOST = DB_HOST;
var DB_PORT = process.env.POSTGRES_PORT;
exports.DB_PORT = DB_PORT;
var DB_DATABASE = process.env.POSTGRES_DATABASE;
exports.DB_DATABASE = DB_DATABASE;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25maWcvZW52aXJvbm1lbnQtdmFyaWFibGVzLnRzIl0sIm5hbWVzIjpbImRvdGVudiIsImNvbmZpZyIsIkRCX1VTRVIiLCJwcm9jZXNzIiwiZW52IiwiUE9TVEdSRVNfVVNFUiIsIkRCX1BBU1MiLCJQT1NUR1JFU19QQVNTV09SRCIsIkRCX0hPU1QiLCJQT1NUR1JFU19IT1NUIiwiREJfUE9SVCIsIlBPU1RHUkVTX1BPUlQiLCJEQl9EQVRBQkFTRSIsIlBPU1RHUkVTX0RBVEFCQVNFIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7QUFEQTtBQUdBQSxNQUFNLENBQUNDLE1BQVA7QUFFTyxJQUFNQyxPQUFlLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxhQUFwQzs7QUFDQSxJQUFNQyxPQUFlLEdBQUdILE9BQU8sQ0FBQ0MsR0FBUixDQUFZRyxpQkFBcEM7O0FBQ0EsSUFBTUMsT0FBZSxHQUFHTCxPQUFPLENBQUNDLEdBQVIsQ0FBWUssYUFBcEM7O0FBQ0EsSUFBTUMsT0FBZSxHQUFHUCxPQUFPLENBQUNDLEdBQVIsQ0FBWU8sYUFBcEM7O0FBQ0EsSUFBTUMsV0FBbUIsR0FBR1QsT0FBTyxDQUFDQyxHQUFSLENBQVlTLGlCQUF4QyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHVzZSBkb3RlbnYgbGlicmFyeSB3aXRoIHlvdSBkb24ndCB1c2UgZG9ja2VyIG9yIGRvY2tlci1jb21wb3NlXG5pbXBvcnQgKiBhcyBkb3RlbnYgZnJvbSBcImRvdGVudlwiO1xuXG5kb3RlbnYuY29uZmlnKCk7XG5cbmV4cG9ydCBjb25zdCBEQl9VU0VSOiBzdHJpbmcgPSBwcm9jZXNzLmVudi5QT1NUR1JFU19VU0VSO1xuZXhwb3J0IGNvbnN0IERCX1BBU1M6IHN0cmluZyA9IHByb2Nlc3MuZW52LlBPU1RHUkVTX1BBU1NXT1JEO1xuZXhwb3J0IGNvbnN0IERCX0hPU1Q6IHN0cmluZyA9IHByb2Nlc3MuZW52LlBPU1RHUkVTX0hPU1Q7XG5leHBvcnQgY29uc3QgREJfUE9SVDogc3RyaW5nID0gcHJvY2Vzcy5lbnYuUE9TVEdSRVNfUE9SVDtcbmV4cG9ydCBjb25zdCBEQl9EQVRBQkFTRTogc3RyaW5nID0gcHJvY2Vzcy5lbnYuUE9TVEdSRVNfREFUQUJBU0U7XG4iXX0=
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postgresDB = void 0;

var _typeorm = require("typeorm");

var _environmentVariables = require("../config/environment-variables");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// prettier-ignore
var postgresDB =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", (0, _typeorm.createConnection)({
              type: "postgres",
              host: _environmentVariables.DB_HOST,
              port: 5432,
              username: _environmentVariables.DB_USER,
              password: _environmentVariables.DB_PASS,
              database: _environmentVariables.DB_DATABASE,
              ssl: false,
              synchronize: true
            }).then(function (connection) {
              console.log("Database connection established");
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function postgresDB() {
    return _ref.apply(this, arguments);
  };
}();

exports.postgresDB = postgresDB;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRhYmFzZS9wb3N0Z3Jlcy1kYi50cyJdLCJuYW1lcyI6WyJwb3N0Z3Jlc0RCIiwidHlwZSIsImhvc3QiLCJEQl9IT1NUIiwicG9ydCIsInVzZXJuYW1lIiwiREJfVVNFUiIsInBhc3N3b3JkIiwiREJfUEFTUyIsImRhdGFiYXNlIiwiREJfREFUQUJBU0UiLCJzc2wiLCJzeW5jaHJvbml6ZSIsInRoZW4iLCJjb25uZWN0aW9uIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUNBOzs7Ozs7QUFRQTtBQUNPLElBQU1BLFVBQVU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2Q0FDakIsK0JBQWlCO0FBQ3RCQyxjQUFBQSxJQUFJLEVBQUUsVUFEZ0I7QUFFdEJDLGNBQUFBLElBQUksRUFBRUMsNkJBRmdCO0FBR3RCQyxjQUFBQSxJQUFJLEVBQUUsSUFIZ0I7QUFJdEJDLGNBQUFBLFFBQVEsRUFBRUMsNkJBSlk7QUFLdEJDLGNBQUFBLFFBQVEsRUFBRUMsNkJBTFk7QUFNdEJDLGNBQUFBLFFBQVEsRUFBRUMsaUNBTlk7QUFPdEJDLGNBQUFBLEdBQUcsRUFBRSxLQVBpQjtBQVF0QkMsY0FBQUEsV0FBVyxFQUFFO0FBUlMsYUFBakIsRUFTSkMsSUFUSSxDQVNDLFVBQUFDLFVBQVUsRUFBSTtBQUNwQkMsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksaUNBQVo7QUFDRCxhQVhNLENBRGlCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQVZoQixVQUFVO0FBQUE7QUFBQTtBQUFBLEdBQWhCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgY3JlYXRlQ29ubmVjdGlvbiB9IGZyb20gXCJ0eXBlb3JtXCI7XG5pbXBvcnQge1xuICBEQl9VU0VSLFxuICBEQl9QQVNTLFxuICBEQl9IT1NULFxuICBEQl9QT1JULFxuICBEQl9EQVRBQkFTRVxufSBmcm9tIFwiLi4vY29uZmlnL2Vudmlyb25tZW50LXZhcmlhYmxlc1wiO1xuXG4vLyBwcmV0dGllci1pZ25vcmVcbmV4cG9ydCBjb25zdCBwb3N0Z3Jlc0RCID0gYXN5bmMgKCkgPT4ge1xuICByZXR1cm4gY3JlYXRlQ29ubmVjdGlvbih7XG4gICAgdHlwZTogXCJwb3N0Z3Jlc1wiLFxuICAgIGhvc3Q6IERCX0hPU1QsXG4gICAgcG9ydDogNTQzMixcbiAgICB1c2VybmFtZTogREJfVVNFUixcbiAgICBwYXNzd29yZDogREJfUEFTUyxcbiAgICBkYXRhYmFzZTogREJfREFUQUJBU0UsXG4gICAgc3NsOiBmYWxzZSxcbiAgICBzeW5jaHJvbml6ZTogdHJ1ZVxuICB9KS50aGVuKGNvbm5lY3Rpb24gPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiRGF0YWJhc2UgY29ubmVjdGlvbiBlc3RhYmxpc2hlZFwiKTtcbiAgfSk7XG59O1xuIl19
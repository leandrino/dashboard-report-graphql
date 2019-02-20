"use strict";

var Koa = _interopRequireWildcard(require("koa"));

var Router = _interopRequireWildcard(require("koa-router"));

var cors = _interopRequireWildcard(require("@koa/cors"));

var graphqlHTTP = _interopRequireWildcard(require("koa-graphql"));

var _schema = _interopRequireDefault(require("./graphql/schema"));

var _postgresDb = require("./database/postgres-db");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var app = new Koa();
var router = new Router();

var bootstrap =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _postgresDb.postgresDB)();

          case 2:
            app.use(
            /*#__PURE__*/
            function () {
              var _ref2 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee(ctx, next) {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return next();

                      case 2:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));

              return function (_x, _x2) {
                return _ref2.apply(this, arguments);
              };
            }());
            router.all("/graphql", graphqlHTTP({
              schema: _schema.default,
              graphiql: true
            }));
            router.post("/update-data", function (ctx) {
              ctx.body = {
                message: "success"
              };
            });
            app.use(cors({
              "Access-Control-Allow-Origin": "*"
            }));
            app.use(router.routes());
            app.listen(3000);

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function bootstrap() {
    return _ref.apply(this, arguments);
  };
}();

bootstrap();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zZXJ2ZXIudHMiXSwibmFtZXMiOlsiYXBwIiwiS29hIiwicm91dGVyIiwiUm91dGVyIiwiYm9vdHN0cmFwIiwidXNlIiwiY3R4IiwibmV4dCIsImFsbCIsImdyYXBocWxIVFRQIiwic2NoZW1hIiwiZ3JhcGhpcWwiLCJwb3N0IiwiYm9keSIsIm1lc3NhZ2UiLCJjb3JzIiwicm91dGVzIiwibGlzdGVuIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0FBQ0EsSUFBTUEsR0FBRyxHQUFHLElBQUlDLEdBQUosRUFBWjtBQUNBLElBQU1DLE1BQU0sR0FBRyxJQUFJQyxNQUFKLEVBQWY7O0FBRUEsSUFBTUMsU0FBUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ1YsNkJBRFU7O0FBQUE7QUFHaEJKLFlBQUFBLEdBQUcsQ0FBQ0ssR0FBSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0NBQVEsaUJBQU9DLEdBQVAsRUFBeUJDLElBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQUNBQSxJQUFJLEVBREo7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBTCxZQUFBQSxNQUFNLENBQUNNLEdBQVAsQ0FDRSxVQURGLEVBRUVDLFdBQVcsQ0FBQztBQUNWQyxjQUFBQSxNQUFNLEVBQU5BLGVBRFU7QUFFVkMsY0FBQUEsUUFBUSxFQUFFO0FBRkEsYUFBRCxDQUZiO0FBUUFULFlBQUFBLE1BQU0sQ0FBQ1UsSUFBUCxDQUFZLGNBQVosRUFBNEIsVUFBQ04sR0FBRCxFQUFzQjtBQUNoREEsY0FBQUEsR0FBRyxDQUFDTyxJQUFKLEdBQVc7QUFDVEMsZ0JBQUFBLE9BQU8sRUFBRTtBQURBLGVBQVg7QUFHRCxhQUpEO0FBTUFkLFlBQUFBLEdBQUcsQ0FBQ0ssR0FBSixDQUNFVSxJQUFJLENBQUM7QUFDSCw2Q0FBK0I7QUFENUIsYUFBRCxDQUROO0FBS0FmLFlBQUFBLEdBQUcsQ0FBQ0ssR0FBSixDQUFRSCxNQUFNLENBQUNjLE1BQVAsRUFBUjtBQUVBaEIsWUFBQUEsR0FBRyxDQUFDaUIsTUFBSixDQUFXLElBQVg7O0FBNUJnQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFUYixTQUFTO0FBQUE7QUFBQTtBQUFBLEdBQWY7O0FBK0JBQSxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgS29hIGZyb20gXCJrb2FcIjtcbmltcG9ydCAqIGFzIFJvdXRlciBmcm9tIFwia29hLXJvdXRlclwiO1xuaW1wb3J0ICogYXMgY29ycyBmcm9tIFwiQGtvYS9jb3JzXCI7XG5pbXBvcnQgKiBhcyBncmFwaHFsSFRUUCBmcm9tIFwia29hLWdyYXBocWxcIjtcbmltcG9ydCBzY2hlbWEgZnJvbSBcIi4vZ3JhcGhxbC9zY2hlbWFcIjtcbmltcG9ydCB7IHBvc3RncmVzREIgfSBmcm9tIFwiLi9kYXRhYmFzZS9wb3N0Z3Jlcy1kYlwiO1xuY29uc3QgYXBwID0gbmV3IEtvYSgpO1xuY29uc3Qgcm91dGVyID0gbmV3IFJvdXRlcigpO1xuXG5jb25zdCBib290c3RyYXAgPSBhc3luYyAoKSA9PiB7XG4gIGF3YWl0IHBvc3RncmVzREIoKTtcblxuICBhcHAudXNlKGFzeW5jIChjdHg6IEtvYS5Db250ZXh0LCBuZXh0OiBhbnkpID0+IHtcbiAgICBhd2FpdCBuZXh0KCk7XG4gIH0pO1xuXG4gIHJvdXRlci5hbGwoXG4gICAgXCIvZ3JhcGhxbFwiLFxuICAgIGdyYXBocWxIVFRQKHtcbiAgICAgIHNjaGVtYSxcbiAgICAgIGdyYXBoaXFsOiB0cnVlXG4gICAgfSlcbiAgKTtcblxuICByb3V0ZXIucG9zdChcIi91cGRhdGUtZGF0YVwiLCAoY3R4OiBLb2EuQ29udGV4dCkgPT4ge1xuICAgIGN0eC5ib2R5ID0ge1xuICAgICAgbWVzc2FnZTogXCJzdWNjZXNzXCJcbiAgICB9O1xuICB9KTtcblxuICBhcHAudXNlKFxuICAgIGNvcnMoe1xuICAgICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIjogXCIqXCJcbiAgICB9KVxuICApO1xuICBhcHAudXNlKHJvdXRlci5yb3V0ZXMoKSk7XG5cbiAgYXBwLmxpc3RlbigzMDAwKTtcbn07XG5cbmJvb3RzdHJhcCgpO1xuIl19
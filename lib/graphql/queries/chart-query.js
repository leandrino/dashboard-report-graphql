"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _chartType = require("../types/chart-type");

var _graphql = require("graphql");

var _typeorm = require("typeorm");

var moment = _interopRequireWildcard(require("moment"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var queries = {
  chart: {
    type: _chartType.ChartType,
    args: {
      chartType: {
        name: "chartType",
        type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
      }
    },
    resolve: function () {
      var _resolve = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(root, params) {
        var query, chartQuery, result, mountAxis, resultData;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = {
                  str: "",
                  chartName: ""
                };
                _context.t0 = params.chartType;
                _context.next = _context.t0 === "coverage" ? 4 : _context.t0 === "lines" ? 6 : _context.t0 === "cyclomatic_mod" ? 8 : 10;
                break;

              case 4:
                query = {
                  str: "cast(aa.qt_covered as float) / cast(aa.qt_line as float) * 100 y",
                  chartName: "Cobertura de testes"
                };
                return _context.abrupt("break", 10);

              case 6:
                query = {
                  str: "aa.qt_line y",
                  chartName: "Quantidade de linhas"
                };
                return _context.abrupt("break", 10);

              case 8:
                query = {
                  str: "aa.qt_routinecyclomaticmod y",
                  chartName: "Complexidade Ciclomática"
                };
                return _context.abrupt("break", 10);

              case 10:
                chartQuery = "\n      select\n        aa.id_project,\n        (select nm_project from project xx where xx.id_project = aa.id_project) name_project,\n        aa.dt_build x,\n        ".concat(query.str, "\n      from\n        build aa,\n        (select\n          id_project,\n          max(id_build) id_build\n        from build\n        where\n          dt_build >= '2019-02-12 00:00:00'\n          and dt_build <= '2019-02-15 23:59:59'   \n        group by id_project, cast(dt_build as date)\n        order by id_project, id_build) as tmp\n      where\n        tmp.id_project = aa.id_project\n        and tmp.id_build = aa.id_build\n      ");
                _context.next = 13;
                return (0, _typeorm.getConnection)().query(chartQuery);

              case 13:
                result = _context.sent;
                mountAxis = result.map(function (item) {
                  return {
                    x: moment(item.x).format("DD/MM/YYYY"),
                    y: "".concat(item.y)
                  };
                });
                resultData = {
                  nameProject: result[0].name_project,
                  chartName: query.chartName,
                  axisNameY: "Eixo Y",
                  axisNameX: "Eixo X",
                  axis: mountAxis
                };
                return _context.abrupt("return", resultData);

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function resolve(_x, _x2) {
        return _resolve.apply(this, arguments);
      }

      return resolve;
    }()
  }
};
var _default = queries;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ncmFwaHFsL3F1ZXJpZXMvY2hhcnQtcXVlcnkudHMiXSwibmFtZXMiOlsicXVlcmllcyIsImNoYXJ0IiwidHlwZSIsIkNoYXJ0VHlwZSIsImFyZ3MiLCJjaGFydFR5cGUiLCJuYW1lIiwiR3JhcGhRTE5vbk51bGwiLCJHcmFwaFFMU3RyaW5nIiwicmVzb2x2ZSIsInJvb3QiLCJwYXJhbXMiLCJxdWVyeSIsInN0ciIsImNoYXJ0TmFtZSIsImNoYXJ0UXVlcnkiLCJyZXN1bHQiLCJtb3VudEF4aXMiLCJtYXAiLCJpdGVtIiwieCIsIm1vbWVudCIsImZvcm1hdCIsInkiLCJyZXN1bHREYXRhIiwibmFtZVByb2plY3QiLCJuYW1lX3Byb2plY3QiLCJheGlzTmFtZVkiLCJheGlzTmFtZVgiLCJheGlzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0FBT0EsSUFBTUEsT0FBTyxHQUFHO0FBQ2RDLEVBQUFBLEtBQUssRUFBRTtBQUNMQyxJQUFBQSxJQUFJLEVBQUVDLG9CQUREO0FBRUxDLElBQUFBLElBQUksRUFBRTtBQUNKQyxNQUFBQSxTQUFTLEVBQUU7QUFDVEMsUUFBQUEsSUFBSSxFQUFFLFdBREc7QUFFVEosUUFBQUEsSUFBSSxFQUFFLElBQUlLLHVCQUFKLENBQW1CQyxzQkFBbkI7QUFGRztBQURQLEtBRkQ7QUFRTEMsSUFBQUEsT0FBTztBQUFBO0FBQUE7QUFBQSw4QkFBRSxpQkFBT0MsSUFBUCxFQUFhQyxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNIQyxnQkFBQUEsS0FERyxHQUNzQjtBQUMzQkMsa0JBQUFBLEdBQUcsRUFBRSxFQURzQjtBQUUzQkMsa0JBQUFBLFNBQVMsRUFBRTtBQUZnQixpQkFEdEI7QUFBQSw4QkFNQ0gsTUFBTSxDQUFDTixTQU5SO0FBQUEsZ0RBT0EsVUFQQSx1QkFjQSxPQWRBLHVCQWlCQSxnQkFqQkE7QUFBQTs7QUFBQTtBQVFITyxnQkFBQUEsS0FBSyxHQUFHO0FBQ05DLGtCQUFBQSxHQUFHLEVBQ0Qsa0VBRkk7QUFHTkMsa0JBQUFBLFNBQVMsRUFBRTtBQUhMLGlCQUFSO0FBUkc7O0FBQUE7QUFlSEYsZ0JBQUFBLEtBQUssR0FBRztBQUFFQyxrQkFBQUEsR0FBRyxFQUFFLGNBQVA7QUFBdUJDLGtCQUFBQSxTQUFTLEVBQUU7QUFBbEMsaUJBQVI7QUFmRzs7QUFBQTtBQWtCSEYsZ0JBQUFBLEtBQUssR0FBRztBQUNOQyxrQkFBQUEsR0FBRyxFQUFFLDhCQURDO0FBRU5DLGtCQUFBQSxTQUFTLEVBQUU7QUFGTCxpQkFBUjtBQWxCRzs7QUFBQTtBQXlCREMsZ0JBQUFBLFVBekJDLG9MQThCSEgsS0FBSyxDQUFDQyxHQTlCSDtBQUFBO0FBQUEsdUJBOENjLDhCQUFnQkQsS0FBaEIsQ0FBc0JHLFVBQXRCLENBOUNkOztBQUFBO0FBOENEQyxnQkFBQUEsTUE5Q0M7QUErQ0RDLGdCQUFBQSxTQS9DQyxHQStDV0QsTUFBTSxDQUFDRSxHQUFQLENBQVcsVUFBQUMsSUFBSSxFQUFJO0FBQ25DLHlCQUFPO0FBQUVDLG9CQUFBQSxDQUFDLEVBQUVDLE1BQU0sQ0FBQ0YsSUFBSSxDQUFDQyxDQUFOLENBQU4sQ0FBZUUsTUFBZixDQUFzQixZQUF0QixDQUFMO0FBQTBDQyxvQkFBQUEsQ0FBQyxZQUFLSixJQUFJLENBQUNJLENBQVY7QUFBM0MsbUJBQVA7QUFDRCxpQkFGaUIsQ0EvQ1g7QUFtRERDLGdCQUFBQSxVQW5EQyxHQW1EWTtBQUNqQkMsa0JBQUFBLFdBQVcsRUFBRVQsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVVSxZQUROO0FBRWpCWixrQkFBQUEsU0FBUyxFQUFFRixLQUFLLENBQUNFLFNBRkE7QUFHakJhLGtCQUFBQSxTQUFTLEVBQUUsUUFITTtBQUlqQkMsa0JBQUFBLFNBQVMsRUFBRSxRQUpNO0FBS2pCQyxrQkFBQUEsSUFBSSxFQUFFWjtBQUxXLGlCQW5EWjtBQUFBLGlEQTBEQU8sVUExREE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBRjs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQVJGO0FBRE8sQ0FBaEI7ZUF3RWV4QixPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhcnRUeXBlIH0gZnJvbSBcIi4uL3R5cGVzL2NoYXJ0LXR5cGVcIjtcbmltcG9ydCB7IEdyYXBoUUxOb25OdWxsLCBHcmFwaFFMU3RyaW5nIH0gZnJvbSBcImdyYXBocWxcIjtcbmltcG9ydCB7IGdldENvbm5lY3Rpb24gfSBmcm9tIFwidHlwZW9ybVwiO1xuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcblxuaW50ZXJmYWNlIElDaGFydFF1ZXJ5VHlwZSB7XG4gIHN0cjogc3RyaW5nO1xuICBjaGFydE5hbWU6IHN0cmluZztcbn1cblxuY29uc3QgcXVlcmllcyA9IHtcbiAgY2hhcnQ6IHtcbiAgICB0eXBlOiBDaGFydFR5cGUsXG4gICAgYXJnczoge1xuICAgICAgY2hhcnRUeXBlOiB7XG4gICAgICAgIG5hbWU6IFwiY2hhcnRUeXBlXCIsXG4gICAgICAgIHR5cGU6IG5ldyBHcmFwaFFMTm9uTnVsbChHcmFwaFFMU3RyaW5nKVxuICAgICAgfVxuICAgIH0sXG4gICAgcmVzb2x2ZTogYXN5bmMgKHJvb3QsIHBhcmFtcykgPT4ge1xuICAgICAgbGV0IHF1ZXJ5OiBJQ2hhcnRRdWVyeVR5cGUgPSB7XG4gICAgICAgIHN0cjogXCJcIixcbiAgICAgICAgY2hhcnROYW1lOiBcIlwiXG4gICAgICB9O1xuXG4gICAgICBzd2l0Y2ggKHBhcmFtcy5jaGFydFR5cGUpIHtcbiAgICAgICAgY2FzZSBcImNvdmVyYWdlXCI6XG4gICAgICAgICAgcXVlcnkgPSB7XG4gICAgICAgICAgICBzdHI6XG4gICAgICAgICAgICAgIFwiY2FzdChhYS5xdF9jb3ZlcmVkIGFzIGZsb2F0KSAvIGNhc3QoYWEucXRfbGluZSBhcyBmbG9hdCkgKiAxMDAgeVwiLFxuICAgICAgICAgICAgY2hhcnROYW1lOiBcIkNvYmVydHVyYSBkZSB0ZXN0ZXNcIlxuICAgICAgICAgIH07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJsaW5lc1wiOlxuICAgICAgICAgIHF1ZXJ5ID0geyBzdHI6IFwiYWEucXRfbGluZSB5XCIsIGNoYXJ0TmFtZTogXCJRdWFudGlkYWRlIGRlIGxpbmhhc1wiIH07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJjeWNsb21hdGljX21vZFwiOlxuICAgICAgICAgIHF1ZXJ5ID0ge1xuICAgICAgICAgICAgc3RyOiBcImFhLnF0X3JvdXRpbmVjeWNsb21hdGljbW9kIHlcIixcbiAgICAgICAgICAgIGNoYXJ0TmFtZTogXCJDb21wbGV4aWRhZGUgQ2ljbG9tw6F0aWNhXCJcbiAgICAgICAgICB9O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjaGFydFF1ZXJ5OiBzdHJpbmcgPSBgXG4gICAgICBzZWxlY3RcbiAgICAgICAgYWEuaWRfcHJvamVjdCxcbiAgICAgICAgKHNlbGVjdCBubV9wcm9qZWN0IGZyb20gcHJvamVjdCB4eCB3aGVyZSB4eC5pZF9wcm9qZWN0ID0gYWEuaWRfcHJvamVjdCkgbmFtZV9wcm9qZWN0LFxuICAgICAgICBhYS5kdF9idWlsZCB4LFxuICAgICAgICAke3F1ZXJ5LnN0cn1cbiAgICAgIGZyb21cbiAgICAgICAgYnVpbGQgYWEsXG4gICAgICAgIChzZWxlY3RcbiAgICAgICAgICBpZF9wcm9qZWN0LFxuICAgICAgICAgIG1heChpZF9idWlsZCkgaWRfYnVpbGRcbiAgICAgICAgZnJvbSBidWlsZFxuICAgICAgICB3aGVyZVxuICAgICAgICAgIGR0X2J1aWxkID49ICcyMDE5LTAyLTEyIDAwOjAwOjAwJ1xuICAgICAgICAgIGFuZCBkdF9idWlsZCA8PSAnMjAxOS0wMi0xNSAyMzo1OTo1OScgICBcbiAgICAgICAgZ3JvdXAgYnkgaWRfcHJvamVjdCwgY2FzdChkdF9idWlsZCBhcyBkYXRlKVxuICAgICAgICBvcmRlciBieSBpZF9wcm9qZWN0LCBpZF9idWlsZCkgYXMgdG1wXG4gICAgICB3aGVyZVxuICAgICAgICB0bXAuaWRfcHJvamVjdCA9IGFhLmlkX3Byb2plY3RcbiAgICAgICAgYW5kIHRtcC5pZF9idWlsZCA9IGFhLmlkX2J1aWxkXG4gICAgICBgO1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0Q29ubmVjdGlvbigpLnF1ZXJ5KGNoYXJ0UXVlcnkpO1xuICAgICAgY29uc3QgbW91bnRBeGlzID0gcmVzdWx0Lm1hcChpdGVtID0+IHtcbiAgICAgICAgcmV0dXJuIHsgeDogbW9tZW50KGl0ZW0ueCkuZm9ybWF0KFwiREQvTU0vWVlZWVwiKSwgeTogYCR7aXRlbS55fWAgfTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCByZXN1bHREYXRhID0ge1xuICAgICAgICBuYW1lUHJvamVjdDogcmVzdWx0WzBdLm5hbWVfcHJvamVjdCxcbiAgICAgICAgY2hhcnROYW1lOiBxdWVyeS5jaGFydE5hbWUsXG4gICAgICAgIGF4aXNOYW1lWTogXCJFaXhvIFlcIixcbiAgICAgICAgYXhpc05hbWVYOiBcIkVpeG8gWFwiLFxuICAgICAgICBheGlzOiBtb3VudEF4aXNcbiAgICAgIH07XG4gICAgICByZXR1cm4gcmVzdWx0RGF0YTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHF1ZXJpZXM7XG4iXX0=
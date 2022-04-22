'use strict';

var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule
      ? mod
      : {
          default: mod,
        };
  };

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.Foo = void 0;

var Foo_1 = require('./Foo');

Object.defineProperty(exports, 'Foo', {
  enumerable: true,
  get: function get() {
    return __importDefault(Foo_1).default;
  },
});

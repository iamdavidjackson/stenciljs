"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateStringFromTemplate = generateStringFromTemplate;
exports.writeContentToFile = writeContentToFile;
exports.getContentFromFile = getContentFromFile;
exports.generateStringFromTemplateFile = generateStringFromTemplateFile;
exports.generateFileFromTemplate = generateFileFromTemplate;
exports.generateFileFromTemplateFile = generateFileFromTemplateFile;

var _fs = _interopRequireDefault(require("fs"));

var _handlebars = _interopRequireDefault(require("handlebars"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function generateStringFromTemplate(options) {
  var template = options.template,
      data = options.data;

  var compiledTemplate = _handlebars["default"].compile(template);

  return compiledTemplate(data);
}

function writeContentToFile(options) {
  var content = options.content,
      filePath = options.filePath;
  var fsToUse = options.fs || _fs["default"];
  fsToUse.writeFileSync(filePath, content, 'utf8');
}

function getContentFromFile(options) {
  var filePath = options.filePath;
  var fsToUse = options.fs || _fs["default"];
  return fsToUse.readFileSync(filePath, 'utf8');
}

function generateStringFromTemplateFile(options) {
  var input = options.input;
  var template = getContentFromFile(input);
  return generateStringFromTemplate(_objectSpread({}, options, {
    template: template
  }));
}

function generateFileFromTemplate(options) {
  var content = generateStringFromTemplate(options);
  var output = options.output;
  return writeContentToFile(_objectSpread({}, output, {
    content: content
  }));
}

function generateFileFromTemplateFile(options) {
  var input = options.input;
  var template = getContentFromFile(input);
  return generateFileFromTemplate(_objectSpread({}, options, {
    template: template
  }));
}
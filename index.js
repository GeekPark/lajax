'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _spin = require('spin');

var _spin2 = _interopRequireDefault(_spin);

var _ = {
  assign: require('lodash/object/assign'),
  defaultsDeep: require('lodash/object/defaultsDeep'),
  isFunction: require('lodash/lang/isFunction')
};

var loadingClass = 'lajax-loading-wrap';
var getLoading = function getLoading(options) {
  return options._target.find('.' + loadingClass);
};
var SPIN_CONFIG = {
  color: '#000',
  width: 2,
  radius: 8,
  length: 4,
  lines: 10,
  className: 'lajax-loading-wrap'
};

var getOptions = function getOptions(options) {
  return _.defaultsDeep(options || {}, {
    _style: null,
    _target: (0, _jquery2['default'])('body'),
    _ajaxStart: null,
    _ajaxEnd: null
  });
};

var callback = function callback(options, type) {
  if (_.isFunction(options[type])) options[type]();
};

function createSpin(options) {
  new _spin2['default'](Object.assign({}, SPIN_CONFIG, options._style)).spin(options._target.get(0));
}

function lajaxGlobal(params) {
  var options = getOptions(params);
  createSpin(options);
  var $loading = getLoading(options);
  $loading.hide();
  (0, _jquery2['default'])(document).ajaxStart(function () {
    callback(options, '_ajaxStart');
    $loading.show();
  }).ajaxStop(function () {
    callback(options, '_ajaxEnd');
    $loading.hide();
  });
}

function lajax(params) {
  var options = getOptions(params);

  return _jquery2['default'].ajax(_.assign({
    beforeSend: function beforeSend() {
      callback(options, '_ajaxStart');
      createSpin(options);
    },
    complete: function complete() {
      callback(options, '_ajaxEnd');
      getLoading(options).remove();
    },
    global: false
  }, options));
}

exports.lajax = lajax;
exports.lajaxGlobal = lajaxGlobal;

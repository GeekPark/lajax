import $ from 'jquery';
import Spinner from 'spin';

const _ = {
  assign: require('lodash/object/assign'),
  defaultsDeep: require('lodash/object/defaultsDeep'),
  isFunction: require('lodash/lang/isFunction'),
};

const loadingClass = 'lajax-loading-wrap';
const getLoading = options => options._target.find('.' + loadingClass);
const SPIN_CONFIG = {
  color: '#000',
  width: 2,
  radius: 8,
  length: 4,
  lines: 10,
  className: 'lajax-loading-wrap',
};

const getOptions = options => {
  return _.defaultsDeep(options || {}, {
    _style: null,
    _target: $('body'),
    _ajaxStart: null,
    _ajaxEnd: null,
  });
};

const callback = (options, type) => {
  if (_.isFunction(options[type])) options[type]();
};

function createSpin(options) {
  new Spinner(Object.assign({}, SPIN_CONFIG, options._style)).spin(options._target.get(0));
}

function lajaxGlobal(params) {
  const options = getOptions(params);
  createSpin(options);
  const $loading = getLoading(options);
  $loading.hide();
  $(document).ajaxStart(() => {
    callback(options, '_ajaxStart');
    $loading.show();
  }).ajaxStop(() => {
    callback(options, '_ajaxEnd');
    $loading.hide();
  });
}

function lajax(params) {
  const options = getOptions(params);

  return $.ajax(
    _.assign({
      beforeSend: function () {
        callback(options, '_ajaxStart');
        createSpin(options);
      },
      complete: function () {
        callback(options, '_ajaxEnd');
        getLoading(options).remove();
      },
      global: false,
    }, options)
  );
}

export { lajax, lajaxGlobal };

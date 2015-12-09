import $ from 'jquery';
import Spinner from 'spin';

function globalLoading() {
}

function lajax(option) {
  new Spinner({
    color: '#000',
    lines: 12,
  }).spin($('#loading').get(0));

  // return $.ajax(option);
  return {
    global: globalLoading,
  };
}

export default lajax;

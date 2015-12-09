import $ from 'jquery';
import Spinner from 'spin';

function lajax(option) {
  new Spinner({
    color: '#000',
    lines: 12,
  }).spin($('#loading').get(0));
  return $.ajax(option);
}


export default lajax;

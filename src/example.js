import $ from 'jquery';
import lajax from './index';

const $loading = $('#loading');

lajax({ url: 'test.json' });

$(document).ajaxStart(function () {
  $loading.show();
})
.ajaxStop(function () {
  $loading.hide();
});

$('#ajax-button').on('click', () => {
  $.ajax({
    url: 'test.json',
  }).done(data => {
    $('#result').text(JSON.stringify(data));
  });
});

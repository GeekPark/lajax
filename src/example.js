import $ from 'jquery';
import { lajax, lajaxGlobal } from './index';

// using lajaxGlobal
lajaxGlobal({
  _ajaxStart: () => console.log('start'),
  _ajaxEnd: () => console.log('end'),
});

$('#ajax-global').on('click', function () {
  $.ajax({
    url: 'test.json',
  }).done(data => {
    $('#result').text(JSON.stringify(data));
  });
});

// using button loading
$('#ajax-button').on('click', function () {
  const $this = $(this);
  lajax({
    _target: $(this),
    _ajaxStart: () => $this.find('.text').css('opacity', 0),
    _ajaxEnd: () => $this.find('.text').css('opacity', 1),
    _style: {
      radius: 4,
    },
    url: 'test.json',
  }).done(data => {
    $('#result').text(JSON.stringify(data));
  });
});

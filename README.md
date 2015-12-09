lajax - $.ajax with loading
---------
### Install
`gnpm i @geekpark/lajax`

### Usage
#### Step 1
```javascript
import { lajax, lajaxGlobal } from '@geekpark/lajax'
```

#### Step 2 [ Two ways]
```javascript
// initial before using $.ajax
lajaxGlobal({
  _target: $('#ajax-status-wrap'),  // default to $('body'), center within screen
  _style: spinConfig                // loading icon config http://spin.js.org/
});

// loading will automatic show when all $.ajax/getJSON/post start
$.ajax(...);
$.ajax(...);
```
```javascript
// show loading within a button
// lajax just a $.ajax wrapper
$('#button').click(function() {
  lajax({
	_target: $(this),               // where you want show loading ?
	_style: spinConfig              // loading icon config http://spin.js.org/
	url: 'test.json',
	method: 'PUT'
	// ... Other $.ajax params
  }).done(function(data) {
	...
  }).fail(function(jqXHR) {
	...
  });
});
```
### Resource
* spin.js: loading icon generator [Official Site](http://spin.js.org/)

### Example
Clone and run `$ npm i; npm start`

### What is gnpm ?
`gnpm` was private npm registry for [GeekPark](http://www.geekpark.net), [read more](https://github.com/cnpm/cnpmjs.org)

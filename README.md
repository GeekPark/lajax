lajax - $.ajax with loading
---------
### Install
`gnpm i @geekpark/lajax`

### Usage
#### Step 1
```javascript
import { lajax, lajaxGlobal } from '@geekpark/lajax'
```

#### Step 2 [ Two ways, Can work together]
```javascript
// initial before using $.ajax
// all params are optional
lajaxGlobal({
  _target: $('body'),               // loading will center within target
  _style: spinConfig,               // loading icon config http://spin.js.org/
  _ajaxStart: null,
  _ajaxEnd: null
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
	_target: $(this),               // required, where you want show loading ?
	_style: optional,
	_ajaxStart: optional,
	_ajaxEnd: optional
	url: 'test.json',
	method: 'PUT',
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

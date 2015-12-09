isMobile
---------
### Install
`gnpm i @geekpark/ismobile`

### Usage
```javascript
import { isMobileUA, isMobileView } from '@geekpark/ismobile'

if(isMobileUA()) alert('Using Mobile Browser');
if(isMobileView()) alert('Mobile Viewport');
```

### Method list
* `isMobileUA`

* `isIOS`
* `isAndroid`

* `isWechat`
* `isWechatAndroid`
* `isWechatIOS`

* `isMobileView`
* `isTabletView`
* `isMediumView`
* `isLargeView `

> Viewport setting (same as bootstrap)
> mobile < 768 < tablet < 992 < medium < 1200 < large

### What is gnpm ?
`gnpm` was private npm registry for [GeekPark](http://www.geekpark.net), [read more](https://github.com/cnpm/cnpmjs.org)

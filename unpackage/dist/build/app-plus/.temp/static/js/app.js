global.webpackJsonp([13],{

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _vue = __webpack_require__(1);var _vue2 = _interopRequireDefault(_vue);
var _App = __webpack_require__(4);var _App2 = _interopRequireDefault(_App);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var uni = __webpack_require__(0).default;


_vue2.default.config.productionTip = false;

_App2.default.mpType = 'app';

var app = new _vue2.default(_extends({},
_App2.default));

app.$mount();exports.default =

{ config: { "pages": ["^pages/mall/mall", "pages/wealth/wealth", "pages/wealth/crrencyRecord", "pages/wealth/redemptionRecord", "pages/wealth/renwuzhengbi", "pages/wealth/renwuzhengbi_2", "pages/wealth/wealthDetail", "pages/wealth/exchange", "pages/wealth/tickRecord", "pages/chat/chat", "pages/chat/chatFriend", "pages/my/my"], "window": { "navigationBarTextStyle": "black", "navigationBarTitleText": "演示", "navigationBarBackgroundColor": "#000000", "navigationStyle": "custom", "backgroundColor": "#000000" }, "tabBar": { "color": "#7A7E83", "selectedColor": "#007AFF", "borderStyle": "black", "backgroundColor": "#FFFFFF", "list": [{ "pagePath": "pages/mall/mall", "iconPath": "static/mall.png", "selectedIconPath": "static/mallselect.png", "text": "商城" }, { "pagePath": "pages/wealth/wealth", "iconPath": "static/wealth.png", "selectedIconPath": "static/wealthselect.png", "text": "财富" }, { "pagePath": "pages/chat/chat", "iconPath": "static/chat.png", "selectedIconPath": "static/chatselect.png", "text": "社交" }, { "pagePath": "pages/my/my", "iconPath": "static/my.png", "selectedIconPath": "static/myselect.png", "text": "我" }] } } };

/***/ }),

/***/ 4:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__D_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_HBuilderX_plugins_uniapp_lib_uni_loader_js_D_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_D_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__D_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_HBuilderX_plugins_uniapp_lib_uni_loader_js_D_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_D_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_App_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__D_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_HBuilderX_plugins_uniapp_lib_uni_loader_js_D_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_D_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_App_vue__);
function injectStyle (ssrContext) {
  __webpack_require__(65)
}
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */
var __vue_template__ = null
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__D_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_HBuilderX_plugins_uniapp_lib_uni_loader_js_D_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_D_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_App_vue___default.a,
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var uni = __webpack_require__(0).default;exports.default =
{
	onLaunch: function onLaunch() {
		console.log('App Launch');

		/* 5+环境锁定屏幕方向 */
		plus.screen.lockOrientation('portrait-primary'); //锁定
		/* 5+环境升级提示 */
		var server = "https://uniapp.dcloud.io/update"; //检查更新地址
		var req = { //升级检测数据
			"appid": plus.runtime.appid,
			"version": plus.runtime.version,
			"imei": plus.device.imei };

		uni.request({
			url: server,
			data: req,
			success: function success(res) {
				console.log("success", res);
				if (res.statusCode == 200 && res.data.isUpdate) {
					var openUrl = plus.os.name === 'iOS' ? res.data.iOS : res.data.Android;
					uni.showModal({ //提醒用户更新
						title: '更新提示',
						content: '是否选择更新',
						success: function success(res) {
							if (res.confirm) {
								plus.runtime.openURL(openUrl);
							}
						} });

				}
			} });


	},
	onShow: function onShow() {
		console.log('App Show');
	},
	onHide: function onHide() {
		console.log('App Hide');
	} };

/***/ }),

/***/ 65:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[29]);
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 3342:
/***/ (function(module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin

    if(true) {
      // 1643286773423
      var cssReload = __webpack_require__(4783)(module.id, {"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ 5834:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js
var runtime_dom_esm_bundler = __webpack_require__(9963);
// EXTERNAL MODULE: ./src/assets/scss/main.scss
var main = __webpack_require__(3342);
// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(6252);
;// CONCATENATED MODULE: ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/App.vue?vue&type=template&id=15b4d738&ts=true

function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_WeatherPage = (0,runtime_core_esm_bundler/* resolveComponent */.up)("WeatherPage");
    return ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_WeatherPage));
}

;// CONCATENATED MODULE: ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/WeatherPage.vue?vue&type=template&id=bb553aec&ts=true

const _hoisted_1 = { class: "wrapper" };
const _hoisted_2 = {
    key: 0,
    class: "forecast_day"
};
const _hoisted_3 = {
    key: 1,
    class: "forecast_week"
};
function WeatherPagevue_type_template_id_bb553aec_ts_true_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_HeaderComponent = (0,runtime_core_esm_bundler/* resolveComponent */.up)("HeaderComponent");
    const _component_CurrentForecast = (0,runtime_core_esm_bundler/* resolveComponent */.up)("CurrentForecast");
    const _component_HourlyForecastItem = (0,runtime_core_esm_bundler/* resolveComponent */.up)("HourlyForecastItem");
    const _component_DailyForecastItem = (0,runtime_core_esm_bundler/* resolveComponent */.up)("DailyForecastItem");
    const _component_IconSvg = (0,runtime_core_esm_bundler/* resolveComponent */.up)("IconSvg");
    const _component_SettingsPage = (0,runtime_core_esm_bundler/* resolveComponent */.up)("SettingsPage");
    return ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, [
        (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_1, [
            (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_HeaderComponent),
            (_ctx.currentForecast.dt)
                ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_CurrentForecast, {
                    key: 0,
                    currentForecast: _ctx.forecastAdapter(_ctx.currentForecast)
                }, null, 8 /* PROPS */, ["currentForecast"]))
                : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("v-if", true),
            (0,runtime_core_esm_bundler/* createElementVNode */._)("main", null, [
                (_ctx.hourlyForecast.length)
                    ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("section", _hoisted_2, [
                        (0,runtime_core_esm_bundler/* createElementVNode */._)("ul", null, [
                            ((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)(_ctx.hourlyForecast.slice(0, 5), (value, index) => {
                                return ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_HourlyForecastItem, {
                                    hourlyForecast: _ctx.forecastAdapter(value),
                                    key: value.dt,
                                    first: index === 0
                                }, null, 8 /* PROPS */, ["hourlyForecast", "first"]));
                            }), 128 /* KEYED_FRAGMENT */))
                        ])
                    ]))
                    : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("v-if", true),
                (_ctx.dailyForecast.length)
                    ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("section", _hoisted_3, [
                        (0,runtime_core_esm_bundler/* createElementVNode */._)("ul", null, [
                            ((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)(_ctx.dailyForecast.slice(0, 5), (i) => {
                                return ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_DailyForecastItem, {
                                    dailyForecast: _ctx.forecastAdapter(i),
                                    key: i.dt
                                }, null, 8 /* PROPS */, ["dailyForecast"]));
                            }), 128 /* KEYED_FRAGMENT */))
                        ])
                    ]))
                    : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("v-if", true)
            ]),
            (0,runtime_core_esm_bundler/* createElementVNode */._)("button", {
                class: "settings_button",
                onClick: _cache[0] || (_cache[0] =
                    //@ts-ignore
                    (...args) => (_ctx.openSettingsHandler && _ctx.openSettingsHandler(...args)))
            }, [
                (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_IconSvg, {
                    icon: "Settings",
                    size: "24"
                })
            ])
        ]),
        (0,runtime_core_esm_bundler/* createVNode */.Wm)(runtime_dom_esm_bundler/* Transition */.uT, { name: "fade" }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [
                (_ctx.isOpenSettings)
                    ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_SettingsPage, {
                        key: 0,
                        onCloseSettings: _ctx.openSettingsHandler
                    }, null, 8 /* PROPS */, ["onCloseSettings"]))
                    : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("v-if", true)
            ]),
            _: 1 /* STABLE */
        })
    ], 64 /* STABLE_FRAGMENT */));
}

;// CONCATENATED MODULE: ./src/components/WeatherPage.vue?vue&type=template&id=bb553aec&ts=true

// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(2262);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm-bundler.js + 4 modules
var vuex_esm_bundler = __webpack_require__(4250);
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(3577);
;// CONCATENATED MODULE: ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/HeaderComponent.vue?vue&type=template&id=c3100ce6&ts=true

const HeaderComponentvue_type_template_id_c3100ce6_ts_true_hoisted_1 = { class: "location" };
function HeaderComponentvue_type_template_id_c3100ce6_ts_true_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_IconSvg = (0,runtime_core_esm_bundler/* resolveComponent */.up)("IconSvg");
    return ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("header", null, [
        (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_IconSvg, {
            icon: "Location",
            size: "20"
        }),
        (0,runtime_core_esm_bundler/* createElementVNode */._)("span", HeaderComponentvue_type_template_id_c3100ce6_ts_true_hoisted_1, (0,shared_esm_bundler/* toDisplayString */.zw)(_ctx.currentLocation.name), 1 /* TEXT */)
    ]));
}

;// CONCATENATED MODULE: ./src/components/HeaderComponent.vue?vue&type=template&id=c3100ce6&ts=true

;// CONCATENATED MODULE: ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/IconSvg.vue?vue&type=template&id=58b408b1&ts=true

const IconSvgvue_type_template_id_58b408b1_ts_true_hoisted_1 = ["viewBox", "height", "width"];
const IconSvgvue_type_template_id_58b408b1_ts_true_hoisted_2 = ["xlink:href"];
function IconSvgvue_type_template_id_58b408b1_ts_true_render(_ctx, _cache, $props, $setup, $data, $options) {
    return (_ctx.currentIcon)
        ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("svg", {
            key: 0,
            viewBox: _ctx.viewBox,
            height: _ctx.size,
            width: _ctx.size
        }, [
            (0,runtime_core_esm_bundler/* createElementVNode */._)("use", {
                "xlink:href": `#${_ctx.currentIcon.id}`
            }, null, 8 /* PROPS */, IconSvgvue_type_template_id_58b408b1_ts_true_hoisted_2)
        ], 8 /* PROPS */, IconSvgvue_type_template_id_58b408b1_ts_true_hoisted_1))
        : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("v-if", true);
}

;// CONCATENATED MODULE: ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/IconSvg.vue?vue&type=script&lang=ts

/* harmony default export */ var IconSvgvue_type_script_lang_ts = ((0,runtime_core_esm_bundler/* defineComponent */.aZ)({
    name: 'IconSvg',
    props: {
        icon: {
            type: String,
            require: true,
        },
        size: {
            type: String,
            default: '32',
        },
    },
    setup(props) {
        const { icon, size } = (0,reactivity_esm_bundler/* toRefs */.BK)(props);
        const viewBox = (0,reactivity_esm_bundler/* ref */.iH)(`0 0 ${size.value} ${size.value}`);
        const currentIcon = (0,reactivity_esm_bundler/* shallowRef */.XI)('');
        if (icon.value) {
            __webpack_require__(9527)(`./${icon.value}.svg`)
                .then((val) => {
                currentIcon.value = val.default;
            })
                .catch((err) => {
                console.error('Import icon', icon.value, err);
            });
        }
        return {
            currentIcon,
            viewBox,
        };
    },
}));

;// CONCATENATED MODULE: ./src/components/IconSvg.vue?vue&type=script&lang=ts
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/components/IconSvg.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(IconSvgvue_type_script_lang_ts, [['render',IconSvgvue_type_template_id_58b408b1_ts_true_render]])

/* harmony default export */ var IconSvg = (__exports__);
;// CONCATENATED MODULE: ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/HeaderComponent.vue?vue&type=script&lang=ts



/* harmony default export */ var HeaderComponentvue_type_script_lang_ts = ((0,runtime_core_esm_bundler/* defineComponent */.aZ)({
    name: 'HeaderComponent',
    components: {
        IconSvg: IconSvg,
    },
    setup() {
        const store = (0,vuex_esm_bundler/* useStore */.oR)();
        const currentLocation = (0,reactivity_esm_bundler/* computed */.Fl)(() => store.state.settings.currentLocation);
        return {
            currentLocation,
        };
    },
}));

;// CONCATENATED MODULE: ./src/components/HeaderComponent.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./src/components/HeaderComponent.vue




;
const HeaderComponent_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(HeaderComponentvue_type_script_lang_ts, [['render',HeaderComponentvue_type_template_id_c3100ce6_ts_true_render]])

/* harmony default export */ var HeaderComponent = (HeaderComponent_exports_);
;// CONCATENATED MODULE: ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/CurrentForecast.vue?vue&type=template&id=6172e53b&ts=true

const CurrentForecastvue_type_template_id_6172e53b_ts_true_hoisted_1 = { class: "current_weather" };
const CurrentForecastvue_type_template_id_6172e53b_ts_true_hoisted_2 = { class: "main_params" };
const CurrentForecastvue_type_template_id_6172e53b_ts_true_hoisted_3 = { class: "datetime" };
const _hoisted_4 = /*#__PURE__*/ (0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" , ");
const _hoisted_5 = { class: "temperature" };
const _hoisted_6 = { class: "status" };
const _hoisted_7 = { class: "secondary_params" };
function CurrentForecastvue_type_template_id_6172e53b_ts_true_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_IconSvg = (0,runtime_core_esm_bundler/* resolveComponent */.up)("IconSvg");
    return ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("section", CurrentForecastvue_type_template_id_6172e53b_ts_true_hoisted_1, [
        (0,runtime_core_esm_bundler/* createElementVNode */._)("div", CurrentForecastvue_type_template_id_6172e53b_ts_true_hoisted_2, [
            (0,runtime_core_esm_bundler/* createElementVNode */._)("span", CurrentForecastvue_type_template_id_6172e53b_ts_true_hoisted_3, [
                (0,runtime_core_esm_bundler/* createElementVNode */._)("time", null, (0,shared_esm_bundler/* toDisplayString */.zw)(_ctx.getTime(_ctx.datetime)), 1 /* TEXT */),
                (0,runtime_core_esm_bundler/* createElementVNode */._)("time", null, (0,shared_esm_bundler/* toDisplayString */.zw)(_ctx.getMonthDay(_ctx.datetime)), 1 /* TEXT */),
                _hoisted_4,
                (0,runtime_core_esm_bundler/* createElementVNode */._)("time", null, (0,shared_esm_bundler/* toDisplayString */.zw)(_ctx.getYear(_ctx.datetime)), 1 /* TEXT */)
            ]),
            (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_5, [
                (0,runtime_core_esm_bundler/* createTextVNode */.Uk)((0,shared_esm_bundler/* toDisplayString */.zw)(_ctx.currentForecast.temp) + " ", 1 /* TEXT */),
                (_ctx.currentForecast.weather_icon)
                    ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_IconSvg, {
                        key: 0,
                        icon: _ctx.currentForecast.weather_icon,
                        size: "96"
                    }, null, 8 /* PROPS */, ["icon"]))
                    : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("v-if", true)
            ]),
            (0,runtime_core_esm_bundler/* createElementVNode */._)("span", _hoisted_6, (0,shared_esm_bundler/* toDisplayString */.zw)(_ctx.currentForecast.weather_description), 1 /* TEXT */)
        ]),
        (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_7, [
            (0,runtime_core_esm_bundler/* createElementVNode */._)("span", null, [
                (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_IconSvg, {
                    icon: "Wind",
                    size: "32"
                }),
                (0,runtime_core_esm_bundler/* createTextVNode */.Uk)((0,shared_esm_bundler/* toDisplayString */.zw)(_ctx.currentForecast.wind_speed) + ", E", 1 /* TEXT */),
                (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_IconSvg, {
                    class: "icon_transform",
                    style: (0,shared_esm_bundler/* normalizeStyle */.j5)(_ctx.styleIconTransform),
                    icon: "Arrow",
                    size: "22"
                }, null, 8 /* PROPS */, ["style"])
            ]),
            (0,runtime_core_esm_bundler/* createElementVNode */._)("span", null, [
                (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_IconSvg, {
                    icon: "Hygrometer",
                    size: "32"
                }),
                (0,runtime_core_esm_bundler/* createTextVNode */.Uk)((0,shared_esm_bundler/* toDisplayString */.zw)(_ctx.currentForecast.humidity) + "%", 1 /* TEXT */)
            ]),
            (0,runtime_core_esm_bundler/* createElementVNode */._)("span", null, [
                (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_IconSvg, {
                    icon: "PressureGauge",
                    size: "32"
                }),
                (0,runtime_core_esm_bundler/* createTextVNode */.Uk)((0,shared_esm_bundler/* toDisplayString */.zw)(_ctx.currentForecast.pressure), 1 /* TEXT */)
            ])
        ])
    ]));
}

;// CONCATENATED MODULE: ./src/components/CurrentForecast.vue?vue&type=template&id=6172e53b&ts=true

// EXTERNAL MODULE: ../../node_modules/process/browser.js
var browser = __webpack_require__(4406);
;// CONCATENATED MODULE: ./src/helpers/variables.ts

const OW_API_KEY = "01f7afa336235052e0c84825e8e527d1";
const OW_API = 'https://api.openweathermap.org/data/2.5/';
const TELEPORT_API = 'https://api.teleport.org/api/';
const DEFAULT_CURRENT_LOCATION = {
    name: 'Atlanta,US',
    lat: '33.748997',
    lon: '-84.387985',
};
var TEMP_SETTINGS;
(function (TEMP_SETTINGS) {
    TEMP_SETTINGS["CELSIUS"] = "celsius";
    TEMP_SETTINGS["FAHRENHEIT"] = "fahrenheit";
})(TEMP_SETTINGS || (TEMP_SETTINGS = {}));
var WIND_SPEED_SETTINGS;
(function (WIND_SPEED_SETTINGS) {
    WIND_SPEED_SETTINGS["MS"] = "ms";
    WIND_SPEED_SETTINGS["MPH"] = "mph";
})(WIND_SPEED_SETTINGS || (WIND_SPEED_SETTINGS = {}));
var PRESSURE_SETTINGS;
(function (PRESSURE_SETTINGS) {
    PRESSURE_SETTINGS["HPA"] = "hpa";
    PRESSURE_SETTINGS["MMHG"] = "mmhg";
})(PRESSURE_SETTINGS || (PRESSURE_SETTINGS = {}));
const DEFAULT_SETTINGS = {
    temperature: TEMP_SETTINGS.CELSIUS,
    windSpeed: WIND_SPEED_SETTINGS.MS,
    pressure: PRESSURE_SETTINGS.HPA,
};

;// CONCATENATED MODULE: ./src/store/modules/settings.ts

const state = {
    currentLocation: DEFAULT_CURRENT_LOCATION,
    settings: DEFAULT_SETTINGS,
    timezoneOffset: 0,
};
const mutations = {
    changeCurrentLocation(state, data) {
        state.currentLocation = data;
    },
    changeSettings(state, settings) {
        state.settings = settings;
    },
    changeTimezoneOffset(state, tsOffset) {
        state.timezoneOffset = tsOffset;
    },
};
const actions = {
    changeCurrentLocation({ commit }, data) {
        commit('changeCurrentLocation', data);
    },
    changeSettings({ commit }, settings) {
        commit('changeSettings', settings);
    },
    changeTimezoneOffset({ commit }, tsOffset) {
        commit('changeTimezoneOffset', tsOffset);
    },
};
const getters = {};
const settings = {
    namespaced: false,
    state,
    getters,
    actions,
    mutations,
};

;// CONCATENATED MODULE: ./src/store/modules/forecast.ts
const forecast_state = {
    current: {},
    hourly: [],
    daily: [],
};
const forecast_mutations = {
    changeForecast(state, forecast) {
        state.current = forecast.current;
        state.hourly = forecast.hourly;
        state.daily = forecast.daily;
    },
};
const forecast_actions = {
    changeForecast({ commit }, forecast) {
        commit('changeForecast', forecast);
    },
};
const forecast_getters = {
    getCurrentForecast(state) {
        return state.current;
    },
    getHourlyForecast(state) {
        return state.hourly;
    },
    getDailyForecast(state) {
        return state.daily;
    },
};
const forecast = {
    namespaced: false,
    state: forecast_state,
    getters: forecast_getters,
    actions: forecast_actions,
    mutations: forecast_mutations,
};

;// CONCATENATED MODULE: ./src/store/index.ts



const debug = "production" !== 'production';
const store = (0,vuex_esm_bundler/* createStore */.MT)({
    modules: {
        settings: settings,
        forecast: forecast,
    },
    strict: debug,
});
/* harmony default export */ var src_store = (store);

;// CONCATENATED MODULE: ./src/helpers/weatherConditionCodes.ts
const ThunderstormCodeToIcon = new Map([
    [200, 'CloudLightning'],
    [201, 'CloudLightning'],
    [202, 'CloudLightning'],
    [210, 'CloudLightning'],
    [211, 'CloudLightning'],
    [212, 'CloudLightning'],
    [221, 'CloudLightning'],
    [230, 'CloudLightning'],
    [231, 'CloudLightning'],
    [232, 'CloudLightning'],
]);
const DrizzleCodeToIcon = new Map([
    [300, ''],
    [301, ''],
    [302, ''],
    [310, ''],
    [311, ''],
    [312, ''],
    [313, ''],
    [314, ''],
    [321, ''],
]);
const RainCodeToIcon = new Map([
    [500, 'LightRain'],
    [501, 'LightRain'],
    [502, 'HeavyRain'],
    [503, 'HeavyRain'],
    [504, 'HeavyRain'],
    [511, 'HeavyRain'],
    [520, 'HeavyRain'],
    [521, 'HeavyRain'],
    [522, 'HeavyRain'],
    [531, 'HeavyRain'],
]);
const SnowCodeToIcon = new Map([
    [600, 'LightSnow'],
    [601, 'Snow'],
    [602, 'SnowStorm'],
    [611, 'Sleet'],
    [612, 'Sleet'],
    [613, 'Sleet'],
    [615, 'Sleet'],
    [616, 'Sleet'],
    [620, 'LightSnow'],
    [621, 'Snow'],
    [622, 'SnowStorm'],
]);
const AtmosphereCodeToIcon = new Map([
    [701, ''],
    [711, ''],
    [721, ''],
    [731, ''],
    [741, ''],
    [751, ''],
    [761, ''],
    [762, ''],
    [771, ''],
    [781, ''],
]);
const ClearCodeToIcon = new Map([[800, 'Sun']]);
const CloudsCodeToIcon = new Map([
    [801, 'PartlyCloudyDay'],
    [802, 'PartlyCloudyDay'],
    [803, 'Cloud'],
    [804, 'Clouds'],
]);
const WeatherCodeToIcon = new Map([
    ...ThunderstormCodeToIcon,
    ...DrizzleCodeToIcon,
    ...RainCodeToIcon,
    ...SnowCodeToIcon,
    ...AtmosphereCodeToIcon,
    ...ClearCodeToIcon,
    ...CloudsCodeToIcon,
]);

// EXTERNAL MODULE: ./node_modules/luxon/build/cjs-browser/luxon.js
var luxon = __webpack_require__(9490);
;// CONCATENATED MODULE: ./src/helpers/index.ts




const getGeoLocationError = (err) => console.error(err);
const initCurrentLocationToLocalstorage = (currentLocation) => {
    localStorage.setItem('locationName', currentLocation.name);
    localStorage.setItem('locationLat', currentLocation.lat);
    localStorage.setItem('locationLon', currentLocation.lon);
};
const setCurrentLocationToStorage = (currentLocation) => {
    const localStorageIsUndefined = typeof localStorage.locationName === 'undefined';
    const isDefaultParametersInLocalStorage = localStorage.locationName == DEFAULT_CURRENT_LOCATION.name;
    if (typeof currentLocation === 'undefined') {
        if (!localStorageIsUndefined && !isDefaultParametersInLocalStorage) {
            const initCurrentLocation = {
                name: localStorage.locationName,
                lat: localStorage.locationLat || '',
                lon: localStorage.locationLon || '',
            };
            src_store.dispatch('changeCurrentLocation', initCurrentLocation);
        }
        else {
            initCurrentLocationToLocalstorage(DEFAULT_CURRENT_LOCATION);
        }
    }
    else {
        initCurrentLocationToLocalstorage(currentLocation);
        src_store.dispatch('changeCurrentLocation', currentLocation);
    }
};
const checkSettings = (valueOne, valuerTwo) => {
    return (valueOne.temperature == valuerTwo.temperature &&
        valueOne.windSpeed == valuerTwo.windSpeed &&
        valueOne.pressure == valuerTwo.pressure);
};
const initSettingsToLocalstorage = (settings) => {
    localStorage.setItem('temperature', settings.temperature);
    localStorage.setItem('windSpeed', settings.windSpeed);
    localStorage.setItem('pressure', settings.pressure);
};
const setSettingsToStorage = (settings) => {
    const localStorageIsUndefined = typeof localStorage.temperature === 'undefined' ||
        typeof localStorage.windSpeed === 'undefined' ||
        typeof localStorage.pressure === 'undefined';
    const isDefaultParametersInLocalStorage = localStorage.temperature === DEFAULT_SETTINGS.temperature &&
        localStorage.windSpeed === DEFAULT_SETTINGS.windSpeed &&
        localStorage.pressure === DEFAULT_SETTINGS.pressure;
    if (typeof settings === 'undefined') {
        if (!localStorageIsUndefined && !isDefaultParametersInLocalStorage) {
            const initSettings = {
                temperature: localStorage.temperature,
                windSpeed: localStorage.windSpeed,
                pressure: localStorage.pressure,
            };
            src_store.dispatch('changeSettings', initSettings);
        }
        else {
            initSettingsToLocalstorage(DEFAULT_SETTINGS);
        }
    }
    else {
        initSettingsToLocalstorage(settings);
        src_store.dispatch('changeSettings', settings);
    }
};
const getGeoLocation = (success) => {
    const geoLocationOptions = {
        maximumAge: 0,
        timeout: 5000,
        enableHighAccuracy: false,
    };
    navigator.geolocation.getCurrentPosition(success, getGeoLocationError, geoLocationOptions);
};
const firstSymbolToUpper = (desc) => {
    return desc
        .split(' ')
        .map((i) => i[0].toUpperCase() + i.slice(1))
        .join(' ');
};
const convertKToC = (value) => {
    const temp = Math.floor(value - 273.15);
    return `${temp > 0 ? '+' : ''}${temp}°С`;
};
const convertKToF = (value) => {
    const temp = Math.floor((value * 9) / 5 - 459.67);
    return `${temp > 0 ? '+' : ''}${temp}°F`;
};
const convertTemperature = (temp) => {
    // @ts-ignore
    const settingsTemperature = src_store.state.settings.settings.temperature;
    return settingsTemperature === TEMP_SETTINGS.CELSIUS ? convertKToC(temp) : convertKToF(temp);
};
const checkTempField = (temp) => {
    if (typeof temp === 'object' && !Array.isArray(temp) && temp !== null) {
        return {
            max: convertTemperature(temp.max),
            min: convertTemperature(temp.min),
        };
    }
    if (typeof temp === 'number') {
        return convertTemperature(temp);
    }
    return '';
};
const convertWindSpeed = (speed) => {
    // @ts-ignore
    const settingsWindSpeed = src_store.state.settings.settings.windSpeed;
    return settingsWindSpeed === WIND_SPEED_SETTINGS.MS
        ? `${speed.toFixed(1)}m/s`
        : `${(speed * 2.236936).toFixed(1)}mph`;
};
const convertPressure = (pressure) => {
    // @ts-ignore
    const settingsPressure = src_store.state.settings.settings.pressure;
    return settingsPressure === PRESSURE_SETTINGS.HPA
        ? `${Math.floor(pressure)}hPa`
        : `${Math.floor(pressure * 0.75006)}mmhg`;
};
const forecastAdapter = (rowForecast) => {
    const forecast = {
        dt: new Date(rowForecast.dt * 1000),
        temp: checkTempField(rowForecast.temp),
        pressure: convertPressure(rowForecast.pressure),
        humidity: rowForecast.humidity,
        wind_speed: convertWindSpeed(rowForecast.wind_speed),
        wind_deg: rowForecast.wind_deg,
        weather_description: firstSymbolToUpper(rowForecast.weather[0].description),
        weather_icon: WeatherCodeToIcon.get(rowForecast.weather[0].id) || '',
    };
    return forecast;
};
const getDate = (dt) => {
    // @ts-ignore
    const offset = src_store.state.settings.timezoneOffset;
    return luxon/* DateTime.fromJSDate */.ou.fromJSDate(dt).toUTC(offset / 60);
};
const getTime = (dt) => {
    const dtOffset = getDate(dt);
    return dtOffset.toLocaleString(luxon/* DateTime.TIME_24_SIMPLE */.ou.TIME_24_SIMPLE);
};
const getMonthDay = (dt) => {
    const dtOffset = getDate(dt);
    return firstSymbolToUpper(dtOffset.toLocaleString({ month: 'short', day: '2-digit' }));
};
const getYear = (dt) => {
    const dtOffset = getDate(dt);
    return dtOffset.toLocaleString({ year: 'numeric' });
};
const getWeekday = (dt) => {
    const dtOffset = getDate(dt);
    return firstSymbolToUpper(dtOffset.toLocaleString({ weekday: 'long' }));
};

;// CONCATENATED MODULE: ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/CurrentForecast.vue?vue&type=script&lang=ts



/* harmony default export */ var CurrentForecastvue_type_script_lang_ts = ((0,runtime_core_esm_bundler/* defineComponent */.aZ)({
    name: 'CurrentForecast',
    components: {
        IconSvg: IconSvg,
    },
    props: {
        currentForecast: {
            type: Object,
            required: true,
        },
    },
    setup(props) {
        const { currentForecast } = (0,reactivity_esm_bundler/* toRefs */.BK)(props);
        const styleIconTransform = (0,reactivity_esm_bundler/* computed */.Fl)(() => ({ transform: `rotate(${currentForecast.value.wind_deg}deg)` }));
        const datetime = (0,reactivity_esm_bundler/* ref */.iH)(new Date());
        const aClock = () => {
            datetime.value = new Date();
        };
        const idAClock = setInterval(aClock, 1000);
        (0,runtime_core_esm_bundler/* onDeactivated */.se)(() => clearInterval(idAClock));
        return {
            datetime,
            getTime: getTime,
            getMonthDay: getMonthDay,
            getYear: getYear,
            styleIconTransform,
        };
    },
}));

;// CONCATENATED MODULE: ./src/components/CurrentForecast.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./src/components/CurrentForecast.vue




;
const CurrentForecast_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(CurrentForecastvue_type_script_lang_ts, [['render',CurrentForecastvue_type_template_id_6172e53b_ts_true_render]])

/* harmony default export */ var CurrentForecast = (CurrentForecast_exports_);
;// CONCATENATED MODULE: ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/HourlyForecastItem.vue?vue&type=template&id=b6f0ba54&ts=true

function HourlyForecastItemvue_type_template_id_b6f0ba54_ts_true_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_IconSvg = (0,runtime_core_esm_bundler/* resolveComponent */.up)("IconSvg");
    return ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("li", null, [
        (0,runtime_core_esm_bundler/* createElementVNode */._)("span", null, (0,shared_esm_bundler/* toDisplayString */.zw)(_ctx.first ? 'Now' : _ctx.getTime(_ctx.hourlyForecast.dt)), 1 /* TEXT */),
        (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_IconSvg, {
            icon: _ctx.hourlyForecast.weather_icon,
            size: "26"
        }, null, 8 /* PROPS */, ["icon"]),
        (0,runtime_core_esm_bundler/* createElementVNode */._)("span", null, (0,shared_esm_bundler/* toDisplayString */.zw)(_ctx.hourlyForecast.temp), 1 /* TEXT */)
    ]));
}

;// CONCATENATED MODULE: ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/HourlyForecastItem.vue?vue&type=script&lang=ts



/* harmony default export */ var HourlyForecastItemvue_type_script_lang_ts = ((0,runtime_core_esm_bundler/* defineComponent */.aZ)({
    name: 'HourlyForecastItem',
    components: {
        IconSvg: IconSvg,
    },
    props: {
        hourlyForecast: {
            type: Object,
            required: true,
        },
        first: {
            type: Boolean,
            default: false,
        },
    },
    setup() {
        return {
            getTime: getTime,
        };
    },
}));

;// CONCATENATED MODULE: ./src/components/HourlyForecastItem.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./src/components/HourlyForecastItem.vue




;
const HourlyForecastItem_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(HourlyForecastItemvue_type_script_lang_ts, [['render',HourlyForecastItemvue_type_template_id_b6f0ba54_ts_true_render]])

/* harmony default export */ var HourlyForecastItem = (HourlyForecastItem_exports_);
;// CONCATENATED MODULE: ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/DailyForecastItem.vue?vue&type=template&id=49fb2f0f&ts=true

const DailyForecastItemvue_type_template_id_49fb2f0f_ts_true_hoisted_1 = { class: "forecast_week__date" };
const DailyForecastItemvue_type_template_id_49fb2f0f_ts_true_hoisted_2 = { class: "forecast_week__temperature" };
function DailyForecastItemvue_type_template_id_49fb2f0f_ts_true_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_IconSvg = (0,runtime_core_esm_bundler/* resolveComponent */.up)("IconSvg");
    return ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("li", null, [
        (0,runtime_core_esm_bundler/* createElementVNode */._)("div", DailyForecastItemvue_type_template_id_49fb2f0f_ts_true_hoisted_1, [
            (0,runtime_core_esm_bundler/* createElementVNode */._)("span", null, (0,shared_esm_bundler/* toDisplayString */.zw)(_ctx.getMonthDay(_ctx.dailyForecast.dt)), 1 /* TEXT */),
            (0,runtime_core_esm_bundler/* createElementVNode */._)("span", null, (0,shared_esm_bundler/* toDisplayString */.zw)(_ctx.getWeekday(_ctx.dailyForecast.dt)), 1 /* TEXT */)
        ]),
        (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_IconSvg, {
            icon: _ctx.dailyForecast.weather_icon,
            size: "44"
        }, null, 8 /* PROPS */, ["icon"]),
        (0,runtime_core_esm_bundler/* createElementVNode */._)("div", DailyForecastItemvue_type_template_id_49fb2f0f_ts_true_hoisted_2, [
            (0,runtime_core_esm_bundler/* createElementVNode */._)("span", null, (0,shared_esm_bundler/* toDisplayString */.zw)(_ctx.dailyForecast.temp.max), 1 /* TEXT */),
            (0,runtime_core_esm_bundler/* createElementVNode */._)("span", null, (0,shared_esm_bundler/* toDisplayString */.zw)(_ctx.dailyForecast.temp.min), 1 /* TEXT */)
        ])
    ]));
}

;// CONCATENATED MODULE: ./src/components/DailyForecastItem.vue?vue&type=template&id=49fb2f0f&ts=true

;// CONCATENATED MODULE: ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/DailyForecastItem.vue?vue&type=script&lang=ts



/* harmony default export */ var DailyForecastItemvue_type_script_lang_ts = ((0,runtime_core_esm_bundler/* defineComponent */.aZ)({
    name: 'DailyForecastItem',
    components: {
        IconSvg: IconSvg,
    },
    props: {
        dailyForecast: {
            type: Object,
            required: true,
        },
    },
    setup() {
        return {
            getMonthDay: getMonthDay,
            getWeekday: getWeekday,
        };
    },
}));

;// CONCATENATED MODULE: ./src/components/DailyForecastItem.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./src/components/DailyForecastItem.vue




;
const DailyForecastItem_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(DailyForecastItemvue_type_script_lang_ts, [['render',DailyForecastItemvue_type_template_id_49fb2f0f_ts_true_render]])

/* harmony default export */ var DailyForecastItem = (DailyForecastItem_exports_);
;// CONCATENATED MODULE: ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/SettingsPage.vue?vue&type=template&id=5cbe52df&ts=true

const SettingsPagevue_type_template_id_5cbe52df_ts_true_hoisted_1 = { class: "settings" };
const SettingsPagevue_type_template_id_5cbe52df_ts_true_hoisted_2 = { class: "settings__wrapper" };
const SettingsPagevue_type_template_id_5cbe52df_ts_true_hoisted_3 = { class: "settings__header" };
const SettingsPagevue_type_template_id_5cbe52df_ts_true_hoisted_4 = /*#__PURE__*/ (0,runtime_core_esm_bundler/* createElementVNode */._)("span", null, "Settings", -1 /* HOISTED */);
const SettingsPagevue_type_template_id_5cbe52df_ts_true_hoisted_5 = { class: "settings__section" };
const SettingsPagevue_type_template_id_5cbe52df_ts_true_hoisted_6 = /*#__PURE__*/ (0,runtime_core_esm_bundler/* createElementVNode */._)("span", null, "Measure Units", -1 /* HOISTED */);
const SettingsPagevue_type_template_id_5cbe52df_ts_true_hoisted_7 = { class: "settings__item" };
const _hoisted_8 = /*#__PURE__*/ (0,runtime_core_esm_bundler/* createElementVNode */._)("span", null, "Current Location", -1 /* HOISTED */);
const _hoisted_9 = { class: "settings__section" };
const _hoisted_10 = /*#__PURE__*/ (0,runtime_core_esm_bundler/* createElementVNode */._)("span", null, "Measure Units", -1 /* HOISTED */);
const _hoisted_11 = { class: "settings__item" };
const _hoisted_12 = /*#__PURE__*/ (0,runtime_core_esm_bundler/* createElementVNode */._)("span", null, "Temperature", -1 /* HOISTED */);
const _hoisted_13 = /*#__PURE__*/ (0,runtime_core_esm_bundler/* createElementVNode */._)("label", { for: "celsius" }, "C°", -1 /* HOISTED */);
const _hoisted_14 = /*#__PURE__*/ (0,runtime_core_esm_bundler/* createElementVNode */._)("label", { for: "fahrenheit" }, "F°", -1 /* HOISTED */);
const _hoisted_15 = { class: "settings__item" };
const _hoisted_16 = /*#__PURE__*/ (0,runtime_core_esm_bundler/* createElementVNode */._)("span", null, "Wind Speed", -1 /* HOISTED */);
const _hoisted_17 = /*#__PURE__*/ (0,runtime_core_esm_bundler/* createElementVNode */._)("label", { for: "ms" }, "m/s", -1 /* HOISTED */);
const _hoisted_18 = /*#__PURE__*/ (0,runtime_core_esm_bundler/* createElementVNode */._)("label", { for: "mph" }, "mph", -1 /* HOISTED */);
const _hoisted_19 = { class: "settings__item" };
const _hoisted_20 = /*#__PURE__*/ (0,runtime_core_esm_bundler/* createElementVNode */._)("span", null, "Pressure", -1 /* HOISTED */);
const _hoisted_21 = /*#__PURE__*/ (0,runtime_core_esm_bundler/* createElementVNode */._)("label", { for: "hpa" }, "hPa", -1 /* HOISTED */);
const _hoisted_22 = /*#__PURE__*/ (0,runtime_core_esm_bundler/* createElementVNode */._)("label", { for: "mmhg" }, "mmHg", -1 /* HOISTED */);
const _hoisted_23 = ["disabled"];
function SettingsPagevue_type_template_id_5cbe52df_ts_true_render(_ctx, _cache, $props, $setup, $data, $options) {
    var _a;
    const _component_IconSvg = (0,runtime_core_esm_bundler/* resolveComponent */.up)("IconSvg");
    const _component_SettingsModal = (0,runtime_core_esm_bundler/* resolveComponent */.up)("SettingsModal");
    return ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("section", SettingsPagevue_type_template_id_5cbe52df_ts_true_hoisted_1, [
        (0,runtime_core_esm_bundler/* createElementVNode */._)("div", SettingsPagevue_type_template_id_5cbe52df_ts_true_hoisted_2, [
            (0,runtime_core_esm_bundler/* createElementVNode */._)("div", SettingsPagevue_type_template_id_5cbe52df_ts_true_hoisted_3, [
                (0,runtime_core_esm_bundler/* createElementVNode */._)("button", {
                    class: "settings_button",
                    onClick: _cache[0] || (_cache[0] =
                        //@ts-ignore
                        (...args) => (_ctx.closeSettingsHandler && _ctx.closeSettingsHandler(...args)))
                }, [
                    (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_IconSvg, {
                        icon: "Close",
                        size: "22"
                    })
                ]),
                SettingsPagevue_type_template_id_5cbe52df_ts_true_hoisted_4
            ]),
            (0,runtime_core_esm_bundler/* createElementVNode */._)("div", SettingsPagevue_type_template_id_5cbe52df_ts_true_hoisted_5, [
                SettingsPagevue_type_template_id_5cbe52df_ts_true_hoisted_6,
                (0,runtime_core_esm_bundler/* createElementVNode */._)("div", SettingsPagevue_type_template_id_5cbe52df_ts_true_hoisted_7, [
                    _hoisted_8,
                    (0,runtime_core_esm_bundler/* createElementVNode */._)("button", {
                        type: "button",
                        onMouseup: _cache[1] || (_cache[1] = (0,runtime_dom_esm_bundler/* withModifiers */.iM)(
                        //@ts-ignore
                        (...args) => (_ctx.openSettingsModal && _ctx.openSettingsModal(...args)), ["left"]))
                    }, (0,shared_esm_bundler/* toDisplayString */.zw)((((_a = _ctx.newCurrentLocation) === null || _a === void 0 ? void 0 : _a.name) || _ctx.currentLocation.name).toUpperCase()), 33 /* TEXT, HYDRATE_EVENTS */)
                ])
            ]),
            (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_9, [
                _hoisted_10,
                (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_11, [
                    _hoisted_12,
                    (0,runtime_core_esm_bundler/* createElementVNode */._)("fieldset", null, [
                        (0,runtime_core_esm_bundler/* withDirectives */.wy)((0,runtime_core_esm_bundler/* createElementVNode */._)("input", {
                            id: "celsius",
                            value: "celsius",
                            type: "radio",
                            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => ((_ctx.temperature) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                            [runtime_dom_esm_bundler/* vModelRadio */.G2, _ctx.temperature]
                        ]),
                        _hoisted_13,
                        (0,runtime_core_esm_bundler/* withDirectives */.wy)((0,runtime_core_esm_bundler/* createElementVNode */._)("input", {
                            id: "fahrenheit",
                            value: "fahrenheit",
                            type: "radio",
                            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => ((_ctx.temperature) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                            [runtime_dom_esm_bundler/* vModelRadio */.G2, _ctx.temperature]
                        ]),
                        _hoisted_14
                    ])
                ]),
                (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_15, [
                    _hoisted_16,
                    (0,runtime_core_esm_bundler/* createElementVNode */._)("fieldset", null, [
                        (0,runtime_core_esm_bundler/* withDirectives */.wy)((0,runtime_core_esm_bundler/* createElementVNode */._)("input", {
                            id: "ms",
                            value: "ms",
                            type: "radio",
                            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => ((_ctx.windSpeed) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                            [runtime_dom_esm_bundler/* vModelRadio */.G2, _ctx.windSpeed]
                        ]),
                        _hoisted_17,
                        (0,runtime_core_esm_bundler/* withDirectives */.wy)((0,runtime_core_esm_bundler/* createElementVNode */._)("input", {
                            id: "mph",
                            value: "mph",
                            type: "radio",
                            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => ((_ctx.windSpeed) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                            [runtime_dom_esm_bundler/* vModelRadio */.G2, _ctx.windSpeed]
                        ]),
                        _hoisted_18
                    ])
                ]),
                (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_19, [
                    _hoisted_20,
                    (0,runtime_core_esm_bundler/* createElementVNode */._)("fieldset", null, [
                        (0,runtime_core_esm_bundler/* withDirectives */.wy)((0,runtime_core_esm_bundler/* createElementVNode */._)("input", {
                            id: "hpa",
                            value: "hpa",
                            type: "radio",
                            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => ((_ctx.pressure) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                            [runtime_dom_esm_bundler/* vModelRadio */.G2, _ctx.pressure]
                        ]),
                        _hoisted_21,
                        (0,runtime_core_esm_bundler/* withDirectives */.wy)((0,runtime_core_esm_bundler/* createElementVNode */._)("input", {
                            id: "mmhg",
                            value: "mmhg",
                            type: "radio",
                            "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => ((_ctx.pressure) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                            [runtime_dom_esm_bundler/* vModelRadio */.G2, _ctx.pressure]
                        ]),
                        _hoisted_22
                    ])
                ])
            ]),
            (0,runtime_core_esm_bundler/* createElementVNode */._)("button", {
                class: "settings_button_submit",
                onMouseup: _cache[8] || (_cache[8] =
                    //@ts-ignore
                    (...args) => (_ctx.applySettings && _ctx.applySettings(...args))),
                disabled: _ctx.disabledButton
            }, "Apply Settings", 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_23)
        ]),
        (0,runtime_core_esm_bundler/* createVNode */.Wm)(runtime_dom_esm_bundler/* Transition */.uT, { name: "fade" }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [
                (_ctx.isOpenSettingsModal)
                    ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_SettingsModal, {
                        key: 0,
                        onCloseModal: _ctx.openSettingsModal,
                        onReturnNewCurrentLocation: _ctx.newCurrentLocationHandler
                    }, null, 8 /* PROPS */, ["onCloseModal", "onReturnNewCurrentLocation"]))
                    : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("v-if", true)
            ]),
            _: 1 /* STABLE */
        })
    ]));
}

;// CONCATENATED MODULE: ./src/components/SettingsPage.vue?vue&type=template&id=5cbe52df&ts=true

;// CONCATENATED MODULE: ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/SettingsModal.vue?vue&type=template&id=16074bbe&ts=true

const SettingsModalvue_type_template_id_16074bbe_ts_true_hoisted_1 = { class: "settings__modal" };
const SettingsModalvue_type_template_id_16074bbe_ts_true_hoisted_2 = /*#__PURE__*/ (0,runtime_core_esm_bundler/* createElementVNode */._)("span", { class: "title" }, "Change Location?", -1 /* HOISTED */);
function SettingsModalvue_type_template_id_16074bbe_ts_true_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_SearchLocation = (0,runtime_core_esm_bundler/* resolveComponent */.up)("SearchLocation");
    return ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", null, [
        (0,runtime_core_esm_bundler/* createElementVNode */._)("div", SettingsModalvue_type_template_id_16074bbe_ts_true_hoisted_1, [
            SettingsModalvue_type_template_id_16074bbe_ts_true_hoisted_2,
            (0,runtime_core_esm_bundler/* createElementVNode */._)("button", {
                class: "settings_button_submit plain",
                onMouseup: _cache[0] || (_cache[0] = ($event) => (_ctx.getGeoLocation(_ctx.getLocation)))
            }, " Use My Current Location ", 32 /* HYDRATE_EVENTS */),
            (0,runtime_core_esm_bundler/* createElementVNode */._)("button", {
                class: "settings_button_submit plain",
                onMouseup: _cache[1] || (_cache[1] =
                    //@ts-ignore
                    (...args) => (_ctx.openSearchLocationHandler && _ctx.openSearchLocationHandler(...args)))
            }, " Select location manually ", 32 /* HYDRATE_EVENTS */),
            (0,runtime_core_esm_bundler/* createElementVNode */._)("button", {
                class: "settings_button_submit cancel",
                type: "button",
                onMouseup: _cache[2] || (_cache[2] = (0,runtime_dom_esm_bundler/* withModifiers */.iM)(
                //@ts-ignore
                (...args) => (_ctx.closeModal && _ctx.closeModal(...args)), ["left"]))
            }, "Cancel", 32 /* HYDRATE_EVENTS */)
        ]),
        (0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
            class: "backstage",
            onMouseup: _cache[3] || (_cache[3] = (0,runtime_dom_esm_bundler/* withModifiers */.iM)(
            //@ts-ignore
            (...args) => (_ctx.closeModal && _ctx.closeModal(...args)), ["left"]))
        }, null, 32 /* HYDRATE_EVENTS */),
        (0,runtime_core_esm_bundler/* createVNode */.Wm)(runtime_dom_esm_bundler/* Transition */.uT, { name: "fade" }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [
                (_ctx.isOpenSearchLocation)
                    ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_SearchLocation, {
                        key: 0,
                        onSelectedLocation: _ctx.returnNewCurrentLocation,
                        onCloseSearchLocation: _ctx.openSearchLocationHandler
                    }, null, 8 /* PROPS */, ["onSelectedLocation", "onCloseSearchLocation"]))
                    : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("v-if", true)
            ]),
            _: 1 /* STABLE */
        })
    ]));
}

;// CONCATENATED MODULE: ./src/components/SettingsModal.vue?vue&type=template&id=16074bbe&ts=true

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(655);
;// CONCATENATED MODULE: ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/SearchLocation.vue?vue&type=template&id=2e1083a7&ts=true

const SearchLocationvue_type_template_id_2e1083a7_ts_true_hoisted_1 = { class: "change_location" };
const SearchLocationvue_type_template_id_2e1083a7_ts_true_hoisted_2 = { class: "search_wrapper" };
const SearchLocationvue_type_template_id_2e1083a7_ts_true_hoisted_3 = { class: "list_location" };
function SearchLocationvue_type_template_id_2e1083a7_ts_true_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_IconSvg = (0,runtime_core_esm_bundler/* resolveComponent */.up)("IconSvg");
    const _component_SearchLocationItem = (0,runtime_core_esm_bundler/* resolveComponent */.up)("SearchLocationItem");
    return ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", SearchLocationvue_type_template_id_2e1083a7_ts_true_hoisted_1, [
        (0,runtime_core_esm_bundler/* createElementVNode */._)("div", SearchLocationvue_type_template_id_2e1083a7_ts_true_hoisted_2, [
            (0,runtime_core_esm_bundler/* withDirectives */.wy)((0,runtime_core_esm_bundler/* createElementVNode */._)("input", {
                type: "search",
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => ((_ctx.searchCity) = $event))
            }, null, 512 /* NEED_PATCH */), [
                [runtime_dom_esm_bundler/* vModelText */.nr, _ctx.searchCity]
            ]),
            (0,runtime_core_esm_bundler/* createElementVNode */._)("button", {
                class: "settings_button",
                onMouseup: _cache[1] || (_cache[1] =
                    //@ts-ignore
                    (...args) => (_ctx.closeSearchLocation && _ctx.closeSearchLocation(...args)))
            }, [
                (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_IconSvg, {
                    icon: "CloseSearch",
                    size: "32"
                })
            ], 32 /* HYDRATE_EVENTS */)
        ]),
        (0,runtime_core_esm_bundler/* createElementVNode */._)("ul", SearchLocationvue_type_template_id_2e1083a7_ts_true_hoisted_3, [
            ((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)(_ctx.searchResults, (searchResult, key) => {
                return ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_SearchLocationItem, {
                    key: key,
                    "search-city": _ctx.searchCity,
                    "search-result": searchResult,
                    onSelectedLocation: _ctx.selectedLocationHandler
                }, null, 8 /* PROPS */, ["search-city", "search-result", "onSelectedLocation"]));
            }), 128 /* KEYED_FRAGMENT */))
        ])
    ]));
}

;// CONCATENATED MODULE: ./src/components/SearchLocation.vue?vue&type=template&id=2e1083a7&ts=true

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(9669);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
;// CONCATENATED MODULE: ./src/api/index.ts




const clientOw = (() => {
    const instance = axios_default().create({
        baseURL: OW_API,
    });
    return instance;
})();
const clientTeleport = (() => {
    const instance = axios_default().create({
        baseURL: TELEPORT_API,
    });
    return instance;
})();
const api = {
    // OpenWeather
    getForecast(lat, lon) {
        return (0,tslib_es6/* __awaiter */.mG)(this, void 0, void 0, function* () {
            try {
                const { data } = yield clientOw.get('onecall', {
                    params: {
                        lat,
                        lon,
                        exclude: 'minutely,alerts',
                        appid: OW_API_KEY,
                    },
                });
                src_store.dispatch('changeForecast', data);
                src_store.dispatch('changeTimezoneOffset', data.timezone_offset);
            }
            catch (error) {
                console.error(error);
            }
        });
    },
    // Teleport
    getCityToLocation({ lat, lon }) {
        return (0,tslib_es6/* __awaiter */.mG)(this, void 0, void 0, function* () {
            try {
                const { data: { _embedded }, } = yield clientTeleport.get(`locations/${lat},${lon}/`);
                const name = _embedded['location:nearest-cities'][0]['_links']['location:nearest-city'].name;
                const newLocation = {
                    name,
                    lat: lat.toString(),
                    lon: lon.toString(),
                };
                return newLocation;
            }
            catch (error) {
                console.error(error);
            }
        });
    },
    getCityToName({ name }) {
        return (0,tslib_es6/* __awaiter */.mG)(this, void 0, void 0, function* () {
            try {
                const { data: { _embedded }, } = yield clientTeleport.get('cities/', {
                    params: {
                        search: name,
                        limit: 5,
                    },
                });
                const searchResults = _embedded['city:search-results'];
                return searchResults;
            }
            catch (error) {
                console.error(error);
            }
        });
    },
    getCityToLink({ url }) {
        return (0,tslib_es6/* __awaiter */.mG)(this, void 0, void 0, function* () {
            try {
                const { data } = yield axios_default().get(url);
                const newLocation = {
                    name: data.name,
                    lat: data.location.latlon.latitude.toString(),
                    lon: data.location.latlon.longitude.toString(),
                };
                return newLocation;
            }
            catch (error) {
                console.error(error);
            }
        });
    },
};

;// CONCATENATED MODULE: ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/SearchLocationItem.vue?vue&type=template&id=224283cc&ts=true

function SearchLocationItemvue_type_template_id_224283cc_ts_true_render(_ctx, _cache, $props, $setup, $data, $options) {
    return ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("li", null, [
        (0,runtime_core_esm_bundler/* createElementVNode */._)("button", {
            onMouseup: _cache[0] || (_cache[0] = (0,runtime_dom_esm_bundler/* withModifiers */.iM)(($event) => (_ctx.selectedLocationHandler(_ctx.searchResult._links['city:item'].href)), ["left"]))
        }, [
            (0,runtime_core_esm_bundler/* createElementVNode */._)("span", null, (0,shared_esm_bundler/* toDisplayString */.zw)(_ctx.searchCity), 1 /* TEXT */),
            (0,runtime_core_esm_bundler/* createElementVNode */._)("span", null, (0,shared_esm_bundler/* toDisplayString */.zw)(_ctx.searchResult.matching_full_name.slice(_ctx.searchCity.length)), 1 /* TEXT */)
        ], 32 /* HYDRATE_EVENTS */)
    ]));
}

;// CONCATENATED MODULE: ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/SearchLocationItem.vue?vue&type=script&lang=ts



/* harmony default export */ var SearchLocationItemvue_type_script_lang_ts = ((0,runtime_core_esm_bundler/* defineComponent */.aZ)({
    name: 'SearchLocationItem',
    props: {
        searchCity: {
            type: String,
            default: '',
        },
        searchResult: {
            type: Object,
            required: true,
        },
    },
    emits: ['selectedLocation'],
    setup(props, { emit }) {
        const selectedLocationHandler = (url) => (0,tslib_es6/* __awaiter */.mG)(this, void 0, void 0, function* () {
            const newLocation = yield api.getCityToLink({ url });
            emit('selectedLocation', newLocation);
        });
        return {
            selectedLocationHandler,
        };
    },
}));

;// CONCATENATED MODULE: ./src/components/SearchLocationItem.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./src/components/SearchLocationItem.vue




;
const SearchLocationItem_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(SearchLocationItemvue_type_script_lang_ts, [['render',SearchLocationItemvue_type_template_id_224283cc_ts_true_render]])

/* harmony default export */ var SearchLocationItem = (SearchLocationItem_exports_);
;// CONCATENATED MODULE: ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/SearchLocation.vue?vue&type=script&lang=ts





/* harmony default export */ var SearchLocationvue_type_script_lang_ts = ((0,runtime_core_esm_bundler/* defineComponent */.aZ)({
    name: 'SearchLocation',
    components: {
        IconSvg: IconSvg,
        SearchLocationItem: SearchLocationItem,
    },
    emits: ['selectedLocation', 'closeSearchLocation'],
    setup(props, { emit }) {
        const closeSearchLocation = () => emit('closeSearchLocation');
        const selectedLocationHandler = (newLocation) => {
            emit('selectedLocation', newLocation);
            closeSearchLocation();
        };
        const searchCity = (0,reactivity_esm_bundler/* ref */.iH)('');
        const searchResults = (0,reactivity_esm_bundler/* ref */.iH)([]);
        (0,runtime_core_esm_bundler/* watch */.YP)(searchCity, () => (0,tslib_es6/* __awaiter */.mG)(this, void 0, void 0, function* () {
            if (searchCity.value.length > 2) {
                searchResults.value = yield api.getCityToName({ name: searchCity.value });
            }
            else {
                searchResults.value = [];
            }
        }));
        return {
            searchCity,
            searchResults,
            selectedLocationHandler,
            closeSearchLocation,
        };
    },
}));

;// CONCATENATED MODULE: ./src/components/SearchLocation.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./src/components/SearchLocation.vue




;
const SearchLocation_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(SearchLocationvue_type_script_lang_ts, [['render',SearchLocationvue_type_template_id_2e1083a7_ts_true_render]])

/* harmony default export */ var SearchLocation = (SearchLocation_exports_);
;// CONCATENATED MODULE: ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/SettingsModal.vue?vue&type=script&lang=ts





/* harmony default export */ var SettingsModalvue_type_script_lang_ts = ((0,runtime_core_esm_bundler/* defineComponent */.aZ)({
    name: 'SettingsModal',
    components: {
        SearchLocation: SearchLocation,
    },
    emits: ['closeModal', 'returnNewCurrentLocation'],
    setup(props, { emit }) {
        const closeModal = () => emit('closeModal');
        const returnNewCurrentLocation = (newCurrentLocation) => {
            emit('returnNewCurrentLocation', newCurrentLocation);
            closeModal();
        };
        const isOpenSearchLocation = (0,reactivity_esm_bundler/* ref */.iH)(false);
        const openSearchLocationHandler = () => (isOpenSearchLocation.value = !isOpenSearchLocation.value);
        const getLocation = ({ coords: { latitude: lat, longitude: lon } }) => (0,tslib_es6/* __awaiter */.mG)(this, void 0, void 0, function* () {
            const newLocation = yield api.getCityToLocation({ lat, lon });
            if (newLocation) {
                returnNewCurrentLocation(newLocation);
            }
        });
        return {
            closeModal,
            isOpenSearchLocation,
            openSearchLocationHandler,
            returnNewCurrentLocation,
            getGeoLocation: getGeoLocation,
            getLocation,
        };
    },
}));

;// CONCATENATED MODULE: ./src/components/SettingsModal.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./src/components/SettingsModal.vue




;
const SettingsModal_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(SettingsModalvue_type_script_lang_ts, [['render',SettingsModalvue_type_template_id_16074bbe_ts_true_render]])

/* harmony default export */ var SettingsModal = (SettingsModal_exports_);
;// CONCATENATED MODULE: ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/SettingsPage.vue?vue&type=script&lang=ts





/* harmony default export */ var SettingsPagevue_type_script_lang_ts = ((0,runtime_core_esm_bundler/* defineComponent */.aZ)({
    name: 'SettingsPage',
    components: {
        IconSvg: IconSvg,
        SettingsModal: SettingsModal,
    },
    emits: ['closeSettings'],
    setup(props, { emit }) {
        const store = (0,vuex_esm_bundler/* useStore */.oR)();
        const newCurrentLocation = (0,reactivity_esm_bundler/* ref */.iH)();
        const currentLocation = (0,reactivity_esm_bundler/* computed */.Fl)(() => store.state.settings.currentLocation);
        const newCurrentLocationHandler = (newLocation) => (newCurrentLocation.value = newLocation);
        const closeSettingsHandler = () => emit('closeSettings');
        const isOpenSettingsModal = (0,reactivity_esm_bundler/* ref */.iH)(false);
        const openSettingsModal = () => (isOpenSettingsModal.value = !isOpenSettingsModal.value);
        const currentSettings = (0,reactivity_esm_bundler/* computed */.Fl)(() => store.state.settings.settings);
        const temperature = (0,reactivity_esm_bundler/* ref */.iH)(currentSettings.value.temperature);
        const windSpeed = (0,reactivity_esm_bundler/* ref */.iH)(currentSettings.value.windSpeed);
        const pressure = (0,reactivity_esm_bundler/* ref */.iH)(currentSettings.value.pressure);
        const newSettings = (0,reactivity_esm_bundler/* computed */.Fl)(() => {
            return {
                temperature: temperature.value,
                windSpeed: windSpeed.value,
                pressure: pressure.value,
            };
        });
        const applySettings = () => {
            if (newCurrentLocation.value && newCurrentLocation.value.name != currentLocation.value.name) {
                setCurrentLocationToStorage(newCurrentLocation.value);
            }
            if (!checkSettings(newSettings.value, currentSettings.value)) {
                setSettingsToStorage(newSettings.value);
            }
            closeSettingsHandler();
        };
        const disabledButton = (0,reactivity_esm_bundler/* computed */.Fl)(() => {
            return typeof newCurrentLocation.value === 'undefined' && checkSettings(newSettings.value, currentSettings.value);
        });
        return {
            currentLocation,
            newCurrentLocation,
            closeSettingsHandler,
            isOpenSettingsModal,
            openSettingsModal,
            temperature,
            windSpeed,
            pressure,
            applySettings,
            disabledButton,
            newCurrentLocationHandler,
        };
    },
}));

;// CONCATENATED MODULE: ./src/components/SettingsPage.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./src/components/SettingsPage.vue




;
const SettingsPage_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(SettingsPagevue_type_script_lang_ts, [['render',SettingsPagevue_type_template_id_5cbe52df_ts_true_render]])

/* harmony default export */ var SettingsPage = (SettingsPage_exports_);
;// CONCATENATED MODULE: ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/WeatherPage.vue?vue&type=script&lang=ts










/* harmony default export */ var WeatherPagevue_type_script_lang_ts = ((0,runtime_core_esm_bundler/* defineComponent */.aZ)({
    name: 'WeatherPage',
    components: {
        HeaderComponent: HeaderComponent,
        CurrentForecast: CurrentForecast,
        HourlyForecastItem: HourlyForecastItem,
        DailyForecastItem: DailyForecastItem,
        SettingsPage: SettingsPage,
        IconSvg: IconSvg,
    },
    setup() {
        const store = (0,vuex_esm_bundler/* useStore */.oR)();
        const isOpenSettings = (0,reactivity_esm_bundler/* ref */.iH)(false);
        const openSettingsHandler = () => (isOpenSettings.value = !isOpenSettings.value);
        const currentLocation = (0,reactivity_esm_bundler/* computed */.Fl)(() => store.state.settings.currentLocation);
        (0,runtime_core_esm_bundler/* watchEffect */.m0)(() => api.getForecast(currentLocation.value.lat, currentLocation.value.lon));
        const currentForecast = (0,reactivity_esm_bundler/* computed */.Fl)(() => store.getters.getCurrentForecast);
        const hourlyForecast = (0,reactivity_esm_bundler/* computed */.Fl)(() => store.getters.getHourlyForecast);
        const dailyForecast = (0,reactivity_esm_bundler/* computed */.Fl)(() => store.getters.getDailyForecast);
        setCurrentLocationToStorage();
        setSettingsToStorage();
        return {
            isOpenSettings,
            openSettingsHandler,
            currentForecast,
            hourlyForecast,
            dailyForecast,
            forecastAdapter: forecastAdapter,
        };
    },
}));

;// CONCATENATED MODULE: ./src/components/WeatherPage.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./src/components/WeatherPage.vue




;
const WeatherPage_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(WeatherPagevue_type_script_lang_ts, [['render',WeatherPagevue_type_template_id_bb553aec_ts_true_render]])

/* harmony default export */ var WeatherPage = (WeatherPage_exports_);
;// CONCATENATED MODULE: ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/App.vue?vue&type=script&lang=ts


/* harmony default export */ var Appvue_type_script_lang_ts = ((0,runtime_core_esm_bundler/* defineComponent */.aZ)({
    name: 'App',
    components: {
        WeatherPage: WeatherPage,
    },
}));

;// CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./src/App.vue




;
const App_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(Appvue_type_script_lang_ts, [['render',render]])

/* harmony default export */ var App = (App_exports_);
;// CONCATENATED MODULE: ./src/index.ts




(0,runtime_dom_esm_bundler/* createApp */.ri)(App).use(src_store).mount('#app');


/***/ }),

/***/ 9527:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./Arrow.svg": [
		5873,
		216,
		873
	],
	"./Close.svg": [
		7346,
		216,
		346
	],
	"./CloseSearch.svg": [
		4268,
		216,
		268
	],
	"./Cloud.svg": [
		9035,
		216,
		35
	],
	"./CloudLightning.svg": [
		787,
		216,
		787
	],
	"./Clouds.svg": [
		4459,
		216,
		459
	],
	"./HeavyRain.svg": [
		1967,
		216,
		967
	],
	"./Hygrometer.svg": [
		3832,
		216,
		832
	],
	"./LightRain.svg": [
		9781,
		216,
		781
	],
	"./LightSnow.svg": [
		5558,
		216,
		558
	],
	"./Location.svg": [
		1756,
		216,
		756
	],
	"./PartlyCloudyDay.svg": [
		672,
		216,
		672
	],
	"./PressureGauge.svg": [
		6215,
		216,
		215
	],
	"./Settings.svg": [
		119,
		216,
		119
	],
	"./Sleet.svg": [
		6366,
		216,
		366
	],
	"./Snow.svg": [
		2312,
		216,
		312
	],
	"./SnowStorm.svg": [
		9633,
		216,
		633
	],
	"./Sun.svg": [
		8475,
		216,
		475
	],
	"./Wind.svg": [
		7203,
		216,
		203
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function() { return Object.keys(map); };
webpackAsyncContext.id = 9527;
module.exports = webpackAsyncContext;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	!function() {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = function(chunkId) {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce(function(promises, key) {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "-" + {"35":"9bb84ac64d7b3406ea74","119":"c65d128ccacbd7f198e8","203":"f7b216a14db4af09408b","215":"d8dd2972607e63be5bd5","268":"d07c002e771e4e4c785c","312":"d478f2cb6599458ccbe9","346":"558a750ed998f22254ac","366":"f57f07fc7f7078d7abb0","459":"74f3cfa636496f6e6b97","475":"e812d7ea0fb957e85ec9","558":"e13f81cbda49f55a7d6e","633":"46f35d11b80f5fdccf11","672":"384253e47e0aac576ebd","756":"8916884b13c07f8de110","781":"dfb8fc2fcfada94ed57f","787":"5c60ac99efd587005780","832":"9bcd4f6c1d05b6fd23ba","873":"87e41d5474b743f06c1f","967":"db1f30446f095cb6214d"}[chunkId] + ".js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	!function() {
/******/ 		__webpack_require__.hmrF = function() { return "index." + __webpack_require__.h() + ".hot-update.json"; };
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	!function() {
/******/ 		__webpack_require__.h = function() { return "9cf080a4b931cd45a6e7"; }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	!function() {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "weather_app:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = function(url, done, key, chunkId) {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = function(prev, event) {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach(function(fn) { return fn(event); });
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	!function() {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises;
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 					blockingPromises.push(promise);
/******/ 					waitForBlockingPromises(function () {
/******/ 						return setStatus("ready");
/******/ 					});
/******/ 					return promise;
/******/ 				case "prepare":
/******/ 					blockingPromises.push(promise);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises.length === 0) return fn();
/******/ 			var blocker = blockingPromises;
/******/ 			blockingPromises = [];
/******/ 			return Promise.all(blocker).then(function () {
/******/ 				return waitForBlockingPromises(fn);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						blockingPromises = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error("apply() is only allowed in ready status");
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/css loading */
/******/ 	!function() {
/******/ 		var createStylesheet = function(chunkId, fullhref, resolve, reject) {
/******/ 			var linkTag = document.createElement("link");
/******/ 		
/******/ 			linkTag.rel = "stylesheet";
/******/ 			linkTag.type = "text/css";
/******/ 			var onLinkComplete = function(event) {
/******/ 				// avoid mem leaks.
/******/ 				linkTag.onerror = linkTag.onload = null;
/******/ 				if (event.type === 'load') {
/******/ 					resolve();
/******/ 				} else {
/******/ 					var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 					var realHref = event && event.target && event.target.href || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + realHref + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.type = errorType;
/******/ 					err.request = realHref;
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				}
/******/ 			}
/******/ 			linkTag.onerror = linkTag.onload = onLinkComplete;
/******/ 			linkTag.href = fullhref;
/******/ 		
/******/ 			document.head.appendChild(linkTag);
/******/ 			return linkTag;
/******/ 		};
/******/ 		var findStylesheet = function(href, fullhref) {
/******/ 			var existingLinkTags = document.getElementsByTagName("link");
/******/ 			for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 				var tag = existingLinkTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 				if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
/******/ 			}
/******/ 			var existingStyleTags = document.getElementsByTagName("style");
/******/ 			for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 				var tag = existingStyleTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href");
/******/ 				if(dataHref === href || dataHref === fullhref) return tag;
/******/ 			}
/******/ 		};
/******/ 		var loadStylesheet = function(chunkId) {
/******/ 			return new Promise(function(resolve, reject) {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				if(findStylesheet(href, fullhref)) return resolve();
/******/ 				createStylesheet(chunkId, fullhref, resolve, reject);
/******/ 			});
/******/ 		}
/******/ 		// no chunk loading
/******/ 		
/******/ 		var oldTags = [];
/******/ 		var newTags = [];
/******/ 		var applyHandler = function(options) {
/******/ 			return { dispose: function() {
/******/ 				for(var i = 0; i < oldTags.length; i++) {
/******/ 					var oldTag = oldTags[i];
/******/ 					if(oldTag.parentNode) oldTag.parentNode.removeChild(oldTag);
/******/ 				}
/******/ 				oldTags.length = 0;
/******/ 			}, apply: function() {
/******/ 				for(var i = 0; i < newTags.length; i++) newTags[i].rel = "stylesheet";
/******/ 				newTags.length = 0;
/******/ 			} };
/******/ 		}
/******/ 		__webpack_require__.hmrC.miniCss = function(chunkIds, removedChunks, removedModules, promises, applyHandlers, updatedModulesList) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			chunkIds.forEach(function(chunkId) {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var oldTag = findStylesheet(href, fullhref);
/******/ 				if(!oldTag) return;
/******/ 				promises.push(new Promise(function(resolve, reject) {
/******/ 					var tag = createStylesheet(chunkId, fullhref, function() {
/******/ 						tag.as = "style";
/******/ 						tag.rel = "preload";
/******/ 						resolve();
/******/ 					}, reject);
/******/ 					oldTags.push(oldTag);
/******/ 					newTags.push(tag);
/******/ 				}));
/******/ 			});
/******/ 		}
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			826: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = function(chunkId, promises) {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise(function(resolve, reject) { installedChunkData = installedChunks[chunkId] = [resolve, reject]; });
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = function(event) {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId) {
/******/ 			return new Promise(function(resolve, reject) {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = function(event) {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdateweather_app"] = function(chunkId, moreModules, runtime) {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						!__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						__webpack_require__.o(installedChunks, chunkId) &&
/******/ 						installedChunks[chunkId] !== undefined
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = function() {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then(function(response) {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkweather_app"] = self["webpackChunkweather_app"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [216], function() { return __webpack_require__(5834); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
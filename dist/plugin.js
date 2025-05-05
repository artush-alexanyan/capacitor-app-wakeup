var capacitorAutoWakeUp = (function (exports, core) {
    'use strict';

    const AutoWakeUp = core.registerPlugin('AutoWakeUp', {
        web: () => Promise.resolve().then(function () { return web; }).then((m) => new m.AutoWakeUpWeb()),
    });

    class AutoWakeUpWeb extends core.WebPlugin {
        async echo(options) {
            console.log('ECHO', options);
            return options;
        }
    }

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        AutoWakeUpWeb: AutoWakeUpWeb
    });

    exports.AutoWakeUp = AutoWakeUp;

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map

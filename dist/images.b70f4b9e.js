// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"resources/Paladin.jpg":[function(require,module,exports) {
module.exports = "/Paladin.234051ee.jpg";
},{}],"resources/Hunter.jpg":[function(require,module,exports) {
module.exports = "/Hunter.f2abfc1e.jpg";
},{}],"resources/Mage.jpg":[function(require,module,exports) {
module.exports = "/Mage.dcbe3022.jpg";
},{}],"resources/Druid.jpg":[function(require,module,exports) {
module.exports = "/Druid.1798f7c3.jpg";
},{}],"resources/Rogue.jpg":[function(require,module,exports) {
module.exports = "/Rogue.6a7c19cb.jpg";
},{}],"resources/Sorcerer.jpg":[function(require,module,exports) {
module.exports = "/Sorcerer.a0b4267d.jpg";
},{}],"resources/BloodHunter.jpg":[function(require,module,exports) {
module.exports = "/BloodHunter.047cabcc.jpg";
},{}],"resources/Warrior.jpg":[function(require,module,exports) {
module.exports = "/Warrior.1241a2ac.jpg";
},{}],"resources/enemies/Goblin.jpg":[function(require,module,exports) {
module.exports = "/Goblin.5fad6726.jpg";
},{}],"resources/enemies/Berserker.jpg":[function(require,module,exports) {
module.exports = "/Berserker.4ae211a0.jpg";
},{}],"resources/enemies/Banshee.jpg":[function(require,module,exports) {
module.exports = "/Banshee.daf4cff0.jpg";
},{}],"resources/enemies/Warlock.jpg":[function(require,module,exports) {
module.exports = "/Warlock.952ef8ac.jpg";
},{}],"resources/enemies/Nerubian.jpg":[function(require,module,exports) {
module.exports = "/Nerubian.28271607.jpg";
},{}],"resources/enemies/Illidan.jpg":[function(require,module,exports) {
module.exports = "/Illidan.d6856915.jpg";
},{}],"resources/enemies/Dreadlord.jpg":[function(require,module,exports) {
module.exports = "/Dreadlord.005e9233.jpg";
},{}],"resources/enemies/Sylvanas.jpg":[function(require,module,exports) {
module.exports = "/Sylvanas.b81c1ced.jpg";
},{}],"js/images.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Paladin = _interopRequireDefault(require("../resources/Paladin.jpg"));

var _Hunter = _interopRequireDefault(require("../resources/Hunter.jpg"));

var _Mage = _interopRequireDefault(require("../resources/Mage.jpg"));

var _Druid = _interopRequireDefault(require("../resources/Druid.jpg"));

var _Rogue = _interopRequireDefault(require("../resources/Rogue.jpg"));

var _Sorcerer = _interopRequireDefault(require("../resources/Sorcerer.jpg"));

var _BloodHunter = _interopRequireDefault(require("../resources/BloodHunter.jpg"));

var _Warrior = _interopRequireDefault(require("../resources/Warrior.jpg"));

var _Goblin = _interopRequireDefault(require("../resources/enemies/Goblin.jpg"));

var _Berserker = _interopRequireDefault(require("../resources/enemies/Berserker.jpg"));

var _Banshee = _interopRequireDefault(require("../resources/enemies/Banshee.jpg"));

var _Warlock = _interopRequireDefault(require("../resources/enemies/Warlock.jpg"));

var _Nerubian = _interopRequireDefault(require("../resources/enemies/Nerubian.jpg"));

var _Illidan = _interopRequireDefault(require("../resources/enemies/Illidan.jpg"));

var _Dreadlord = _interopRequireDefault(require("../resources/enemies/Dreadlord.jpg"));

var _Sylvanas = _interopRequireDefault(require("../resources/enemies/Sylvanas.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Portraits = {
  Paladin: _Paladin.default,
  Hunter: _Hunter.default,
  Mage: _Mage.default,
  Druid: _Druid.default,
  Rogue: _Rogue.default,
  Sorcerer: _Sorcerer.default,
  BloodHunter: _BloodHunter.default,
  Warrior: _Warrior.default,
  Goblin: _Goblin.default,
  Berserker: _Berserker.default,
  Banshee: _Banshee.default,
  Warlock: _Warlock.default,
  Illidan: _Illidan.default,
  Dreadlord: _Dreadlord.default,
  Sylvanas: _Sylvanas.default,
  Nerubian: _Nerubian.default
};
var _default = Portraits;
exports.default = _default;
},{"../resources/Paladin.jpg":"resources/Paladin.jpg","../resources/Hunter.jpg":"resources/Hunter.jpg","../resources/Mage.jpg":"resources/Mage.jpg","../resources/Druid.jpg":"resources/Druid.jpg","../resources/Rogue.jpg":"resources/Rogue.jpg","../resources/Sorcerer.jpg":"resources/Sorcerer.jpg","../resources/BloodHunter.jpg":"resources/BloodHunter.jpg","../resources/Warrior.jpg":"resources/Warrior.jpg","../resources/enemies/Goblin.jpg":"resources/enemies/Goblin.jpg","../resources/enemies/Berserker.jpg":"resources/enemies/Berserker.jpg","../resources/enemies/Banshee.jpg":"resources/enemies/Banshee.jpg","../resources/enemies/Warlock.jpg":"resources/enemies/Warlock.jpg","../resources/enemies/Nerubian.jpg":"resources/enemies/Nerubian.jpg","../resources/enemies/Illidan.jpg":"resources/enemies/Illidan.jpg","../resources/enemies/Dreadlord.jpg":"resources/enemies/Dreadlord.jpg","../resources/enemies/Sylvanas.jpg":"resources/enemies/Sylvanas.jpg"}],"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55442" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/images.js"], null)
//# sourceMappingURL=/images.b70f4b9e.js.map
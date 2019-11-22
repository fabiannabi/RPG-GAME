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
})({"js/player.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* Se crea un object Constructor para generar los jugadores
con los stats que se requieran en su momento, para eso se declara al inicio
una variable global que pueda ser usada por otro objeto que le dara los 
valores*/
var Player = function Player(classType, health, mana, strength, agility, speed, special) {
  this.classType = classType;
  this.health = health;
  this.mana = mana;
  this.strength = strength;
  this.agility = agility;
  this.speed = speed;
  this.special = special;
};

var _default = Player;
exports.default = _default;
},{}],"js/emeny.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var Enemy = function Enemy(enemyType, health, mana, strength, agility, speed) {
  this.enemyType = enemyType;
  this.health = health;
  this.mana = mana;
  this.strength = strength;
  this.agility = agility;
  this.speed = speed;
};

var _default = Enemy;
exports.default = _default;
},{}],"resources/Paladin.jpg":[function(require,module,exports) {
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
},{"../resources/Paladin.jpg":"resources/Paladin.jpg","../resources/Hunter.jpg":"resources/Hunter.jpg","../resources/Mage.jpg":"resources/Mage.jpg","../resources/Druid.jpg":"resources/Druid.jpg","../resources/Rogue.jpg":"resources/Rogue.jpg","../resources/Sorcerer.jpg":"resources/Sorcerer.jpg","../resources/BloodHunter.jpg":"resources/BloodHunter.jpg","../resources/Warrior.jpg":"resources/Warrior.jpg","../resources/enemies/Goblin.jpg":"resources/enemies/Goblin.jpg","../resources/enemies/Berserker.jpg":"resources/enemies/Berserker.jpg","../resources/enemies/Banshee.jpg":"resources/enemies/Banshee.jpg","../resources/enemies/Warlock.jpg":"resources/enemies/Warlock.jpg","../resources/enemies/Nerubian.jpg":"resources/enemies/Nerubian.jpg","../resources/enemies/Illidan.jpg":"resources/enemies/Illidan.jpg","../resources/enemies/Dreadlord.jpg":"resources/enemies/Dreadlord.jpg","../resources/enemies/Sylvanas.jpg":"resources/enemies/Sylvanas.jpg"}],"js/moves.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SpecialPlayerMoves = exports.PlayerMoves = void 0;
var PlayerMoves = {
  calcAttack: function calcAttack(player, enemy) {
    var currentPlayer = player;
    var currentEnemy = enemy; //determinar quien ataca primero

    var getPlayerSpeed = player.speed;
    var getEnemySpeed = enemy.speed; //player attacks

    var playerAttack = function playerAttack(currentPlayer) {
      var calcBaseDamage;

      if (currentPlayer.mana > 0) {
        calcBaseDamage = currentPlayer.strength * currentPlayer.mana / 1000;
      } else {
        calcBaseDamage = currentPlayer.strength * currentPlayer.agility / 1000;
      } //calcular un ataque que no sea siempre el mismo


      var ofsetDamage = Math.floor(Math.random() * Math.floor(10));
      var calcoutPutDamage = calcBaseDamage + ofsetDamage; //para ver cuantas veces ataca

      var numberOfHits = Math.floor(Math.random() * Math.floor(currentPlayer.agility / 10) / 2) + 1;
      var attackValues = [calcoutPutDamage, numberOfHits];
      return attackValues;
    }; //enemy attacks


    var enemyAttack = function enemyAttack(currentEnemy) {
      var calcBaseDamage;

      if (currentEnemy.mana > 0) {
        calcBaseDamage = currentEnemy.strength * currentEnemy.mana / 1000;
      } else {
        calcBaseDamage = currentEnemy.strength * currentEnemy.agility / 1000;
      } //calcular un ataque que no sea siempre el mismo


      var ofsetDamage = Math.floor(Math.random() * Math.floor(10));
      var calcoutPutDamage = calcBaseDamage + ofsetDamage; //para ver cuantas veces ataca

      var numberOfHits = Math.floor(Math.random() * Math.floor(currentEnemy.agility / 10) / 2) + 1;
      var attackValues = [calcoutPutDamage, numberOfHits];
      return attackValues;
    }; //conseguir la vida de personajes para modificarla


    var getPlayerHealth = document.querySelector(".health-player");
    var getEnemyHealth = document.querySelector(".health-enemy"); //iniciar ataques dependiendo de quien es mas rapido

    if (getPlayerSpeed >= getEnemySpeed) {
      var playerAttackValues = playerAttack(currentPlayer);
      var totalDamage = playerAttackValues[0] * playerAttackValues[1];
      enemy.health = enemy.health - totalDamage;
      alert("Your " + currentPlayer.classType + " hits for " + playerAttackValues[0] + " damage " + playerAttackValues[1] + " times.");

      if (enemy.health <= 0) {
        alert("You won! Refresh the Browser to play Again");
        getPlayerHealth.innerHTML = "Health: " + player.health;
        getEnemyHealth.innerHTML = "Health: 0";
      } else {
        getEnemyHealth.innerHTML = "Health: " + enemy.health; //cuando el enemigo ataca si no esta muerto

        var enemyAttackValues = enemyAttack(currentEnemy);

        var _totalDamage = enemyAttackValues[0] * enemyAttackValues[1];

        player.health = player.health - _totalDamage;
        alert("The enemy " + currentEnemy.enemyType + " hits for " + enemyAttackValues[0] + " damage " + enemyAttackValues[1] + " times.");

        if (player.health <= 0) {
          alert("You loose! Refresh the Browser to play Again");
          getPlayerHealth.innerHTML = "Health: 0";
          getEnemyHealth.innerHTML = "Health: " + enemy.health;
        } else {
          getPlayerHealth.innerHTML = "Health: " + player.health;
        }
      }
    } // si el enemigo es mas rapido que el jugador


    if (getEnemySpeed >= getPlayerSpeed) {
      var _enemyAttackValues = enemyAttack(currentEnemy);

      var _totalDamage2 = _enemyAttackValues[0] * _enemyAttackValues[1];

      player.health = player.health - _totalDamage2;
      alert("The enemy " + currentEnemy.enemyType + " hits for " + _enemyAttackValues[0] + " damage " + _enemyAttackValues[1] + " times.");

      if (player.health <= 0) {
        alert("You loose! Refresh the Browser to play Again");
        getEnemyHealth.innerHTML = "Health: " + enemy.health;
        getPlayerHealth.innerHTML = "Health: 0";
      } else {
        getPlayerHealth.innerHTML = "Health: " + player.health; //cuando el player ataca si no esta muerto

        var _playerAttackValues = playerAttack(currentPlayer);

        var _totalDamage3 = _playerAttackValues[0] * _playerAttackValues[1];

        enemy.health = enemy.health - _totalDamage3;
        alert("Your " + currentPlayer.classType + " hits for " + _playerAttackValues[0] + " damage " + _playerAttackValues[1] + " times.");

        if (enemy.health <= 0) {
          alert("You win! Refresh the Browser to play Again");
          getEnemyHealth.innerHTML = "Health: 0";
          getPlayerHealth.innerHTML = "Health: " + player.health;
        } else {
          getEnemyHealth.innerHTML = "Health: " + enemy.health;
        }
      }
    }
  }
}; //
//FUNCIONALIDAD PARA ATAQUE ESPECIAL
//

exports.PlayerMoves = PlayerMoves;
var SpecialPlayerMoves = {
  calcAttack: function calcAttack(player, enemy) {
    var currentPlayer = player;
    var currentEnemy = enemy; //determinar quien ataca primero

    var getPlayerSpeed = player.speed;
    var getEnemySpeed = enemy.speed; //player attacks

    var playerAttack = function playerAttack(currentPlayer) {
      var calcBaseDamage;

      if (currentPlayer.mana > 0) {
        calcBaseDamage = currentPlayer.strength * currentPlayer.mana / 1000;
      } else {
        calcBaseDamage = currentPlayer.strength * currentPlayer.agility / 1000;
      } //calcular un ataque que no sea siempre el mismo


      var ofsetDamage = Math.floor(Math.random() * Math.floor(10));
      var calcoutPutDamage = calcBaseDamage + ofsetDamage; //para ver cuantas veces ataca

      var numberOfHits = Math.floor(Math.random() * Math.floor(currentPlayer.agility / 10) / 2) + 1;
      var attackValues = [calcoutPutDamage, numberOfHits];
      return attackValues;
    }; //enemy attacks


    var enemyAttack = function enemyAttack(currentEnemy) {
      var calcBaseDamage;

      if (currentEnemy.mana > 0) {
        calcBaseDamage = currentEnemy.strength * currentEnemy.mana / 1000;
      } else {
        calcBaseDamage = currentEnemy.strength * currentEnemy.agility / 1000;
      } //calcular un ataque que no sea siempre el mismo


      var ofsetDamage = Math.floor(Math.random() * Math.floor(10));
      var calcoutPutDamage = calcBaseDamage + ofsetDamage; //para ver cuantas veces ataca

      var numberOfHits = Math.floor(Math.random() * Math.floor(currentEnemy.agility / 10) / 2) + 1;
      var attackValues = [calcoutPutDamage, numberOfHits];
      return attackValues;
    }; //conseguir la vida de personajes para modificarla


    var getPlayerHealth = document.querySelector(".health-player");
    var getEnemyHealth = document.querySelector(".health-enemy"); //iniciar ataques dependiendo de quien es mas rapido

    if (getPlayerSpeed >= getEnemySpeed) {
      var playerAttackValues = playerAttack(currentPlayer);
      var totalDamage = playerAttackValues[0] * playerAttackValues[1];
      enemy.health = enemy.health - totalDamage;
      alert("Your " + currentPlayer.classType + " hits for " + playerAttackValues[0] + " damage " + playerAttackValues[1] + " times.");

      if (enemy.health <= 0) {
        alert("You won! Refresh the Browser to play Again");
        getPlayerHealth.innerHTML = "Health: " + player.health;
        getEnemyHealth.innerHTML = "Health: 0";
      } else {
        getEnemyHealth.innerHTML = "Health: " + enemy.health; //cuando el enemigo ataca si no esta muerto

        var enemyAttackValues = enemyAttack(currentEnemy);

        var _totalDamage4 = enemyAttackValues[0] * enemyAttackValues[1];

        player.health = player.health - _totalDamage4;
        alert("The enemy " + currentEnemy.enemyType + " hits for " + enemyAttackValues[0] + " damage " + enemyAttackValues[1] + " times.");

        if (player.health <= 0) {
          alert("You loose! Refresh the Browser to play Again");
          getPlayerHealth.innerHTML = "Health: 0";
          getEnemyHealth.innerHTML = "Health: " + enemy.health;
        } else {
          getPlayerHealth.innerHTML = "Health: " + player.health;
        }
      }
    } // si el enemigo es mas rapido que el jugador


    if (getEnemySpeed >= getPlayerSpeed) {
      var _enemyAttackValues2 = enemyAttack(currentEnemy);

      var _totalDamage5 = _enemyAttackValues2[0] * _enemyAttackValues2[1];

      player.health = player.health - _totalDamage5;
      alert("The enemy " + currentEnemy.enemyType + " hits for " + _enemyAttackValues2[0] + " damage " + _enemyAttackValues2[1] + " times.");

      if (player.health <= 0) {
        alert("You loose! Refresh the Browser to play Again");
        getEnemyHealth.innerHTML = "Health: " + enemy.health;
        getPlayerHealth.innerHTML = "Health: 0";
      } else {
        getPlayerHealth.innerHTML = "Health: " + player.health; //cuando el player ataca si no esta muerto

        var _playerAttackValues2 = playerAttack(currentPlayer);

        var _totalDamage6 = _playerAttackValues2[0] * _playerAttackValues2[1];

        enemy.health = enemy.health - _totalDamage6;
        alert("Your " + currentPlayer.classType + " hits for " + _playerAttackValues2[0] + " damage " + _playerAttackValues2[1] + " times.");

        if (enemy.health <= 0) {
          alert("You win! Refresh the Browser to play Again");
          getEnemyHealth.innerHTML = "Health: 0";
          getPlayerHealth.innerHTML = "Health: " + player.health;
        } else {
          getEnemyHealth.innerHTML = "Health: " + enemy.health;
        }
      }
    }
  }
};
exports.SpecialPlayerMoves = SpecialPlayerMoves;
},{}],"js/functionality.js":[function(require,module,exports) {
"use strict";

var _player = _interopRequireDefault(require("./player"));

var _emeny = _interopRequireDefault(require("./emeny"));

var _images = _interopRequireDefault(require("./images"));

var _moves = require("./moves");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* el objeto que dentro tienen metodos(funciones), que inician el juego
y que se mandan llamar cada vez para generar los personajes */
document.querySelector(".Paladin").addEventListener("click", function (event) {
  GameManager.setGameStart("Paladin");
});
document.querySelector(".Hunter").addEventListener("click", function (event) {
  GameManager.setGameStart("Hunter");
});
document.querySelector(".Mage").addEventListener("click", function (event) {
  GameManager.setGameStart("Mage");
});
document.querySelector(".Druid").addEventListener("click", function (event) {
  GameManager.setGameStart("Druid");
});
document.querySelector(".Rogue").addEventListener("click", function (event) {
  GameManager.setGameStart("Rogue");
});
document.querySelector(".Sorcerer").addEventListener("click", function (event) {
  GameManager.setGameStart("Sorcerer");
});
document.querySelector(".BloodHunter").addEventListener("click", function (event) {
  GameManager.setGameStart("BloodHunter");
});
document.querySelector(".Warrior").addEventListener("click", function (event) {
  GameManager.setGameStart("Warrior");
});
var player;
var enemy;
var specialMove;
var GameManager = {
  setGameStart: function setGameStart(classType) {
    this.resetPlayer(classType);
    this.setPreFight();
  },
  resetPlayer: function resetPlayer(classType) {
    switch (classType) {
      case "Paladin":
        player = new _player.default(classType, 220, 100, 170, 80, 90, "HOLY SMITE");
        break;

      case "Hunter":
        player = new _player.default(classType, 170, 0, 100, 200, 180, "SNIPE");
        break;

      case "Mage":
        player = new _player.default(classType, 150, 180, 70, 100, 90, "FROSTBALL");
        break;

      case "Druid":
        player = new _player.default(classType, 170, 0, 150, 150, 180, "LUNAR FLARE");
        break;

      case "Rogue":
        player = new _player.default(classType, 150, 0, 30, 200, 190, "BACKSTAB");
        break;

      case "Sorcerer":
        player = new _player.default(classType, 150, 200, 50, 120, 150, "ARCANE MISSILE");
        break;

      case "BloodHunter":
        player = new _player.default(classType, 150, 50, 80, 150, 100, "RAVAGE");
        break;

      case "Warrior":
        player = new _player.default(classType, 250, 0, 220, 50, 50, "SKULL BASH");
        break;
    }

    specialMove = player.special;
    /*para sobreescribir el html y no hacer uno nuevo se utilia este selector
    que agarra el html con la clase marcada y se modificara a las especificaciones
    que le pongamos*/

    var getInterface = document.querySelector(".interface");
    getInterface.innerHTML = '<img src="' + _images.default[classType] + '" class ="img-avatar"><div class="portrait2"><h3 class="champion-name2">' + classType + "<h3><p class='health-player'>Health: " + player.health + "</p><p>Mana: " + player.mana + "</p><p>Strength: " + player.strength + "</p><p>Agility: " + player.agility + "</p><p>Speed: " + player.speed + "</p></div>";
  },
  setPreFight: function setPreFight() {
    var getHeader = document.querySelector(".header");
    var getActions = document.querySelector(".actions");
    var getArena = document.querySelector(".arena");
    getHeader.innerHTML = "<p class='header2'>FIND AN ENEMY!</p>";
    getActions.innerHTML = '<a href="#" class ="btn-prefigth">Search For An Enemy</a>';
    getArena.style.visibility = "visible"; // se tiene que poner aqui el query porque como el html se genera despues
    //de que se corre la funcion

    document.querySelector(".btn-prefigth").addEventListener("click", function (event) {
      GameManager.setFigth();
    });
  },
  setFigth: function setFigth() {
    var getHeader = document.querySelector(".header");
    var getActions = document.querySelector(".actions");
    var getEnemy = document.querySelector(".enemy"); // objeto para crear enemigo

    var enemy00 = new _emeny.default("Goblin", 150, 0, 100, 100, 90);
    var enemy01 = new _emeny.default("Warlock", 200, 150, 100, 120, 100);
    var enemy02 = new _emeny.default("Banshee", 180, 50, 100, 180, 180);
    var enemy03 = new _emeny.default("Berserker", 250, 0, 180, 50, 50);
    var enemy04 = new _emeny.default("Nerubian", 250, 0, 100, 60, 20);
    var enemy05 = new _emeny.default("Illidan", 150, 0, 50, 170, 170);
    var enemy06 = new _emeny.default("Dreadlord", 230, 50, 80, 40, 60);
    var enemy07 = new _emeny.default("Sylvanas", 180, 100, 80, 150, 150);
    var chooseRandomEnemy = Math.floor(Math.random() * Math.floor(8)); // casos aleatoreos para elegir dentro de los objetos enemigos creados

    switch (chooseRandomEnemy) {
      case 0:
        enemy = enemy00;
        break;

      case 1:
        enemy = enemy01;
        break;

      case 2:
        enemy = enemy02;
        break;

      case 3:
        enemy = enemy03;
        break;

      case 4:
        enemy = enemy04;
        break;

      case 5:
        enemy = enemy05;
        break;

      case 6:
        enemy = enemy06;
        break;

      case 7:
        enemy = enemy07;
        break;
    } //modificacion del html cuando se presiona el boton


    getHeader.innerHTML = "<p class='header2'>DEFEAT YOUR ENEMY</p>";
    getActions.innerHTML = '<div class = "btn-all"> <button class ="btn-attack">ATACK!</button> <button class ="btn-spc">' + specialMove + "</button> </div>";
    getEnemy.innerHTML = '<img src="' + _images.default[enemy.enemyType] + '" class ="img-avatar"><div class="portrait2"><h3 class="champion-name2">' + enemy.enemyType + "<h3><p class='health-enemy'> Health: " + enemy.health + "</p><p>Mana: " + enemy.mana + "</p><p>Strength: " + enemy.strength + "</p><p>Agility: " + enemy.agility + "</p><p>Speed: " + enemy.speed + "</p></div>";
    document.querySelector(".btn-attack").addEventListener("click", function (event) {
      _moves.PlayerMoves.calcAttack(player, enemy);
    });
    document.querySelector(".btn-spc").addEventListener("click", function (event) {
      _moves.SpecialPlayerMoves.calcAttack(player, enemy);
    });
  }
};
},{"./player":"js/player.js","./emeny":"js/emeny.js","./images":"js/images.js","./moves":"js/moves.js"}],"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
},{}]},{},["../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/functionality.js"], null)
//# sourceMappingURL=/functionality.365fd100.js.map
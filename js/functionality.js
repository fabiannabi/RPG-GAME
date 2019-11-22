/* el objeto que dentro tienen metodos(funciones), que inician el juego
y que se mandan llamar cada vez para generar los personajes */
import Player from "./player";
import Enemy from "./emeny";
import Portraits from "./images";

import { PlayerMoves, SpecialPlayerMoves } from "./moves";

document.querySelector(".Paladin").addEventListener("click", function(event) {
  GameManager.setGameStart("Paladin");
});
document.querySelector(".Hunter").addEventListener("click", function(event) {
  GameManager.setGameStart("Hunter");
});
document.querySelector(".Mage").addEventListener("click", function(event) {
  GameManager.setGameStart("Mage");
});
document.querySelector(".Druid").addEventListener("click", function(event) {
  GameManager.setGameStart("Druid");
});
document.querySelector(".Rogue").addEventListener("click", function(event) {
  GameManager.setGameStart("Rogue");
});
document.querySelector(".Sorcerer").addEventListener("click", function(event) {
  GameManager.setGameStart("Sorcerer");
});
document
  .querySelector(".BloodHunter")
  .addEventListener("click", function(event) {
    GameManager.setGameStart("BloodHunter");
  });
document.querySelector(".Warrior").addEventListener("click", function(event) {
  GameManager.setGameStart("Warrior");
});
let player;
let enemy;
let specialMove;
let GameManager = {
  setGameStart: function(classType) {
    this.resetPlayer(classType);
    this.setPreFight();
  },
  resetPlayer: function(classType) {
    switch (classType) {
      case "Paladin":
        player = new Player(classType, 220, 100, 170, 80, 90, "HOLY SMITE");
        break;
      case "Hunter":
        player = new Player(classType, 170, 100, 100, 200, 180, "SNIPE");
        break;
      case "Mage":
        player = new Player(classType, 150, 180, 70, 100, 90, "FROSTBALL");
        break;
      case "Druid":
        player = new Player(classType, 170, 150, 150, 150, 180, "LUNAR FLARE");
        break;
      case "Rogue":
        player = new Player(classType, 150, 50, 30, 200, 190, "BACKSTAB");
        break;
      case "Sorcerer":
        player = new Player(
          classType,
          150,
          200,
          50,
          120,
          150,
          "ARCANE MISSILE"
        );
        break;
      case "BloodHunter":
        player = new Player(classType, 150, 50, 80, 150, 100, "RAVAGE");
        break;
      case "Warrior":
        player = new Player(classType, 250, 20, 220, 50, 50, "SKULL BASH");
        break;
    }
    specialMove = player.special;
    /*para sobreescribir el html y no hacer uno nuevo se utilia este selector
que agarra el html con la clase marcada y se modificara a las especificaciones
que le pongamos*/
    let getInterface = document.querySelector(".interface");
    getInterface.innerHTML =
      '<img src="' +
      Portraits[classType] +
      '" class ="img-avatar"><div class="portrait2"><h3 class="champion-name2">' +
      classType +
      "<h3><p class='health-player'>Health: " +
      player.health +
      "</p><p class='mana-player'>Mana: " +
      player.mana +
      "</p><p>Strength: " +
      player.strength +
      "</p><p>Agility: " +
      player.agility +
      "</p><p>Speed: " +
      player.speed +
      "</p></div>";
  },

  setPreFight: function() {
    let getHeader = document.querySelector(".header");
    let getActions = document.querySelector(".actions");
    let getArena = document.querySelector(".arena");

    getHeader.innerHTML = "<p class='header2'>FIND AN ENEMY!</p>";
    getActions.innerHTML =
      '<a href="#" class ="btn-prefigth">Search For An Enemy</a>';
    getArena.style.visibility = "visible";
    // se tiene que poner aqui el query porque como el html se genera despues
    //de que se corre la funcion
    document
      .querySelector(".btn-prefigth")
      .addEventListener("click", function(event) {
        GameManager.setFigth();
      });
  },

  setFigth: function() {
    let getHeader = document.querySelector(".header");
    let getActions = document.querySelector(".actions");
    let getEnemy = document.querySelector(".enemy");

    // objeto para crear enemigo
    let enemy00 = new Enemy("Goblin", 150, 0, 100, 100, 90);
    let enemy01 = new Enemy("Warlock", 200, 150, 100, 120, 100);
    let enemy02 = new Enemy("Banshee", 180, 50, 100, 180, 180);
    let enemy03 = new Enemy("Berserker", 250, 0, 180, 60, 50);
    let enemy04 = new Enemy("Nerubian", 250, 0, 100, 60, 20);
    let enemy05 = new Enemy("Illidan", 150, 0, 50, 170, 170);
    let enemy06 = new Enemy("Dreadlord", 230, 50, 80, 40, 60);
    let enemy07 = new Enemy("Sylvanas", 180, 100, 80, 150, 150);
    let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(8));
    // casos aleatoreos para elegir dentro de los objetos enemigos creados
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
    }
    //modificacion del html cuando se presiona el boton

    getHeader.innerHTML = "<p class='header2'>DEFEAT YOUR ENEMY</p>";
    getActions.innerHTML =
      '<div class = "btn-all"> <button class ="btn-attack">ATACK!</button> <button class ="btn-spc">' +
      specialMove +
      "</button> </div>";
    getEnemy.innerHTML =
      '<img src="' +
      Portraits[enemy.enemyType] +
      '" class ="img-avatar"><div class="portrait2"><h3 class="champion-name2">' +
      enemy.enemyType +
      "<h3><p class='health-enemy'> Health: " +
      enemy.health +
      "</p><p>Mana: " +
      enemy.mana +
      "</p><p>Strength: " +
      enemy.strength +
      "</p><p>Agility: " +
      enemy.agility +
      "</p><p>Speed: " +
      enemy.speed +
      "</p></div>";
    document
      .querySelector(".btn-attack")
      .addEventListener("click", function(event) {
        PlayerMoves.calcAttack(player, enemy);
      });
    document
      .querySelector(".btn-spc")
      .addEventListener("click", function(event) {
        SpecialPlayerMoves.calcAttack(player, enemy);
      });
  }
};

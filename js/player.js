/* Se crea un object Constructor para generar los jugadores
con los stats que se requieran en su momento, para eso se declara al inicio
una variable global que pueda ser usada por otro objeto que le dara los 
valores*/

let Player = function(
  classType,
  health,
  mana,
  strength,
  agility,
  speed,
  special
) {
  this.classType = classType;
  this.health = health;
  this.mana = mana;
  this.strength = strength;
  this.agility = agility;
  this.speed = speed;
  this.special = special;
};

export default Player;

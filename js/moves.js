let PlayerMoves = {
  calcAttack: function(player, enemy) {
    let currentPlayer = player;
    let currentEnemy = enemy;
    //determinar quien ataca primero
    let getPlayerSpeed = player.speed;
    let getEnemySpeed = enemy.speed;
    //player attacks

    let playerAttack = function(currentPlayer) {
      let calcBaseDamage;
      calcBaseDamage = (currentPlayer.strength * currentPlayer.agility) / 1000;
      //calcular un ataque que no sea siempre el mismo
      let ofsetDamage = Math.floor(Math.random() * Math.floor(10));
      let calcoutPutDamage = calcBaseDamage + ofsetDamage;
      //para ver cuantas veces ataca

      let numberOfHits =
        Math.floor(
          (Math.random() * Math.floor(currentPlayer.agility / 10)) / 2
        ) + 1;
      let attackValues = [calcoutPutDamage, numberOfHits];
      return attackValues;
    };

    //enemy attacks
    let enemyAttack = function(currentEnemy) {
      let calcBaseDamage;
      if (currentEnemy.mana > 0) {
        calcBaseDamage = (currentEnemy.strength * currentEnemy.mana) / 1000;
      } else {
        calcBaseDamage = (currentEnemy.strength * currentEnemy.agility) / 1000;
      }
      //calcular un ataque que no sea siempre el mismo
      let ofsetDamage = Math.floor(Math.random() * Math.floor(10));
      let calcoutPutDamage = calcBaseDamage + ofsetDamage;
      //para ver cuantas veces ataca

      let numberOfHits =
        Math.floor(
          (Math.random() * Math.floor(currentEnemy.agility / 10)) / 2
        ) + 1;
      let attackValues = [calcoutPutDamage, numberOfHits];
      return attackValues;
    };
    //conseguir la vida de personajes para modificarla
    let getPlayerHealth = document.querySelector(".health-player");
    let getEnemyHealth = document.querySelector(".health-enemy");

    //iniciar ataques dependiendo de quien es mas rapido

    if (getPlayerSpeed >= getEnemySpeed) {
      let playerAttackValues = playerAttack(currentPlayer);
      let totalDamage = playerAttackValues[0] * playerAttackValues[1];
      enemy.health = Math.floor(enemy.health - totalDamage);
      alert(
        "Your " +
          currentPlayer.classType +
          " hits for " +
          playerAttackValues[0] +
          " damage " +
          playerAttackValues[1] +
          " times."
      );

      if (enemy.health <= 0) {
        alert("You won! Refresh the Browser to play Again");
        getPlayerHealth.innerHTML = "Health: " + player.health;
        getEnemyHealth.innerHTML = "Health: 0";
      } else {
        getEnemyHealth.innerHTML = "Health: " + enemy.health;
        //cuando el enemigo ataca si no esta muerto

        let enemyAttackValues = enemyAttack(currentEnemy);
        let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
        player.health = Math.floor(player.health - totalDamage);
        alert(
          "The enemy " +
            currentEnemy.enemyType +
            " hits for " +
            enemyAttackValues[0] +
            " damage " +
            enemyAttackValues[1] +
            " times."
        );

        if (player.health <= 0) {
          alert("You loose! Refresh the Browser to play Again");
          getPlayerHealth.innerHTML = "Health: 0";
          getEnemyHealth.innerHTML = "Health: " + enemy.health;
        } else {
          getPlayerHealth.innerHTML = "Health: " + player.health;
        }
      }
    }

    // si el enemigo es mas rapido que el jugador
    if (getEnemySpeed >= getPlayerSpeed) {
      let enemyAttackValues = enemyAttack(currentEnemy);
      let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
      player.health = Math.floor(player.health - totalDamage);
      alert(
        "The enemy " +
          currentEnemy.enemyType +
          " hits for " +
          enemyAttackValues[0] +
          " damage " +
          enemyAttackValues[1] +
          " times."
      );

      if (player.health <= 0) {
        alert("You loose! Refresh the Browser to play Again");
        getEnemyHealth.innerHTML = "Health: " + enemy.health;
        getPlayerHealth.innerHTML = "Health: 0";
      } else {
        getPlayerHealth.innerHTML = "Health: " + player.health;
        //cuando el player ataca si no esta muerto

        let playerAttackValues = playerAttack(currentPlayer);
        let totalDamage = playerAttackValues[0] * playerAttackValues[1];
        enemy.health = Math.floor(enemy.health - totalDamage);
        alert(
          "Your " +
            currentPlayer.classType +
            " hits for " +
            playerAttackValues[0] +
            " damage " +
            playerAttackValues[1] +
            " times."
        );

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

//
//FUNCIONALIDAD PARA ATAQUE ESPECIAL
//

let SpecialPlayerMoves = {
  calcAttack: function(player, enemy) {
    let currentPlayer = player;
    let currentEnemy = enemy;
    //determinar quien ataca primero
    let getPlayerSpeed = player.speed;
    let getEnemySpeed = enemy.speed;
    //player attacks

    let playerAttack = function(currentPlayer) {
      let calcBaseDamage;
      if (currentPlayer.mana >= 10) {
        calcBaseDamage = (currentPlayer.strength * currentPlayer.mana) / 1000;
        currentPlayer.mana -= 10;
      } else {
        alert("NOT ENOUGH MANA");
        calcBaseDamage = 0;
      }

      //calcular un ataque que no sea siempre el mismo
      let ofsetDamage = Math.floor(Math.random() * Math.floor(10));
      let calcoutPutDamage = calcBaseDamage + ofsetDamage;
      //para ver cuantas veces ataca

      let numberOfHits =
        Math.floor(
          (Math.random() * Math.floor(currentPlayer.agility / 10)) / 2
        ) + 1;
      let attackValues = [calcoutPutDamage, numberOfHits];
      return attackValues;
    };

    //enemy attacks
    let enemyAttack = function(currentEnemy) {
      let calcBaseDamage;
      if (currentEnemy.mana > 0) {
        calcBaseDamage = (currentEnemy.strength * currentEnemy.mana) / 1000;
      } else {
        calcBaseDamage = (currentEnemy.strength * currentEnemy.agility) / 1000;
      }
      //calcular un ataque que no sea siempre el mismo
      let ofsetDamage = Math.floor(Math.random() * Math.floor(10));
      let calcoutPutDamage = calcBaseDamage + ofsetDamage;
      //para ver cuantas veces ataca

      let numberOfHits =
        Math.floor(
          (Math.random() * Math.floor(currentEnemy.agility / 10)) / 2
        ) + 1;
      let attackValues = [calcoutPutDamage, numberOfHits];
      return attackValues;
    };
    //conseguir la vida de personajes para modificarla
    let getPlayerHealth = document.querySelector(".health-player");
    let getPlayerMana = document.querySelector(".mana-player");
    let getEnemyHealth = document.querySelector(".health-enemy");

    //iniciar ataques dependiendo de quien es mas rapido

    if (getPlayerSpeed >= getEnemySpeed) {
      let playerAttackValues = playerAttack(currentPlayer);
      let totalDamage = playerAttackValues[0] * playerAttackValues[1];

      enemy.health = Math.floor(enemy.health - totalDamage);
      alert(
        "Your " +
          currentPlayer.classType +
          " hits for " +
          playerAttackValues[0] +
          " damage " +
          playerAttackValues[1] +
          " times."
      );

      if (enemy.health <= 0) {
        alert("You won! Refresh the Browser to play Again");
        getPlayerHealth.innerHTML = "Health: " + player.health;
        getEnemyHealth.innerHTML = "Health: 0";
      } else {
        getEnemyHealth.innerHTML = "Health: " + enemy.health;
        //cuando el enemigo ataca si no esta muerto

        let enemyAttackValues = enemyAttack(currentEnemy);
        let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
        player.health = Math.floor(player.health - totalDamage);
        alert(
          "The enemy " +
            currentEnemy.enemyType +
            " hits for " +
            enemyAttackValues[0] +
            " damage " +
            enemyAttackValues[1] +
            " times."
        );

        if (player.health <= 0) {
          alert("You loose! Refresh the Browser to play Again");
          getPlayerHealth.innerHTML = "Health: 0";
          getEnemyHealth.innerHTML = "Health: " + enemy.health;
        } else {
          getPlayerHealth.innerHTML = "Health: " + player.health;
        }
      }
    }

    // si el enemigo es mas rapido que el jugador
    if (getEnemySpeed >= getPlayerSpeed) {
      let enemyAttackValues = enemyAttack(currentEnemy);
      let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
      player.health = Math.floor(player.health - totalDamage);
      alert(
        "The enemy " +
          currentEnemy.enemyType +
          " hits for " +
          enemyAttackValues[0] +
          " damage " +
          enemyAttackValues[1] +
          " times."
      );

      if (player.health <= 0) {
        alert("You loose! Refresh the Browser to play Again");
        getEnemyHealth.innerHTML = "Health: " + enemy.health;
        getPlayerHealth.innerHTML = "Health: 0";
      } else {
        getPlayerHealth.innerHTML = "Health: " + player.health;
        //cuando el player ataca si no esta muerto

        let playerAttackValues = playerAttack(currentPlayer);
        let totalDamage = playerAttackValues[0] * playerAttackValues[1];
        enemy.health = Math.floor(enemy.health - totalDamage);
        alert(
          "Your " +
            currentPlayer.classType +
            " hits for " +
            playerAttackValues[0] +
            " damage " +
            playerAttackValues[1] +
            " times."
        );

        if (enemy.health <= 0) {
          alert("You win! Refresh the Browser to play Again");
          getEnemyHealth.innerHTML = "Health: 0";
          getPlayerHealth.innerHTML = "Health: " + player.health;
        } else {
          getEnemyHealth.innerHTML = "Health: " + enemy.health;
        }
      }
    }

    getPlayerMana.innerHTML = "Mana: " + currentPlayer.mana;
  }
};

// forma de exportar mas de una funcion en un solo js
export { PlayerMoves, SpecialPlayerMoves };

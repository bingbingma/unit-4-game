//game script
$(document).ready(function() {
  var test = true;
  var char1Count = true;
  var countDefeated = 0;

  var enterpriseCount = 0;
  var klingonCount = 0;
  var romulanCount = 0;
  var borgCount = 0;

  var disableBtn = true;

  var battleImages = ["assets/fire3.png", "assets/fire2.png"];
  //when char1 is selected move the other characters to the enemices section

  //SHIP SELECTION ---------------------------------------------------------------->
  //select enterprise
  $(".enterpriseShip").on("click", function() {
    if (char1Count === true) {
      $(this).addClass("main");
      enterpriseCount++;
      //changes to false so Main ship does not move to enemies area
      char1Count = false;
      //appends other ships to the enemies section
      $(".klingonShip").appendTo("#enemies");
      $(".romulanShip").appendTo("#enemies");
      $(".borgShip").appendTo("#enemies");
      //appends enterprise  to the your ship section
      $(".enterpriseShip")
        .appendTo("#player")
        .css({ height: "150px", width: "175px" });
    } else if (char1Count === false && enterpriseCount === 0) {
      //increments the count of the other ships other than enterprise
      klingonCount++;
      romulanCount++;
      borgCount++;
      //Enables attack button after defender is selected
      disableBtn = false;
      //Puts enterprise in the defender div
      $(".enterpriseShip")
        .appendTo("#defender")
        .css({ height: "150px", width: "175px" })
        .addClass("def");
      //hides the ship selector
      $("#ship-select").hide();
    }
  });
  //select klingon
  $(".klingonShip").on("click", function() {
    if (char1Count === true) {
      $(this).addClass("main");
      klingonCount++;
      //changes to false so Main ship does not move to enemies area
      char1Count = false;
      //appends other ships to the enemies section
      $(".enterpriseShip").appendTo("#enemies");
      $(".romulanShip").appendTo("#enemies");
      $(".borgShip").appendTo("#enemies");
      //appends klingon to the your ship section
      $(".klingonShip")
        .appendTo("#player")
        .css({ height: "150px", width: "175px" });
    } else if (char1Count === false && klingonCount === 0) {
      //increments the count of the other ships other than the klingon ship
      enterpriseCount++;
      romulanCount++;
      borgCount++;
      //Enables attack button after defender is selected
      disableBtn = false;
      //Puts the klingon ship in the defender div
      $(".klingonShip")
        .appendTo("#defender")
        .css({ height: "150px", width: "175px" })
        .addClass("def");
      //hides the ship selector
      $("#ship-select").hide();
    }
  });

  //select romulan
  $(".romulanShip").on("click", function() {
    if (char1Count === true) {
      $(this).addClass("main");
      romulanCount++;
      //changes to false so Main ship does not move to enemies area
      char1Count = false;
      //appends other ships to the enemies section
      $(".klingonShip").appendTo("#enemies");
      $(".enterpriseShip").appendTo("#enemies");
      $(".borgShip").appendTo("#enemies");
      //appends enterprise  to the your ship section
      $(".romulanShip")
        .appendTo("#player")
        .css({ height: "150px", width: "175px" });
    } else if (char1Count === false && romulanCount === 0) {
      //increments the count of the other ships other than the romulan ship
      klingonCount++;
      enterpriseCount++;
      borgCount++;
      //Enables attack button after defender is selected
      disableBtn = false;
      //Puts the romulan ship in the defender div
      $(".romulanShip")
        .appendTo("#defender")
        .css({ height: "150px", width: "175px" })
        .addClass("def");
      //hides the ship selector
      $("#ship-select").hide();
    }
  });

  //select borg
  $(".borgShip").on("click", function() {
    if (char1Count === true) {
      $(this).addClass("main");
      borgCount++;
      //changes to false so Main ship does not move to enemies area
      char1Count = false;
      //appends other ships to the enemies section
      $(".klingonShip").appendTo("#enemies");
      $(".romulanShip").appendTo("#enemies");
      $(".enterpriseShip").appendTo("#enemies");
      //appends enterprise  to the your ship section
      $(".borgShip")
        .appendTo("#player")
        .css({ height: "150px", width: "175px" });
    } else if (char1Count === false && borgCount === 0) {
      //increments the count of the other ships other than the borg ship
      klingonCount++;
      romulanCount++;
      enterpriseCount++;
      //Enables attack button after defender is selected
      disableBtn = false;
      //Puts the borg ship in the defender div
      $(".borgShip")
        .appendTo("#defender")
        .css({ height: "150px", width: "175px" })
        .addClass("def");
      //hides the ship selector
      $("#ship-select").hide();
    }
  });

  //FIRE WEAPONS ---------------------------------------------------------------->

  $(".attackbutton").on("click", function() {
    if (disableBtn === false) {
      $("#battlezone p").empty();
      $("#fire").empty();
      var shipName = $(".def").attr("shipName");
      console.log(shipName);
      //Gets player characters health atribute value
      var healthMain = $(".main").attr("health");
      console.log(healthMain);
      //Gets the attack attribute value from the player Character
      var attackMain = $(".main").attr("attack");
      console.log(attackMain);
      //Gets the defenders health attribute value
      var healthDefender = $(".def").attr("health");
      console.log(healthDefender);
      //Gets the defenders counter attack attribute value
      var counterAttack = $(".def").attr("counterAttack");
      console.log(counterAttack);
      /* When user presses attack it reduces the player characters health
		   by the counterAttack amount */
      var healthMainAfter = healthMain - counterAttack;
      /* When user presses attack it reduces the defender characters health
        by the Attack amount */
      var healthDefAfter = healthDefender - attackMain;
      //Updates player characters health attribute in the DOM
      var healthMain1 = $(".main").attr("health", healthMainAfter);
      //Updates defenders health attribute in the DOM
      var healthDef1 = $(".def").attr("health", healthDefAfter);
      //Changes player characters health text in the DOM
      $(".main span").html($(".main").attr("health"));
      //Changes the defenders health text in the DOM
      $(".def span").html($(".def").attr("health"));
      //Displays message
      $("#battlezone p").append(
        "You attacked " +
          shipName +
          " for " +
          attackMain +
          " damage! &nbsp;" +
          shipName +
          " attacked you back for " +
          counterAttack +
          "!"
      );
      $("#fire")
        .append("<img src=" + battleImages[0] + " width='300px'>")
        .append("<img src=" + battleImages[1] + " width='250px'>");
      //Doubles main Characters attack
      attackMain = attackMain * 1.5;
      //Updates the main Characters attack
      var attackMain1 = $(".main").attr("attack", attackMain);
      //Prevents the attack button from being clicked after the game is over
      if (healthMainAfter <= 0) {
        disableBtn = true;
        alert(
          "You have been defeated by the " +
            shipName +
            "...Game Over!!! \n (Page will now Reload)"
        );
        location.reload();
      } else if (healthDefAfter <= 0) {
        //Defender enterprise
        if ($(".def.enterpriseShip").attr("health") <= 0) {
          console.log(true);
          klingonCount--;
          romulanCount--;
          borgCount--;
          //Remove the the defender
          $(".def").appendTo("#win-lose");
          $(".defender").empty();
          $("#battlezone p")
            .empty()
            .append(
              "You have defeated " +
                shipName +
                ". Choose to fight another enemy."
            );
          countDefeated++;
          disableBtn = true;
        }
        //Defender klingon
        else if ($(".def.klingonShip").attr("health") <= 0) {
          console.log(true);
          enterpriseCount--;
          romulanCount--;
          borgCount--;
          //Remove the the defender
          $(".def").appendTo("#win-lose");
          $(".defender").empty();
          $("#battlezone p")
            .empty()
            .append(
              "You have defeated " +
                shipName +
                ". Choose to fight another enemy."
            );
          countDefeated++;
          disableBtn = true;
        }
        //defender romulan
        else if ($(".def.romulanShip").attr("health") <= 0) {
          console.log(true);
          klingonCount--;
          romulanCount--;
          borgCount--;
          //Remove the the defender
          $(".def").appendTo("#win-lose");
          $(".defender").empty();
          $("#battlezone p")
            .empty()
            .append(
              "You have defeated " +
                shipName +
                ". Choose to fight another enemy."
            );
          countDefeated++;
          disableBtn = true;
        }
        //defender borg
        else if ($(".def.borgShip").attr("health") <= 0) {
          console.log(true);
          klingonCount--;
          romulanCount--;
          enterpriseCount--;
          //Remove the the defender
          $(".def").appendTo("#win-lose");
          $(".defender").empty();
          $("#battlezone p")
            .empty()
            .append(
              "You have defeated " +
                shipName +
                ". Choose to fight another enemy."
            );
          countDefeated++;
          disableBtn = true;
        }
      }
    } else {
      $("#fire").append("attacking disabled until enemy is selected ");
    }

    if (countDefeated === 3) {
      $("#battlezone p")
        .html("<p>" + "ALL ENEMIES DEFEATED!!! YOU WIN!!!" + "</p>")
        .css({ "font-size": "40px" });
      console.log("count after**** " + countDefeated);
      disableBtn = true;
    }
  });
  //document ready ends below
});

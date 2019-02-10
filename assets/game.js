//game script
$(document).ready(function() {
  var test = true;
  var char1Count = true;
  var countDefeated = 0;

  var enterpriseCount = 0;
  var klingonCount = 0;
  var romulanCount = 0;
  var borgCount = 0;
  //when char1 is selected move the other characters to the enemices section

  //ship selection
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
      //Enables attack button after defender is selected
      klingonCount++;
      romulanCount++;
      borgCount++;
      disableBtn = false;
      $(".enterpriseShip")
        .appendTo("#defender")
        .css({ height: "150px", width: "175px" })
        .addClass("def");
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
      //appends enterprise  to the your ship section
      $(".klingonShip")
        .appendTo("#player")
        .css({ height: "150px", width: "175px" });
    } else if (char1Count === false && klingonCount === 0) {
      //Enables attack button after defender is selected
      enterpriseCount++;
      romulanCount++;
      borgCount++;
      disableBtn = false;
      $(".klingonShip")
        .appendTo("#defender")
        .css({ height: "150px", width: "175px" })
        .addClass("def");
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
      //Enables attack button after defender is selected
      klingonCount++;
      enterpriseCount++;
      borgCount++;
      disableBtn = false;
      $(".romulanShip")
        .appendTo("#defender")
        .css({ height: "150px", width: "175px" })
        .addClass("def");
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
      //Enables attack button after defender is selected
      klingonCount++;
      romulanCount++;
      enterpriseCount++;
      disableBtn = false;
      $(".borgShip")
        .appendTo("#defender")
        .css({ height: "150px", width: "175px" })
        .addClass("def");
      $("#ship-select").hide();
    }
  });
});

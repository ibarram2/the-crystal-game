targetNumber = Math.max(19,Math.ceil(Math.random()*120.99));
      $("#number-to-guess").text(targetNumber);

  var counter = 0

$("#current-score").text(counter);

  var losses = 0

  $("#loss-counter").text(losses);

  var wins = 0

$("#wins-counter").text(wins);

//startGame()

  //reset();
  // Now for the hard part. Creating multiple crystals each with their own unique number value.
//function startGame(){
  // We begin by expanding our array to include four options.

  //function startGame(){

  var randomvalgen1 = Math.max(1,Math.ceil(Math.random()*11.6));
  var randomvalgen2 = Math.max(1,Math.ceil(Math.random()*11.6));
  var randomvalgen3 = Math.max(1,Math.ceil(Math.random()*11.6));
  var randomvalgen4 = Math.max(1,Math.ceil(Math.random()*11.6));

  
  var numberOptions = [randomvalgen1, randomvalgen2, randomvalgen3, randomvalgen4];

//function startGame(){ 
  // Next we create a for loop to create crystals for every numberOption.

  for (var i = 0; i < 1; i++) {

    // For each iteration, we will create an imageCrystal
    var imageCrystal = $("<img>");
    var imageCrystal2 = $("<img>");
    var imageCrystal3 = $("<img>");
    var imageCrystal4 = $("<img>");

    // First each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.
    imageCrystal.addClass("crystal-image");
    imageCrystal2.addClass("crystal-image");
    imageCrystal3.addClass("crystal-image");
    imageCrystal4.addClass("crystal-image");

    // Each imageCrystal will be given a src link to the crystal image
    imageCrystal.attr("src", "assets/images/crys1.png");
    imageCrystal2.attr("src", "assets/images/crys2.png");
    imageCrystal3.attr("src", "assets/images/crys3.png");
    imageCrystal4.attr("src", "assets/images/crys4.png");

    imageCrystal.attr("alt", "shiny");
    imageCrystal2.attr("alt", "shiny");
    imageCrystal3.attr("alt", "shiny");
    imageCrystal4.attr("alt", "shiny");


    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.

    imageCrystal.attr("data-crystalvalue", numberOptions[0]);
    imageCrystal2.attr("data-crystalvalue", numberOptions[1]);
    imageCrystal3.attr("data-crystalvalue", numberOptions[2]);
    imageCrystal4.attr("data-crystalvalue", numberOptions[3]);

    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    $("#crystals").append(imageCrystal);
    $("#crystals2").append(imageCrystal2);
    $("#crystals3").append(imageCrystal3);
    $("#crystals4").append(imageCrystal4);
  }
  

  // This time, our click event applies to every single crystal on the page. Not just one.
  $(".crystal-image").on("click", function() {

    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter
    
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue;

    //above is same as counter = counter + crystalValue.

    // All of the same game win-lose logic applies. So the rest remains unchanged.

  $("#current-score").text(counter);



    if (counter === targetNumber) {
      //alert("You win!");
      $("#you-win").text("You Win!");
      wins++
      $("#wins-counter").text(wins);
      resetCrystal();
      $("#current-score").text(counter);

    }

    else if (counter >= targetNumber) {
      //alert("You lose!!");
      $("#you-win").text("You Loose!");
      losses++
      $("#loss-counter").text(losses);
      resetCrystal();
      
      //startGame()
    }
      else{
      $("#you-win").text("Click on a crystal...");
    }
    })

function resetCrystal(){

  counter = 0
  $("#current-score").text(counter);

  targetNumber = Math.max(19,Math.ceil(Math.random()*120.99));
  $("#number-to-guess").text(targetNumber);

  var randomvalgen1 = Math.max(1,Math.ceil(Math.random()*11.6));
  var randomvalgen2 = Math.max(1,Math.ceil(Math.random()*11.6));
  var randomvalgen3 = Math.max(1,Math.ceil(Math.random()*11.6));
  var randomvalgen4 = Math.max(1,Math.ceil(Math.random()*11.6));

  var numberOptions = [randomvalgen1, randomvalgen2, randomvalgen3, randomvalgen4];

  for (var i = 0; i < 1; i++) {
  
    imageCrystal.attr("data-crystalvalue", numberOptions[0]);
    imageCrystal2.attr("data-crystalvalue", numberOptions[1]);
    imageCrystal3.attr("data-crystalvalue", numberOptions[2]);
    imageCrystal4.attr("data-crystalvalue", numberOptions[3]);


}}
//function reset(){
//
  //    counter = 0;
    //  $("#current-score").text(counter);
      //targetNumber = Math.max(19,Math.ceil(Math.random()*120.99));
      //$("#number-to-guess").text(targetNumber);


/**
 * FileName: app.js
 * 
 * @author Tom Tsiliopoulos
 * @date July 4, 2016
 * 
 * StudentID: 300818557
 * 
 * @description This file is the main javascript file for the web site
 */

// IIFE - Immediately Invoked Function Expression
(function () {
    "use strict";

    // references to HTMLElements 
    var rollButton = document.getElementById("rollButton");
    var diceResult = document.getElementById("diceResult");

    function init() {
        console.log("Application Started");

    }

    function diceRoll() {
        var die1 = Math.floor((Math.random() * 6) + 1);
        var die2 = Math.floor((Math.random() * 6) + 1);
        var total = die1 + die2;
        diceResult.innerHTML = "<h2>" + total + "</h2>";
    }

    rollButton.addEventListener("click", diceRoll);




    // call init funciton when window finishes loading
    window.addEventListener("load", init);


})();
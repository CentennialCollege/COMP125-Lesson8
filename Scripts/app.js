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

    function getCurrentTime(date) {
        var hours = (date.getHours() < 10) ? "0"+date.getHours() : ""+date.getHours();
        var minutes = (date.getMinutes() < 10) ? "0"+date.getMinutes() : ""+date.getMinutes();
        var seconds = (date.getSeconds() < 10) ? "0"+date.getSeconds() : ""+date.getSeconds();
        var milliseconds = date.getMilliseconds().toString().substring(0,2);
        var currentTime = hours + ":" + minutes + ":" + seconds + ":" + milliseconds;
        return currentTime;
    }

    function diceRoll() {
        var die1 = Math.floor((Math.random() * 6) + 1);
        var die2 = Math.floor((Math.random() * 6) + 1);
        var total = die1 + die2;
        var now = new Date();

        diceResult.innerHTML = "<h2>" + total + " --> TimeStamp: " + getCurrentTime(now) +  "</h2>";
    }

    rollButton.addEventListener("click", diceRoll);




    // call init funciton when window finishes loading
    window.addEventListener("load", init);


})();
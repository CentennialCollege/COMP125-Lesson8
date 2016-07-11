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

    var name = "John";

/*
    var User = {
        ID: "1",
        Name: "admin",
        Email: "admin@example.com",
        Password: "123456",
        Courses: [
            {
                ID: "1",
                Name: "COMP123",
                Description: "Programming 1"
            }, {
                ID: "2",
                Name: "COMP125",
                Description: "Client-Side Web Development"
            }, {
                ID: "3",
                Name: "COMP397",
                Description: "Web Game Programming"
            }, {
                ID: "4",
                Name: "COMP392",
                Description: "Advanced Graphics"
            }],
        DropCourse: function (CourseIndex) {
            this.Courses.splice(CourseIndex, 1);
        }
    };

    */

    // User Class +++++++++++++++++++++++++++++++
    var User = (function(){
        // Constructor Method ++++++++++++++++++++
        var User = function(ID, username, password, email) {
            this.ID = ID;
            this.username = username;
            this.password = password;
            this.email = email;
        }

        User.prototype.LogToConsole = function() {
            console.log("User ID: " + this.ID);
            console.log("username: " + this.username);
            console.log("password: " + this.password);
            console.log("Email: " + this.email);
        };

        return User;
    })();


    // Person Class +++++++++++++++++++++++++++++++
    var Person = (function () {
        // Constructor ++++++++++++++++++++++++++++
        function Person(name, age) {
            this.name = name;
            this.age = age;
        }

        // METHODS ++++++++++++++++++++++++++++++++
        Person.prototype.SaysHello = function () {
            console.log(this.name + " Says Hello!");
        };

        return Person;
    } ());


    // app entry function
    function init() {
        var person = new Person("Tom", 45);

        person.SaysHello();

        var users = [
            new User(1,"thomas","123456","tom@example.com"), 
            new User(2,"john","123456","john@example.com"),
            new User(3,"rutvik","123456","rutvik@example.com"),
            new Person("Tom",47)
            ];
        
        console.log(users);
        users[2].LogToConsole();


    }

    // call init funciton when window finishes loading
    window.addEventListener("load", init);


})();
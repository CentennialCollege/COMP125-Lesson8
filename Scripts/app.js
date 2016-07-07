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
    }






    // call init funciton when window finishes loading
    window.addEventListener("load", init);


})();
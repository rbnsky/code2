"use strict";
var OldMacDonaldsFarm;
(function (OldMacDonaldsFarm) {
    class Animal {
        constructor(_name, _type, _food, _appetite, _sound) {
            this.set(_name, _type, _food, _appetite, _sound);
        }
        set(_name, _type, _food, _appetite, _sound) {
            this.name = _name;
            this.type = _type;
            this.food = _food;
            this.appetite = _appetite;
            this.sound = _sound;
        }
        eat(_type, _food, _appetite) {
        }
        sing(_name, _sound) {
        }
    }
    class Food {
        constructor(_type, _amount) {
            this.set(_type, _amount);
        }
        set(_type, _amount) {
            this.type = _type;
            this.amount = _amount;
        }
        consumtion(_type, _amount) {
        }
    }
    const animals = [];
    animals.push(new Animal("Henriette", "Chicken", "Seeds", 56, "Gawk-gawk"));
    animals.push(new Animal("Kermit", "Frog", "Flies", 10, "Ribbit"));
    animals.push(new Animal("Pferdinand", "Horse", "Apples", 12, "Hüüü"));
    animals.push(new Animal("Sneaky", "Fox", "Rabbits", 1, "Hati-hati-hati-how"));
    animals.push(new Animal("Frieda", "Cat", "Fish", 2, "Meow"));
    const stockpile = [];
    stockpile.push(new Food("Seeds", 1032));
    stockpile.push(new Food("Flies", 137));
    stockpile.push(new Food("Apples", 28));
    stockpile.push(new Food("Rabbits", 5));
    stockpile.push(new Food("Fish", 9));
})(OldMacDonaldsFarm || (OldMacDonaldsFarm = {}));

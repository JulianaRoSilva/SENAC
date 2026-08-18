"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.House = void 0;
class House {
    name;
    founder;
    points;
    constructor($name, $founder) {
        this.name = $name;
        this.founder = $founder;
        this.points = 0;
    }
    getName() {
        return this.name;
    }
}
exports.House = House;

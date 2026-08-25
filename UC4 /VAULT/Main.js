"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sala_1 = require("./Sala");
const Morador_1 = require("./Morador");
const sala = new Sala_1.Sala('plantacao', 10);
const morador = new Morador_1.Morador('juliana', 23, sala);
sala.insertMember(morador);
sala.showInfo();

import { Sala } from "./Sala";
import { Morador } from "./Morador";

const sala: Sala = new Sala('plantacao', 10);

const morador: Morador = new Morador('juliana', 23, sala);

sala.insertMember(morador);

sala.showInfo();
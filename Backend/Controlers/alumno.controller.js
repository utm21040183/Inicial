import { modeloAlumnos } from "../Models/alumno.model.js"

modeloAlumnos.create({
    name:"Salma",
    apepat:"Padilla",
    edad:20
})

export const test= ()=>{
    console.log("Se está mandando a llamar correctamente el controlador")

}
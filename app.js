const mongoose=require('mongoose')

const urlbd="mongodb://localhost:27017/UTMA"
mongoose.connect(urlbd)
.then(()=>{
    console.log("Funciona la conexión a la bd")
})

.catch((error)=>{
    console.log("No funciona la conexión a la bd", error)
})

const EsquemaAlumnos = new mongoose.Schema({
    name:{
        type:String
    },
    apepat:{
        type:String
    },
    edad:{
        type:Number
    }
})

const modeloAlumnos = new mongoose.model("Tabla de alumnos", EsquemaAlumnos)

modeloAlumnos.create({
    name:"Salma",
    apepat:"Padilla",
    edad:20
})

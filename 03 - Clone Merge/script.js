//CLONE

const person = {
    name: "Jose",
    apellido: "Alarcón",
    ciudad: "Málaga",
    codigoPostal: 29014
};

function clone(source) {
    const objClonado = {...source };
    console.log(objClonado);
}

clone(person);


// MERGE

const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

function merge(source, target) {
    const objMerge = {...target, ...source };
    console.log(objMerge);
}

merge(a, b); // {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}
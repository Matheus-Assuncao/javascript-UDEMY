//new Object => Object.prototype
const objA = {
    chaveA : 'A'
    //__protp__ : Object.protptype
}

const objB = {
    chaveA : 'A'
    //__protp__ : ObjA
}


Object.setPrototypeOf(objB, objA);
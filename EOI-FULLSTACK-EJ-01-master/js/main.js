

// Devuelve EL NOMBRE del mayor de los tres
function quienEsMayorDeLosTres(p1, p2, p3) {
    console.log(p1);
    console.log(p2);
    console.log(p3);
    if (parseInt(p1.age) > parseInt(p2.age) && parseInt(p1.age) > parseInt(p3.age)) {
        return p1.name;
    }
    if (parseInt(p2.age) > parseInt(p1.age) && parseInt(p2.age) > parseInt(p3.age)) {
        return p2.name;
    }
    if (parseInt(p3.age) > parseInt(p1.age) && parseInt(p3.age) > parseInt(p2.age)) {
        return p3.name;
    }
    return "Ninguno";
}

// Devuelve en forma de boolean el resultado
// NOTA: las mayúsculas y minúsculas no se consideran distintas
function hayAlgunCorreoRepetido(p1, p2, p3) {
    if (p1.email == p2.email || p1.email == p3.email || p2.email == p3.email) {
        return true;
    }
    return false;
}

// Pregunta al usuario por su edad y devuelve en boolean la respuesta
function elUsuarioEsMayorQueLosTres(p1, p2, p3) {
    var edad = parseInt(prompt("How old are you my friend ? "));
    if (edad > parseInt(p1.age) && edad > parseInt(p2.age) && edad > parseInt(p3.age)) {
        return true;
    }
    return false;
}

// Devuelve el número de los que tienen correo acabado en gmail.com
// RESTRICCIÓN: Resuélvelo usando los métodos .indexOf() ó .lastIndexOf()
// RESTRICCIÓN: Resuélvelo usando el método .search()
// RESTRICCIÓN: Resuélvelo usando los métodos .substring() ó substr()
// RESTRICCIÓN: Plantea otra forma de solucionarlo que no use ninguno de los métodos de arriba
// Deja descomentada solo una de las soluciones
function cuantosTienenCorreoDeGmailDotCom(p1, p2, p3) {
    var count = 0;
    if (p1.email.search("gmail.com") != -1) {
        count++;
    }
    if (p2.email.search("gmail.com") != -1) {
        count++;
    }
    if (p3.email.search("gmail.com") != -1) {
        count++;
    }
    return count;
}


////////////////////////////////////////
/////////// Zona ejercicio 1 ///////////
////////////////////////////////////////

function ejercicio01(email) {
    console.log(email);
    if (email == "yunior.developer@hotmail.com" ||
        email == "miguel@mrbug.es" ||
        email == "imanol@mercadona.com") {
        return true;
    }
    return false;
}



////////////////////////////////////////
//////// Final zona ejercicio 1 ////////
////////////////////////////////////////

////////////////////////////////////////
/////////// Zona ejercicio 2 ///////////
////////////////////////////////////////


function ejercicio02(email) {
    console.log(email);
    var count = 0;
    var flag = false;

    for (var index = 0; index < email.length; index++) {
        if (email.charAt(index) == "M") {
            flag = true;
            count++;
        }
    }
    if (flag) {
        return "El correo " + email + " tiene " + email.length + " caracteres" +
            "y en mayusculas quedaria " + email.toUpperCase() + ".  Además contiene " + count + " letras M";
    } else {
        return "El correo " + email + " tiene " + email.length + " caracteres" +
            "y en mayusculas quedaria " + email.toUpperCase() + ".  Además no contiene ninguna letra M";
    }
}



////////////////////////////////////////
//////// Final zona ejercicio 2 ////////
////////////////////////////////////////

////////////////////////////////////////
/////////// Zona ejercicio 3 ///////////
////////////////////////////////////////


function ejercicio03(email) {
    console.log(email);
    var domain;
    var count = 0;
    for (var index = 0; index < email.length; index++) {
        if (email.charAt(index) == "@") {
            domain = email.substring(index + 1);
            break;
        } else {
            count++;
        }

    }
    return "El correo " + email + " pertenece al dominio " + domain + " y tiene " +
        count + " caracteres sin contar el dominio ni el @";

}



////////////////////////////////////////
//////// Final zona ejercicio 3 ////////
////////////////////////////////////////

////////////////////////////////////////
/////////// Zona ejercicio 4 ///////////
////////////////////////////////////////


function ejercicio04(user) {
    console.log(user);
    if (parseInt(user.edad) >= 18) {
        return "El usuario " + user.nombre + " es mayor de edad. " +
            "Por lo tanto, le he creado un usuario con el correo " + user.correo;
    }
    return "El usuario " + user.nombre + " NO es mayor de edad";
}



////////////////////////////////////////
//////// Final zona ejercicio 4 ////////
////////////////////////////////////////

////////////////////////////////////////
/////////// Zona ejercicio 5 ///////////
////////////////////////////////////////


function ejercicio05(user) {
    console.log(user);
    if (user.nombre == "Yunior" && user.correo == "yunior.developer@hotmail.com" && parseInt(user.edad) == 24) {
        return "La persona introducida es Yunior"
    } else if (user.correo == "yunior.developer@hotmail.com" || parseInt(user.edad) == 24 || user.nombre == "Yunior") {
        return "La persona puede ser Yunior"
    } else {
        return "La persona no es Yunior";
    }
}



////////////////////////////////////////
//////// Final zona ejercicio 5 ////////
////////////////////////////////////////

////////////////////////////////////////
/////////// Zona ejercicio 6 ///////////
////////////////////////////////////////

function ejercicio06(user) {
    //console.log(user);
    var callback = {
        valid: false,
        errors: []
    };
    validateName(user, callback);
    validateEmail(user, callback);
    validateAge(user, callback);
    if(callback.errors.length > 0){
        callback.valid = false;
    }else{
        callback.valid =true;
    }
    console.log(callback);
    return callback;
}

function validateName(user, callback) {
    var name = user.nombre;
    var nameRegex = /^[a-zA-Z\s]*$/;
    if (nameRegex.test(name) && (name.length >= 5 && name.length <= 60)) {
        return;
    }
    callback.errors.push({
        code: name.length,
        text: "mínimo 5 caracteres y máximo de 60"
    })
}

function validateEmail(user, callback) {
    var email = user.correo;
    for (var index = 0; index < email.length; index++) {
        if (email.charAt(index) == '@' && index >= 1 && email.length - (index + 1) > 0 && (email.length >= 7 && email.length <= 60)) {
           return;
        }
    }
    callback.errors.push({
        code: email.length,
        text: 'El correo debe contener más de 7 caracteres'
    })
}


function validateAge(user, callback) {
    var age = user.edad;
    if (parseInt(age) >= 5 && parseInt(age) <= 150) {
        return;
    }
    callback.errors.push({
        code: age,
        text: "Minimo 5 años y maximo 150"
    })
}


////////////////////////////////////////
//////// Final zona ejercicio 6 ////////
////////////////////////////////////////

////////////////////////////////////////
/////////// Zona ejercicio 7 ///////////
////////////////////////////////////////


function ejercicio07(users) {
    var validUsers = [];
    var information ={
        items_inserted  : 0,
        ids : [],
        with_errors : [],
    };

    var addedItems = 0;
    var errors = 0;
    for (let index = 0; index < users.length; index++) {
        var user= ejercicio06(users[index]);
        if(user.valid == true){
            users[index].id = index+1;
            validUsers[index] =users[index];
            addedItems++;
            
           
        }else{
            information.with_errors[errors] =users[index];
            information.ids[errors] = index+1;
            errors++;
        }
    }
    information.items_inserted = addedItems;
    return information;
}



////////////////////////////////////////
//////// Final zona ejercicio 7 ////////
////////////////////////////////////////

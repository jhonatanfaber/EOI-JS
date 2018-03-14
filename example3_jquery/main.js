$("#button").click(function () {
    if(validateName(getName()) && validateEmail(getEmail()) && validateAge(getAge())){
        $("#mainCard").append(getHtml());
    }else{
        alert("Fallo en algun campo");
    }
});


function getName() {
    var name = document.querySelector('#mainCard input[name="name"]').value;
    return name;
}

function getEmail() {
    var email = document.querySelector('#mainCard input[name="email"]').value;
    return email;
}

function getAge() {
    var age = document.querySelector('#mainCard input[name="age"]').value;
    return age;
}

function getHtml() {
    return '<div class="card" style="width: 18rem; " id="mainCard">' +
        '<div class="card-header" > ' +
        'Persona' +
        '</div >' +
        '<ul class="list-group list-group-flush">' +
        '<li class="list-group-item">' +
        '<div class="input-group mb-3">' +
        '<div class="input-group-prepend">' +
        '<span class="input-group-text" id="basic-addon1">Nombre</span>' +
        '</div>' +
        '<input type="text" class="form-control" name="name" value="'+ getName() +'" placeholder="Nombre" readonly="true">' +
        '</div>' +
        '</li>' +
        '<li class="list-group-item">' +
        '<div class="input-group mb-3">' +
        '<div class="input-group-prepend">' +
        '<span class="input-group-text" id="basic-addon1">Correo</span>' +
        '</div>' +
        '<input type="text" class="form-control" name="email"  value="'+ getEmail() +'" placeholder="Correo" readonly="true">' +
        '</div>' +
        '</li>' +
        ' <li class="list-group-item">' +
        '<div class="input-group mb-3">' +
        '<div class="input-group-prepend">' +
        '<span class="input-group-text" id="basic-addon1">Edad</span>' +
        '</div>' +
        '<input type="text" class="form-control" name="age"value="'+ getAge() +'" placeholder="Edad" readonly="true">' +
        '</div>' +
        '</li>' +
        '</ul>' +
        '</div>';
}

function validateName(name){
    var nameRegex = /^[a-zA-Z\s]*$/;
    if (nameRegex.test(name) && (name.length >= 5 && name.length <= 60)) {
        return true;
    }
}

function validateEmail(email){
    for (var index = 0; index < email.length; index++) {
        if (email.charAt(index) == '@' && index >= 1 && email.length - (index + 1) > 0 && (email.length >= 7 && email.length <= 60)) {
           return true;
        }
    }
}

function validateAge(age){
    if (parseInt(age) >= 5 && parseInt(age) <= 150) {
        return true;
    }
}
function displayApartments(apartamentos) {
    $('.apartmentLength').text(apartamentos.length);

    apartamentos.slice(0, 15).forEach(element => {
        $('.photos').append(`<div class="card" style="width: 16rem;">
    <img class="card-img-top" src="${element['Hotel Image'].src}" alt="Card image cap">
    <div class="card-body">
    <p class="card-text"> ${element['Hotel Description'].text} </p>
    <a href="#" class="btn btn-primary">Go DS somewhere</a>
    </div>
    </div>`)
    });
}


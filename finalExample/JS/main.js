// dsiplayer, events filters index y loader
var apartments = [];
function activate() {
    return getApartments().then(apartamentos => {
        apartments = apartamentos;
        displayApartments(apartments);
        getNameByFilter();
    });
}

activate();

function getApartments() {
    return fetch('/data/london.json')
        .then(response => response.json())
        .then(apartamentos => {
            return apartamentos;
        })
        .catch(errorCallback => errorCallback)
}

function getSearchValue() {
    var apartamentos = apartments;
    var inputValue = $("#search-input").val();
    cleanInformation();
    var filter = apartamentos.filter(x => x['Hotel Image'].alt.toLowerCase().includes(inputValue.toLowerCase()));
    displayApartments(filter);
}

function getNameByFilter() {
    var apartamentos = apartments;
    var a = apartamentos.forEach(x => {
        if (!x["Reviews Core 4"]) {
            x["Reviews Core 4"] = {};
            x["Reviews Core 4"].text = 0;
        }
    })
}

function filterByPunctuation() {
    if ($('input.checkPunctuation').prop('checked')) {
        var sorted = sortElementos();
        cleanInformation();
        displayApartments(sorted);
    }
}

function getTopTen() {
    if ($('input.checkTop').prop('checked')) {
        var sorted = sortElementos();
        cleanInformation();
        displayApartments(sorted.slice(0, 10));
    }
}

function sortElementos() {
    var apartamentos = apartments;
    var sorted = _.sortBy(apartamentos, apartamento => parseFloat(apartamento["Reviews Core 4"].text)).reverse();
    return sorted;
}

function cleanInformation() {
    return $('.photos').empty();
}













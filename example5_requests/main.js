var urlServer = "https://jsonplaceholder.typicode.com/photos";
$.get(urlServer)
    .then(pickImages)
    .catch(error => error);

    function pickImages(images){
        var chunks = images.slice(0,100);
        chunks.forEach(element => {
            $('#pic').append(`<div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${element.url}" alt="Card image cap">
            <div class="card-body">
                <p class="card-text"> ${element.title} </p>
            </div>
        </div>`);
        });
        
       
    }

   
/*
    EJERCICIO 1:
    En la base de datos de nuestra empresa hay usuarios con correos acabados en "gmail.com".
     Encuéntralos y descártalos, son un problema
*/

let correos = [
    { usuario: 'JoseElMaquina', email: 'jose.el.maquina@gmail.com' },
    { usuario: 'PepeElCorrecto', email: 'pepe@corecto.com' },
    { usuario: 'JoseLuisDaBest', email: 'joseluis@dabest.com.eu' },
    { usuario: 'EsteEstaBien', email: 'este@bien.com' },
    { usuario: 'Elcarterista', email: 'elcarterista20@gmail.com' }
];

var emails = correos.filter(em => !em.email.endsWith("gmail.com"));
//var emails = correos.map(em => em.email).filter(x=> x.endsWith("gmail.com")); // otro
//console.log(emails);








/**
 * EJERCICIO 2:
 * Una empresa de robótica tiene diferentes modelos de procesadores y quiere
 *  mostrarlos en su web. Cada procesador tiene un atributo que indica la cantidad
 *  de operaciones por segundo y otro que indica la tasa de fallos en tanto por ciento.
 *  elimina los que tengan un porcentaje de fallos mayor al 50%.
 */

let procesadores = [
    { modelo: 'pentiumII', operacionesPorSegundo: 10500, tasaDeFallos: 15 },
    { modelo: 'i7', operacionesPorSegundo: 20000, tasaDeFallos: 60 },
    { modelo: '8086', operacionesPorSegundo: 30, tasaDeFallos: 26.3 },
    { modelo: 'i3', operacionesPorSegundo: 11389, tasaDeFallos: 58.4 },
    { modelo: 'i5', operacionesPorSegundo: 15000, tasaDeFallos: 10 },
    { modelo: 'celeron', operacionesPorSegundo: 200, tasaDeFallos: 80 }
]

var operaciones = procesadores.filter(p => p.tasaDeFallos < 50);
//console.log(operaciones);







/*
EJERCICIO 3:
En nuestra página de alojamientos, los usuarios valoran el sitio donde se han quedado 
dándole una puntuación del 1 al 10. El problema es que no sabemos la media de valoración
 de cada alojamiento. Crea un atributo "media" para cada alojamiento e incluye su valor
*/

var alojamientos = [
    {
        nombre: 'Bahía Feliz',
        comentarios: [
            {
                usuario: 'Franz Kartofen',
                comentario: 'Gut',
                valoracion: 6
            },
            {
                usuario: 'Ferdinando',
                comentario: 'Muy bueno',
                valoracion: 9
            },
            {
                usuario: 'Roberthino',
                comentario: 'Molto malo',
                valoracion: 3
            },
        ]
    },
    {
        nombre: 'Nacho Sol',
        comentarios: [
            {
                usuario: 'Manolín',
                comentario: 'Estuvo chido',
                valoracion: 10
            },
            {
                usuario: 'Solete',
                comentario: 'Muy sucio',
                valoracion: 2
            }
        ]
    }
]

var points = alojamientos.map(x => x.comentarios.map(p => p.valoracion));
for (let index = 0; index < points.length; index++) {
    alojamientos[index].media = ((points[index].reduce((acumulador, valorActual) => acumulador + valorActual)) / points[index].length);
}
//console.log(alojamientos);



/*
EJERCICIO 4:

Accede a los ficheros usuarios.json y alojamineto.json. Crea un array que lea todos los usuarios y para
cada uno añadele  un array con los alojamientos que ha valorado con su nota
*/

var usuarios =
    [
        {
            "nombre": "Gustav Fransua",
            "email": "gustav@gmail.com"
        },
        {
            "nombre": "Francisco Paco",
            "email": "fran@gmail.com"
        },
        {
            "nombre": "Manolín Vega",
            "email": "vega.manolin@gmail.com"
        },
        {
            "nombre": "Orlando Florencio",
            "email": "orlan@gmail.com"
        },
        {
            "nombre": "Andrea Pérez",
            "email": "andre.perez@gmail.com"
        },
        {
            "nombre": "Floren Hi",
            "email": "crypto@gmail.com"
        },
        {
            "nombre": "Pedro García",
            "email": "pedrogar@gmail.com"
        },
        {
            "nombre": "Elena Ramírez",
            "email": "elenra@gmail.com"
        }
    ]

var alojamiento = [
    {
        "nombre": "RIU",
        "comentarios": [{
            "usuario": "Manolín Vega",
            "comentario": "Estancia agradable",
            "valoracion": 8.5
        }, {
            "usuario": "Orlando Florencio",
            "comentario": "Bonito el sitio",
            "valoracion": 7
        }, {
            "usuario": "Andrea Pérez",
            "comentario": "Estancia inolvidable",
            "valoracion": 10
        }]
    },
    {
        "nombre": "Nacho Sol",
        "comentarios": [{
            "usuario": "Floren Hi",
            "comentario": "Un lugar para pensar en cryptos y mucho sol",
            "valoracion": 10
        }, {
            "usuario": "Pedro García",
            "comentario": "Decente tirando a bajo",
            "valoracion": 4
        }]
    },
    {
        "nombre": "Hilton",
        "comentarios": [{
            "usuario": "Elena Ramírez",
            "comentario": "Todo fantástico, acorde con el precio",
            "valoracion": 10
        }, {
            "usuario": "Gustav Fransua",
            "comentario": "Best sitio in the world",
            "valoracion": 10
        }, {
            "usuario": "Francisco Paco",
            "comentario": "Lo mejor la comida",
            "valoracion": 9.5
        }]
    },
    {
        "nombre": "El desastrillo",
        "comentarios": [{
            "usuario": "Manolín Vega",
            "comentario": "Chiquita porquería",
            "valoracion": 3
        }]
    }
]

var points = alojamiento.forEach(alojamiento => {
    alojamiento.comentarios.forEach(comentario =>{
        var hotelName = alojamiento.nombre;
        var marks = comentario.valoracion;
        var userName = comentario.usuario;
        var user = usuarios.find(user => user.nombre == userName);

        if(!user.valoraciones){
            user.valoraciones = [];
        }
        user.valoraciones.push({hotel: hotelName, nota: marks })
    }) 
});
//console.log(usuarios);




//LODASH

/*
    EJERCICIO 1: 
    Tenemos un array con múltiples objetos que incluyen un atributo con un código postal.
    Crea un array que incluya sólo los códigos postales. PD: los códigos postales no pueden repetirse
*/

let provincias = [
    { nombre: 'Madrid', codigoPostal: '28223' },
    { nombre: 'Albacete', codigoPostal: '02653' },
    { nombre: 'Madrid', codigoPostal: '28223' },
    { nombre: 'Las Palmas', codigoPostal: '35118' },
    { nombre: 'Barcelona', codigoPostal: '08480' },
    { nombre: 'Madrid', codigoPostal: '28001' },
    { nombre: 'Barcelona', codigoPostal: '08480' },
];

var a = provincias.map(x => x.codigoPostal);
var codes = _.uniq(a);
// console.log(codes);





/*
     EJERCICIO 2: 
     Tenemos una serie de servidores que almacenan diferentes tipos de archivos.
     Muestra un array con los nodos que almacenan archivos mp4 y png. Si hay nodos
     que se repiten sólo deben salir una vez.
  */

let servidores = [
    {
        almacenan: '.mp4',
        nodos: ['ordenador1', 'ordenador2', 'ordenador3']
    }, {
        almacenan: '.mp3',
        nodos: ['ordenador2', 'ordenador5']
    }, {
        almacenan: '.json',
        nodos: ['ordenador1', 'ordenador4', 'ordenador6']
    }, {
        almacenan: '.png',
        nodos: ['ordenador1', 'ordenador4']
    }, {
        almacenan: '.avi',
        nodos: ['ordenador1', 'ordenador7']
    },
];

var files = servidores.filter( servidores => servidores.almacenan == ".mp4" || servidores.almacenan == ".png");
var nodesArray = files.map(x=> x.nodos);
var nodes =_.flattenDepth(nodesArray);

// console.log(_.uniq(nodes));






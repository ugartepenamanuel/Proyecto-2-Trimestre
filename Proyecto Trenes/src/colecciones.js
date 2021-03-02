db.trenes.drop()
db.trenes.insertMany([
    {
        Empresa: "Renfe",
        Linea:"A320",
        Origen:"Sevilla",
        Destino:"Madrid",
        Salida: new Date("2021-07-02T14:15:00"),
        Llegada:new Date("2021-07-02T16:17:00"),
        Precio:60,
        Id_tren: 1,
        Pasajeros:120,
        Otros_destinos:[
            {Ciudad:"Ciudad Real", Precio:30},
            {Ciudad:"Avila", Precio:40}
            
        ]
     
    },
    {
        Empresa: "Renfe",
        Linea:"A320",
        Origen:"Sevilla",
        Destino:"Soria",
        Salida: new Date("2021-08-02T14:20:00"),
        Llegada:new Date("2021-08-02T18:23:00"),
        Precio:80,
        Id_tren: 2,
        Pasajeros:80,
        Otros_destinos:[
            {Ciudad:"Ciudad Real", Precio:30},
            {Ciudad:"Avila", Precio:40},
            {Ciudad:"Madrid", Precio:40}
            
        ]
    },
    {
        Empresa: "Renfe",
        Linea:"A320",
        Origen:"Sevilla",
        Destino:"Madrid",
        Salida: new Date("2021-07-06T19:17:00"),
        Llegada:new Date("2021-07-06T18:20:00"),
        Precio:60,
        Id_tren: 3,
        Pasajeros:90,
        Otros_destinos:[
            {Ciudad:"Ciudad Real", Precio:30},
            {Ciudad:"Avila", Precio:40},
            {Ciudad:"Cordoba", Precio:20}
            
        ]
        
    },
    {
        Empresa: "Avlo",
        Linea:"C780",
        Origen:"Sevilla",
        Destino:"Almeria",
        Salida: new Date("2021-09-02T20:16:00"),
        Llegada:new Date("2021-09-02T20:18:00"),
        Precio:40,
        Id_tren: 4,
        Pasajeros:50,
        Otros_destinos:[
            {Ciudad:"Malaga", Precio:25},
            {Ciudad:"Granada", Precio:40}
            
            
        ]
      
    },
    {
        Empresa: "Avlo",
        Linea:"C780",
        Origen:"Sevilla",
        Destino:"Cadiz",
        Salida: new Date("2021-05-10T21:16:00"),
        Llegada:new Date("2021-05-10T21:18:00"),
        Precio:20,
        Id_tren: 5,
        Pasajeros:35
       
       
    },
    {
        Empresa: "Avlo",
        Linea:"C780",
        Origen:"Sevilla",
        Destino:"Valencia",
        Salida: new Date("2021-03-03T20:15:00"),
        Llegada:new Date("2021-03-03T20:19:00"),
        Precio:60,
        Id_tren: 6,
        Pasajeros:50,
        Otros_destinos:[
            {Ciudad:"Jaen", Precio:40},
            {Ciudad:"Albacete", Precio:45}
            
            
        ]
    
    },
    {
        Empresa: "Avlo",
        Linea:"C780",
        Origen:"Sevilla",
        Destino:"Zaragoza",
        Salida: new Date("2021-07-02T20:17:00"),
        Llegada:new Date("2021-07-02T20:21:00"),
        Precio:80,
        Id_tren: 7,
        Pasajeros:50,
        Otros_destinos:[
            {Ciudad:"Ciudad Real", Precio:35},
            {Ciudad:"Madrid", Precio:55},
            {Ciudad:"Soria", Precio:75}
            
            
        ]
        
    },
    {
        Empresa: "Ouigo",
        Linea:"W320",
        Origen:"Sevilla",
        Destino:"Barcelona",
        Salida: new Date("2021-12-14T16:14:00"),
        Llegada:new Date("2021-12-14T18:18:00"),
        Precio:100,
        Id_tren: 8,
        Pasajeros:90,
      
       
    }
    
])



db.maquinista .drop()
db.maquinista .insertMany([
    {
        Nombre:"Francisco",
        Apellido:"Garcia",
        Sexo: "M",
        Edad: 21,
        Empresa:"Renfe",
        Id_cabina:1,
        Salario:1260,
        Jornada:["Lunes, Martes, Miercoles, Jueves"],
        Funcion:["Linea A320"]
    },
    {
        Nombre:"Claudia",
        Apellido:"Trasierra",
        Sexo: "F",
        Edad: 31,
        Empresa:"Renfe",
        Id_cabina:2,
        Salario:1360,
        Jornada:["Lunes, Martes, Miercoles, Jueves, Viernes"],
        Funcion:["Linea A320"]
    },
    {
        Nombre:"Andres",
        Apellido:"Ugarte",
        Sexo: "M",
        Edad: 35,
        Empresa:"Ouigo",
        Id_cabina:8,
        Salario:1250,
        Jornada:["Lunes, Martes, Miercoles, Jueves"],
        Funcion:["Linea W320"]
    },
    {
        Nombre:"Sandra",
        Apellido:"Carretero",
        Sexo: "F",
        Edad: 37,
        Empresa:"Renfe",
        Id_cabina:3,
        Salario:1360,
        Jornada:["Lunes, Martes, Miercoles, Jueves, Viernes"],
        Funcion:["Linea A320"]
    },
    {
        Nombre:"Paco",
        Apellido:"Mermela",
        Sexo: "M",
        Edad: 42,
        Empresa:"Avlo",
        Id_cabina:4,
        Salario:1260,
        Jornada:["Lunes, Martes"],
        Funcion:["Linea C780"]
    },
    {
        Nombre:"Sara",
        Apellido:"Gomez",
        Sexo: "F",
        Edad: 70,
        Empresa:"Avlo",
        Id_cabina:5,
        Salario:1260,
        Jornada:["Lunes, Martes, Miercoles"],
        Funcion:["Linea C780"]
    },
    {
        Nombre:"Roberto",
        Apellido:"Carretero",
        Sexo: "M",
        Edad: 18,
        Empresa:"Avlo",
        Id_cabina:6,
        Salario:960,
        Jornada:["Lunes, Martes,"],
        Funcion:["Linea C780"]
    },
    {
        Nombre:"Manuela",
        Apellido:"Serrano",
        Sexo: "F",
        Edad: 40,
        Empresa:"Avlo",
        Id_cabina:7,
        Salario:1500,
        Jornada:["Lunes, Martes, Miercoles, Jueves, Viernes, Sabado"],
        Funcion:["Linea C780"]
    }
    
])
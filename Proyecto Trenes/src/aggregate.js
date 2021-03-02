


/*....Filtra por la empresa Renfe y muestra el total de cada salida, mostrando el año, el mes y el dia, y el total lo ordena de mayor a menor....*/




db.trenes.aggregate([
    {
        $match:{
            Empresa:"Renfe"
        }
    },
    {
        $project:{
            _id:0,
            Total:{$multiply:["$Precio", "$Pasajeros"]},
            año: { $year: "$Salida" },
            mes: { $month: "$Salida" },
            dia: { $dayOfMonth: "$Salida" }
        } 
    },

    { $sort: { Total: -1 } }
]).pretty()

//....RESULTADO....//
/*

{ "Total" : 7200, "año" : 2021, "mes" : 7, "dia" : 2 }
{ "Total" : 6400, "año" : 2021, "mes" : 8, "dia" : 2 }
{ "Total" : 5400, "año" : 2021, "mes" : 7, "dia" : 6 }

*/



/*Selecciona los trenes los cuales tienen mas de un destino y que nos muestre el viaje mas caro y mas barato de cada empresa, y de ese viaje haga haga la media de todos los destinos*/




db.trenes.aggregate([
    {
        $match:{
            Otros_destinos:{$exists:true}
        }
    },
    {
        $group:{
            _id:"$Empresa",
            "Viaje_caro":{$max: "$Otros_destinos.Precio"},
            "Viaje_barato":{$min:"$Otros_destinos.Precio"}
        }
    },
    {
        $project:{
            _id:1,
            Otros_destinos:1,
            Media_viaje_caro:{$trunc:{$avg:"$Viaje_caro"}},
            Media_viaje_barato:{$trunc:{$avg:"$Viaje_barato"}}
        }
    },
    { $sort: { Media_viaje_caro: 1 } }

    
]).pretty()



//....RESULTADO....//

/*  
    { "_id" : "Renfe", "Media_viaje_caro" : 36, "Media_viaje_barato" : 35 }
    { "_id" : "Avlo", "Media_viaje_caro" : 42, "Media_viaje_barato" : 32 }

*/




/*En esta consultas vamos a informarnos, que empresa nos puede llevar a Soria, por el menor precio teniendo en cuenta  si pasa por otras ciudades, mostraremos tambien a la hora que sale*/




db.trenes.aggregate([
    {
        $match:{
            Destino:"Madrid"
        }
    },
    {
        $unwind:{path:"$Otros_destinos",preserveNullAndEmptyArrays: true}
    },
    {
        $sort:{
            Precio:1
        }
    },
    {
        $project:{
            _id:0,
            Empresa:1,
            Linea:1,
            Precio:1,
            Destino:1,
            Hora: { $hour: "$Salida" },
            Minutos: { $minute: "$Salida" },
            Otros_destinos:1
        }
    }
]).pretty()

/*{
        "Empresa" : "Renfe",
        "Linea" : "A320",
        "Destino" : "Madrid",
        "Precio" : 60,
        "Otros_destinos" : {
                "Ciudad" : "Ciudad Real",
                "Precio" : 30
        },
        "Hora" : 12,
        "Minutos" : 15
}
{
        "Empresa" : "Renfe",
        "Linea" : "A320",
        "Destino" : "Madrid",
        "Precio" : 60,
        "Otros_destinos" : {
                "Ciudad" : "Avila",
                "Precio" : 40
        },
        "Hora" : 12,
        "Minutos" : 15
}
{
        "Empresa" : "Renfe",
        "Linea" : "A320",
        "Destino" : "Madrid",
        "Precio" : 60,
        "Otros_destinos" : {
                "Ciudad" : "Ciudad Real",
                "Precio" : 30
        },
        "Hora" : 17,
        "Minutos" : 17
}
{
        "Empresa" : "Renfe",
        "Linea" : "A320",
        "Destino" : "Madrid",
        "Precio" : 60,
        "Otros_destinos" : {
                "Ciudad" : "Avila",
                "Precio" : 40
        },
        "Hora" : 17,
        "Minutos" : 17
}
{
        "Empresa" : "Renfe",
        "Linea" : "A320",
        "Destino" : "Madrid",
        "Precio" : 60,
        "Otros_destinos" : {
                "Ciudad" : "Cordoba",
                "Precio" : 20
        },
        "Hora" : 17,
        "Minutos" : 17
}*/ 



//....Muestra todas las maquinistas de 32 o más de la empresa Renfe  mostrandome los campos: Nombre, Empresa, Linea, Salario, Sexo, y la Edad. ....//


db.trenes.aggregate([
   
  
    {
        $lookup: {
            from: "maquinista",
            localField: "Id_tren",
            foreignField: "Id_cabina",
            as: "maquinista"
        }
    },
    { $match: { "maquinista.Sexo": "F", "maquinista.Edad": {$gte: 32}, Empresa:"Renfe" } },
    {
        $project: {
            _id: 0,
            Nombre:"$maquinista.Nombre",
            Empresa: 1,
            Linea:1,
            Salario:"$maquinista.Salario",
            Sexo:"$maquinista.Sexo",
            Edad:"$maquinista.Edad"
          
            }

    },

]).pretty()


/*
    "Empresa" : "Renfe",
    "Linea" : "A320",
    "Nombre" : [
            "Sandra"
    ],
    "Salario" : [
            1360
    ],
    "Sexo" : [
            "F"
    ],
    "Edad" : [
            37
    ]
}*/











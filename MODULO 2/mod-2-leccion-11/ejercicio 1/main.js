// la URL base del API
// https://swapi.dev/api/

// si necesita autenticación
// No authentication is required to query and get data.

// método HTTP que deben usar las peticiones a este API
// GET

// URL para acceder a la info del personaje "Luke Skywalker"
// http https://swapi.dev/api/people/1/

// URL para acceder a la info de la película "A New Hope"
// http https://swapi.dev/api/films/1/

// a qué otros recursos puedo acceder desde el API además de personajes y pelis
// films string -- The URL root for Film resources
// people string -- The URL root for People resources
// planets string -- The URL root for Planet resources
// species string -- The URL root for Species resources
// starships string -- The URL root for Starships resources
// vehicles string -- The URL root for Vehicles resources


// URL para acceder al listado de personajes, ¿está paginada?
// A People resource is an individual person or character within the Star Wars universe.

// cómo puedo buscar personajes mediante la URL
// /people/ -- get all the people resources
// /people/:id/ -- get a specific people resource
// /people/schema/ -- view the JSON schema for this resource

// cómo puedo hacer que el JSON de una petición se me devuelva traducido a Wookiee
// Using the wookiee renderer is easy, just append ?format=wookiee to your urls:
//https://swapi.dev/api/planets/1/?format=wookiee

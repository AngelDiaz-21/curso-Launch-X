// Programación Asincrona (.then y las promesas)

// Fetch para hacer una consulta, petición a una API
const fetchPokemon = () => {

    // Obtenemos el ID (pokeName) del HTML
    const pokeNameInput = document.getElementById("pokeName");
    
    // Obtenemos el valor que contiene el input
    let pokeName = pokeNameInput.value;

    // Con toLowerCase pasaremos los valores a minusculas ya que es parte de los requerimientos d la URL al momento de hacer el fetch
    pokeName = pokeName.toLowerCase();

    // Ponemos la URL del API, en este caso agregamos la variable pokeName para buscar el nombre del pokemon 
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;


    // Realizamos la consulta (fetch(url)) y vamos a recibir una respuesta (res)
    fetch(url).then((res) => {

        // Definimos una condición
        // Si el error es "status: 200" muestra la imagen de error. Se hace esto para que el programa no se rompa
        if (res.status != "200") {
            console.log(res);
            // Llamamos a la funcion pokeImage para que se ejecute
            pokeImage("./assets/pokebola-failed.png");
            
            
            notFound();
        }
        else {
            // console.log(res);
            // Si todo esta bien esta es la respuesta que recibimos
            // Este return es la respuesta que recibimos. Primero se ejecuta esto y despues el otro .then de abajo
            return res.json();
        }
        // Para sacar los datos de la consulta
        // Sacamos la data con .then ya que todavía es una promesa
    }).then((data) => {
        if (data) {
            // En la data ya podemos ver las habilidades del pokemon, nombre, sprites (la imagen) y otros datos 
            console.log(data);
            // Colocamos la ubicacion de la imagen en la data y de esta manera nos podemos ir metiendo a los diferentes niveles que tiene un Json (objeto)
            let pokeImg = data.sprites.other.home.front_default;
            // Llamamos a la funcion pokeImage para que se ejecute
            pokeImage(pokeImg);
            console.log(pokeImg);

            let pokemonname = data.name;
            pokeNombre(pokemonname);

            let ID_pokemon = data.id;
            pokeID(ID_pokemon);

            window.estadisticaSub.textContent = "Estadisticas";
            window.movimientoSub.textContent = "Movimientos";

            let altura_Pokemon = data.height;
            datoAltura(altura_Pokemon);

            let peso_Pokemon = data.weight;
            datoPeso(peso_Pokemon);

            let hp_Pokemon = data.stats[0];
            datoHp (hp_Pokemon);

            let ataque_Pokemon = data.stats[1];
            datoAtaque(ataque_Pokemon);

            let defensa_Pokemon = data.stats[2];
            datoDefensa(defensa_Pokemon);

            let velocidad_Pokemon = data.stats[5];
            datoVelocidad(velocidad_Pokemon);

            let movimientos_Pokemon = data.moves.map((typ) => typ.move.name.charAt(0).toUpperCase() + typ.move.name.slice(1));
            datoMovimientos(movimientos_Pokemon);

            // .charAt(0).toUpperCase() + movimientos_Pokemon.slice(1)}`

            let tipo_Pokemon = data;
            datoTipo(tipo_Pokemon);

        }
    });
}

// Esta funcion recibe la url para cambiar la imagen
const pokeImage = (url) => {
    // Obtenemos el ID (pokeImg) del HTML
    const pokePhoto = document.getElementById("pokeImg");
    // Accedemos al atributo src ya que es donde se va a cambiar la imagen
    pokePhoto.src = url;
}

const pokeID = (ID_pokemon) =>{
    if(ID_pokemon >= 10){
        const poke_id = document.getElementById("numeroPokemon");
        poke_id.textContent = `#${ID_pokemon}`;
    }else{
        const poke_id = document.getElementById("numeroPokemon");
        poke_id.textContent = `#0${ID_pokemon}`;
    }
    // poke_id.textContent = ID_pokemon;
    // window.numeroPokemon.textContent = `#${pokemon.id}`
}

const pokeNombre = (pokemonName) =>{
    const pokenom = document.getElementById("nombrePokemon");
    pokenom.value = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);
}

const datoAltura = (altura_Pokemon) =>{
    const pokemonAltura = document.getElementById("altura");
    pokemonAltura.textContent = `Altura: ${(altura_Pokemon*10)} cm`;
}

const datoPeso = (peso_Pokemon) =>{
    const pokemonPeso = document.getElementById("peso");
    pokemonPeso.textContent = `Peso: ${peso_Pokemon/10} kg`;
}

const datoHp = (hp_Pokemon) =>{
    const pokemonHp = document.getElementById("hp");
    pokemonHp.textContent = `Hp: ${hp_Pokemon.base_stat}`;
}

const datoAtaque = (ataque_Pokemon) =>{
    const pokemonAtaque = document.getElementById("ataque");
    pokemonAtaque.textContent = `Ataque: ${ataque_Pokemon.base_stat}`;
}

const datoDefensa = (defensa_Pokemon) =>{
    const pokemonDefensa = document.getElementById("defensa");
    pokemonDefensa.textContent = `Defensa: ${defensa_Pokemon.base_stat}`;
}

const datoVelocidad = (velocidad_Pokemon) =>{
    const pokemonVelocidad = document.getElementById("velocidad");
    pokemonVelocidad.textContent = `Velocidad: ${velocidad_Pokemon.base_stat}`;
}

const datoMovimientos = (movimientos_Pokemon)  => {

    const pokemonMovimientos = movimientos_Pokemon;

    document.getElementById("listaMovimientos").innerHTML = "";

    pokemonMovimientos.forEach(element => {
        document.getElementById("listaMovimientos").innerHTML += "<li>" + element + "</li>";
    });
}

const datoTipo = (tipo_Pokemon) => {
    if(tipo_Pokemon.types.length == 2){
        const pokemonTipo1 = document.getElementById("tipo1");
        pokemonTipo1.textContent = `${tipo_Pokemon.types[0].type.name.charAt(0).toUpperCase() + tipo_Pokemon.types[0].type.name.slice(1)}`;
        const pokemonTipo2 = document.getElementById("tipo2");
        pokemonTipo2.textContent = `${tipo_Pokemon.types[1].type.name.charAt(0).toUpperCase() + tipo_Pokemon.types[1].type.name.slice(1)}`;
    }else{
        const pokemonTipo1 = document.getElementById("tipo1");
        pokemonTipo1.textContent = `${tipo_Pokemon.types[0].type.name.charAt(0).toUpperCase() + tipo_Pokemon.types[0].type.name.slice(1)}`;
        const pokemonTipo2 = document.getElementById("tipo2");
        pokemonTipo2.textContent = `----`;
    }
}

const notFound = () =>{
    window.nombrePokemon.value       = "         ???";
    window.numeroPokemon.textContent = "";
    window.estadisticaSub.textContent = "Estadisticas";
    window.altura.textContent        = "Altura: ???";
    window.peso.textContent          = "Peso: ???";
    window.hp.textContent            = "Hp: ???";
    window.ataque.textContent        = "Ataque: ???";
    window.defensa.textContent       = "Defensa: ???";
    window.velocidad.textContent     = "Velocidad: ???";
    window.movimientoSub.textContent     = "Movimientos";
    window.listaMovimientos.textContent     = " ???";
}
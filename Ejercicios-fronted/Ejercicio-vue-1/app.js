// Esta es una forma para utilizar vue 
const app = Vue.createApp({
    data(){
        return {
            // Regresamos el objeto
            nombre: 'Angel',
            apellido: 'Díaz',
            email: 'angelcortes834@gmail.com',
            genero: 'male',
            foto: 'https://randomuser.me/api/portraits/men/10.jpg',
        }
    },
    // Aqui estarpan todas las funciones que tenga nuestra app
    methods:{
        imprimirNombre(){
            console.log(this.nombre);
        },
        async cambiarUsuario(){

            const res = await fetch('https://randomuser.me/api');
            console.log(res);
            // results es un objeto
            const {results} = await res.json();

            console.log(results);

            // Cambiamos los valores
            // Obtenemos los datos del API. Que sea results en [0], ponemos 0 porque todos como vienen desde el mismo arreglo, en la mismca casilla todos los datos estan esa posicion
            this.nombre      = results[0].name.first;
            this.apellido    = results[0].name.last;
            this.email       = results[0].email;
            this.genero      = results[0].gender;
            this.foto        = results[0].picture.large;
        }
    }
})


// Montamos la aplicacion en app
app.mount('#app');
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

<!-- Componentes -->
    <Contador/>

    <Cuadrado/>

    <Botones/>

  </div>
</template>

<script>
import Contador from '../components/Contador.vue'
import Cuadrado from '../components/Cuadrado.vue' 
import Botones from '../components/Botones.vue' 


export default {
  name: 'HomeView',
  components:{
    Contador,
    Cuadrado,
    Botones
  }
  // Comentamos el data ya que el counter esta en el state(estado) del store
  // data(){
  //   return {
  //     counter: 0
  //   }
  // },


  // methods:{
  //   {bajarContador}(){
  //     this.counter --
  //   },
  //   subirContador(){
  //     this.counter ++
  //   },
  // }
}
</script>

<style>
div{
  margin-bottom: 10px;
}

.counter{
  font-size: 80px;
}

button{
  width: 100px;
  border-radius: 5px;
  border: 1px solid black;
  font-size: 20px;
  margin: 0 10px;
}

.cuadrado{
  font-size: 40px;
}
</style>

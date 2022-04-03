import { createStore } from 'vuex'

export default createStore({
  // Contiene las variables que queramos almacenar
  state: {
    counter: 0
  },
  // Para recuperar informacion o sacar la informacion del state
  getters: {
    // Recuperamos todos los datos (counter) que tengamos en el estado
    cuadrado(state){
      return state.counter * state.counter;
    }
  },
  // Para modificar el state
  mutations: {
    bajarContador(state){
      state.counter --;
    },
    // Recibe el results del action
    subirContador(state, random){
      state.counter += random;
    },
  },
  actions: {
    // Mandamos como objeto commit para que se puede ver reflejado el cambio
    async subirContador({commit}){
      const res = await fetch('https://www.random.org/integers/?num=1&min=1&max=8&col=1&base=10&format=plain&rnd=new');
      const results = await res.json();
      console.log(results);
      commit("subirContador", results);
    },
     //TODO: Podemos hacer lo mismo para bajar el contador, sin embargo, lo dejaremos así de modo de ejemplo para saber como se utiliza la mutations pero sería el mismo paso que arriba
  },
  modules: {
  }
})

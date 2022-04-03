<template>
    <div class="buttons">
        <!-- Cuando las cosas sean "mutations" vamos a usar commit -->
        <button v-on:click=" $store.commit('bajarContador') ">-</button>
        <!-- Cuandos usemos "actions" vamos a utilizar dispatch -->
        <button v-on:click=" $store.dispatch('subirContador') ">+</button>
    </div>
</template>

<script>

export default {
    name: 'Botones',

}
</script>
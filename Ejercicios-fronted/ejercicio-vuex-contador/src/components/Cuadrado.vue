<template>
    <div class="cuadrado">
        <!-- Estamos obteniendo el getter del store -->
        {{ $store.state.counter }} <sup>2</sup> = {{ $store.getters.cuadrado }}
    </div>
</template>

<script>

export default {
    name: 'Cuadrado',

}
</script>
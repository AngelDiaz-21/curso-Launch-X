<template>
    <div class="counter">
        <!-- {{ counter }} -->
        <!-- Llamamos al state para hacer uso del counter -->
        {{ $store.state.counter }}
    </div>
</template>

<script>

export default {
    name: 'Contador',

}
</script>
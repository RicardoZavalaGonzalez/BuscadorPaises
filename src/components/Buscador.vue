<template>
    <input type="text" placeholder="Ingrese país" class="form-control my-3" v-model="pais" @keyup="procesarPais" />
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';

export default {
    name: 'Buscador',
    setup() {
        const pais = ref('');
        const store = useStore();
        const procesarPais = () => {
            store.dispatch('filtrarPais', pais.value);
            //   console.log(pais.value);
        };

        return { pais, procesarPais };
    },
};
</script>

<style></style>

<template>
    <!-- procesar pais (metodo del componente) -->
    <input type="text" placeholder="Ingrese país" class="form-control my-3" v-model="pais" @keyup="procesarPais" />
</template>

<script>
import { ref } from 'vue';
// libreria para manejar el store (alojamiento de datos)
import { useStore } from 'vuex';

export default {
    name: 'Buscador',

    setup() {
        const pais = ref('');
        const store = useStore();
        const procesarPais = () => {
            // llama la accion filtrarPais del store alojado en store/index.js
            store.dispatch('filtrarPais', pais.value);
            //   console.log(pais.value);
        };

        return { pais, procesarPais };
    },
};
</script>

<style></style>

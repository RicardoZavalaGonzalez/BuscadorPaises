<template>
    <div class="text-center">
        <h3>Filtrar por continente</h3>

        <div class="btn-group mb-3">
            <button class="btn btn-dark" @click="filtro('Americas')">AM</button>

            <button class="btn btn-dark" @click="filtro('Asia')">AS</button>

            <button class="btn btn-dark" @click="filtro('Africa')">AF</button>

            <button class="btn btn-dark" @click="filtro('Europe')">EU</button>

            <button class="btn btn-dark" @click="filtro('Oceania')">OC</button>

            <button class="btn btn-dark" @click="filtro('')">ALL</button>
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex';
export default {
    name: 'Continente',

    setup() {
        const store = useStore();
        const filtro = (region) => {
            store.dispatch('filtrarRegion', region);
        };
        return { filtro };
    },
};
</script>

<style></style>

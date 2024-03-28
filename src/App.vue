<template>
    <div class="container">
        <h1 class="text-center">Paises API</h1>
        <Continente />

        <Buscador />

        <CardList />
    </div>
</template>

<script>
import CardList from './components/CardList.vue';
import Continente from './components/Continente.vue';
import Buscador from './components/Buscador.vue';

export default {
    name: 'App',
    components: { CardList, Continente, Buscador },
};
</script>

<template>
    <div class="row">
        <div class="col-12" v-for="pais in paises" :key="pais.name">
            <Card :pais="pais" />
        </div>
    </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import Card from './Card.vue';

export default {
    components: {
        Card,
    },

    setup() {
        // obtiene los valores del store
        const store = useStore();
        const paises = computed(() => {
            //   return store.state.paises;
            return store.getters.getPaisesPoblacion;
        });

        onMounted(async () => {
            await store.dispatch('getPaises');
            await store.dispatch('filtrarRegion', '');
        });

        return { paises };
    },
};
</script>

<style></style>

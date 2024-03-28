<template>
    <div class="card mb-2">
        <div class="card-body">
            <h5 class="text-center">{{ pais.name }}</h5>

            <p class="text-center">
                <img :src="pais.flag" :alt="`${pais.name}`" class="img-fluid w-50" />
            </p>

            <p class="card-text text-center">
                <span class="bg-dark d-block mb-1 text-white"> Native Name {{ pais.nativeName }} </span>

                <span class="bg-info d-block mb-1 p-3 text-white">
                    Poblacion {{ numeroFormato(pais.population) }}
                </span>

                <span class="bg-dark d-block mb-1 text-white"> Capital {{ pais.capital }} </span>

                <span class="bg-dark d-block mb-1 text-white"> Region {{ pais.region }} </span>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['pais'],

    setup() {
        const numeroFormato = (numero) => {
            return new Intl.NumberFormat('En-in').format(numero);
        };

        return { numeroFormato };
    },
};
</script>

<style></style>

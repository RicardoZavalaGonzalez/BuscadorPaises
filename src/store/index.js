import { createStore } from 'vuex';

// metodo global para emitir variables y funciones
export default createStore({
    // estados
    state: {
        paises: [],
        paisesFiltrados: [],
    },
    // funcciones
    mutations: {
        setPaises(state, payload) {
            state.paises = payload;
        },
        setPaisesFiltrados(state, payload) {
            state.paisesFiltrados = payload;
        },
    },

    actions: {
        async getPaises({ commit }) {
            try {
                const resp = await fetch('https://restcountries.eu/rest/v2/all');
                const data = await resp.json();
                // console.log(data);
                commit('setPaises', data);
            } catch (error) {
                console.log(error);
            }
        },

        filtrarRegion({ commit, state }, region) {
            const filtro = state.paises.filter(pais => {
                return pais.region.includes(region);
            });
            // console.log(filtro);
            // envia el valor a la mutacion
            commit('setPaisesFiltrados', filtro);
        },

        filtrarPais({ commit, state }, pais) {
            const paisCliente = pais.toLowerCase();
            const filtro = state.paises.filter(pais => {
                const paisApi = pais.name.toLowerCase();
                if (paisApi.includes(paisCliente)) {
                    return pais;
                }
            });
            // envia el valor a la mutacion
            commit('setPaisesFiltrados', filtro);
        },
    },

    getters: {
        getPaisesPoblacion(state) {
            return state.paisesFiltrados.sort((a, b) => {
                return a.population < b.population ? 1 : -1;
            });
        },
    },

    modules: {},
});

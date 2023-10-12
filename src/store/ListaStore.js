import { createStore } from "vuex";
import axiosClient from "../compostable/axios";

const listaStoreClient = createStore({
    state:
    {
        Lista: ({
            id: 1,
            nombre: null,
            descripcion: null,
            compraArticuloLista: [
                {
                    idLista: null,
                    idUsuario: null,
                    idArticulo: null,
                    precio: null,
                    cantidad: null,
                    observaciones: null,
                    isPagado: null,
                    idArticuloNavigation: {
                        nombre: null,
                        descripcion: null,
                        foto: null,
                        cantidad: null
                    }
                }
            ],
            precio: null,
            isPagado: null
        }),
    },
    mutations:
    {
        setLista(state, lista) {
            state.Lista = lista;
        },
        addArticulo(state, articulo) {
            state.Lista.compraArticuloLista.push(articulo);
        },
        removeArticulo(state, id) {
            const index = state.Lista.compraArticuloLista.findIndex(e => e.id === id);
            state.Lista.compraArticuloLista.splice(index, 1);
        },
        updateArticulo(state, articulo) {
            const index = state.Lista.compraArticuloLista.findIndex(e => e.id === articulo.id);
            state.Lista.compraArticuloLista[index] = articulo;
        },
        sumaGasto(state, precio) {
            state.Lista.precio += precio;
        },
        restaGasto(state, precio) {
            state.Lista.precio -= precio;
        },
        setPagado(state, isPagado) {
            state.Lista.isPagado = isPagado;
        },
        sumaCantidad(state, cantidad) {
            state.Lista.cantidad += cantidad;
        }
    },
    actions: {
        getLista({ commit }, id) {
            axiosClient.get('listas/' + id).then((response) => {
                commit('setLista', response);
            });
        },
        guardarLista({ commit }, lista) {
            axiosClient.post('listas', lista).then((response) => {
                commit('setLista', response);
            });
        },
        addArticulo({ commit }, articulo) {
            commit('addArticulo', articulo);
        },
        removeArticulo({ commit }, id) {
            commit('removeArticulo', id);
        },
        updateArticulo({ commit }, articulo) {
            commit('updateArticulo', articulo);
        },
        sumaGasto({ commit }, precio) {
            commit('sumaGasto', precio);
        },
        restaGasto({ commit }, precio) {
            commit('restaGasto', precio);
        },
        setPagado({ commit }, isPagado) {
            commit('setPagado', isPagado);
        },
        sumaCantidad({ commit }, cantidad) {
            axiosClient.post('listas/Articulo', lista).then((response) => {
                console.log(response);
                commit('sumaCantidad', cantidad);
            });
        }

    }

});

export default listaStoreClient;


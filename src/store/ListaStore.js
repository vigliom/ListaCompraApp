    import { createStore, useStore } from "vuex";
    import axiosClient from "../compostable/axios";
import { ref } from "vue";

    const listaStoreClient = createStore({
        state:
        {
            Lista: ref({
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
                // console.log(lista);
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
                console.log(articulo);
                state.Lista.compraArticuloLista = articulo;
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
            async getLista({ commit }, idLista) {
                try {
                    const response = await axiosClient.get('listas/' + idLista);
                    commit('setLista', response);
                    return response; // Devuelve la respuesta para que se pueda usar en el componente
                } catch (error) {
                    console.error(error);
                    throw error; // Lanza el error para manejarlo en el componente
                }
            },
            async guardarLista({ commit }, lista) {
                try {
                    const response = await axiosClient.put('listas/articulo', lista);
                    console.log(response);
                    commit('setLista', response);
                    return response; // Devuelve la respuesta para que se pueda usar en el componente
                } catch (error) {
                    console.error(error);
                    throw error; // Lanza el error para manejarlo en el componente
                }
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
            async setPagado({ commit }, listaArticulo) {
                console.log(listaArticulo);
                await axiosClient.post('listas/pagar', listaArticulo).then((response) => {
                    console.log(response);
                    
                    commit('updateArticulo', response);
                    return response;
                });
                commit('setPagado', listaArticulo.isPagado);
            },
            async unSetPagado({ commit }, listaArticulo) {
                console.log(listaArticulo);
                await axiosClient.post('listas/pagar' , listaArticulo).then((response) => {
                    console.log(response);
                    
                    commit('updateArticulo', response);
                    return response;
                });
                commit('setPagado', listaArticulo.isPagado);
            },
            sumaCantidad({ commit }, listaArticulo) {
                
                axiosClient.post('listas/articulo', listaArticulo).then((response) => {
                    
                    commit('updateArticulo', response);
                    return response;
                });
            }

        },
        getters:{
            getListaStore(state){
                // console.log(state.Lista)
                return state.Lista;
            }
        }

    });
    export default listaStoreClient;


import { createStore } from "vuex";

const entityStore = createStore({
    state: {
        Listas:[
            {
                id:1,                
                listName:'Lista 1',
                comprada:false,
                descripcion:'Descripcion de la lista 1',
                items:[
                    {
                        id:1,
                        name:'Item 1',
                        cantidad:1,
                        comprado:false
                    },
                    {
                        id:2,
                        name:'Item 2',
                        cantidad:1,
                        comprado:false
                    },
                    {
                        id:3,
                        name:'Item 3',
                        cantidad:1,
                        comprado:false
                    },
                    {
                        id:4,
                        name:'Item 4',
                        cantidad:1,
                        comprado:false
                    },
                    {
                        id:5,
                        name:'Item 5',
                        cantidad:1,
                        comprado:false
                    }
                ]
            },
            {
                id:2,                
                listName:'Lista 2',
                comprada:false,
                descripcion:'Descripcion de la lista 2',
                items:[
                    {
                        id:1,
                        name:'Item 1',
                        cantidad:1,
                        comprado:false
                    },
                    {
                        id:2,
                        name:'Item 2',
                        cantidad:1,
                        comprado:false
                    },
                    {
                        id:3,
                        name:'Item 3',
                        cantidad:1,
                        comprado:false
                    },
                    {
                        id:4,
                        name:'Item 4',
                        cantidad:1,
                        comprado:false
                    },
                    {
                        id:5,
                        name:'Item 5',
                        cantidad:1,
                        comprado:false
                    }
                ]
            },
            {
                id:3,                
                listName:'Lista 3',
                comprada:false,
                descripcion:'Descripcion de la lista 3',
                items:[
                    {
                        id:1,
                        name:'Item 1',
                        cantidad:1,
                        comprado:false
                    },
                    {
                        id:2,
                        name:'Item 2',
                        cantidad:1,
                        comprado:false
                    },
                    {
                        id:3,
                        name:'Item 3',
                        cantidad:1,
                        comprado:false
                    },
                    {
                        id:4,
                        name:'Item 4',
                        cantidad:1,
                        comprado:false
                    },
                    {
                        id:5,
                        name:'Item 5',
                        cantidad:1,
                        comprado:false
                    }
                ]
            },
            {
                id:4,                
                listName:'Lista 3',
                comprada:false,
                descripcion:'Descripcion de la lista 3',
                items:[
                    {
                        id:1,
                        name:'Item 1',
                        cantidad:1,
                        comprado:false
                    },
                    {
                        id:2,
                        name:'Item 2',
                        cantidad:1,
                        comprado:false
                    },
                    {
                        id:3,
                        name:'Item 3',
                        cantidad:1,
                        comprado:false
                    },
                    {
                        id:4,
                        name:'Item 4',
                        cantidad:1,
                        comprado:false
                    },
                    {
                        id:5,
                        name:'Item 5',
                        cantidad:1,
                        comprado:false
                    }
                ]
            },
            {
                id:5,                
                listName:'Lista 3',
                comprada:false,
                descripcion:'Descripcion de la lista 3',
                items:[
                    {
                        id:1,
                        name:'Item 1',
                        cantidad:1,
                        comprado:false
                    },
                    {
                        id:2,
                        name:'Item 2',
                        cantidad:1,
                        comprado:false
                    },
                    {
                        id:3,
                        name:'Item 3',
                        cantidad:1,
                        comprado:false
                    },
                    {
                        id:4,
                        name:'Item 4',
                        cantidad:1,
                        comprado:false
                    },
                    {
                        id:5,
                        name:'Item 5',
                        cantidad:1,
                        comprado:false
                    }
                ]
            },
            {
                id:6,                
                listName:'Lista 7',
                comprada:false,
                descripcion:'Descripcion de la lista 3',
                items:[
                    {
                        id:1,
                        name:'Item 1',
                        cantidad:1,
                        comprado:false
                    },
                    {
                        id:2,
                        name:'Item 2',
                        cantidad:1,
                        comprado:false
                    },
                    {
                        id:3,
                        name:'Item 3',
                        cantidad:1,
                        comprado:false
                    },
                    {
                        id:4,
                        name:'Item 4',
                        cantidad:1,
                        comprado:false
                    },
                    {
                        id:5,
                        name:'Item 5',
                        cantidad:1,
                        comprado:false
                    }
                ]
            }
            
        ]
    },
    mutations: {
        addEntity(state, entity) {
            state.entities.push(entity);
        },
        updateEntity(state, entity) {
            const index = state.entities.findIndex(e => e.id === entity.id);
            state.entities[index] = entity;
        },
        removeEntity(state, id) {
            const index = state.entities.findIndex(e => e.id === id);
            state.entities.splice(index, 1);
        }
    },
    actions: {
        addEntity({ commit }, entity) {
            commit('addEntity', entity);
        },
        updateEntity({ commit }, entity) {
            commit('updateEntity', entity);
        },
        removeEntity({ commit }, id) {
            commit('removeEntity', id);
        }
    },
    getters: {
        getListaById: (state) => (id) => {
            const lista = state.Listas.find(list => list.id === id);            
            console.log(lista);            
            return lista;
        },
        getAllListas: (state) => {
            return state.Listas;
        },
        getEntitiesByType: (state) => (type) => {
            return state.entities.filter(entity => entity.type === type);
        },
        getEntitiesByUser: (state) => (userId) => {
            return state.entities.filter(entity => entity.userId === userId);
        },
        getEntitiesByUserAndType: (state) => (userId, type) => {
            return state.entities.filter(entity => entity.userId === userId && entity.type === type);
        },
        getEntitiesByUserAndDate: (state) => (userId, date) => {
            return state.entities.filter(entity => entity.userId === userId && entity.date === date);
        },
        getEntitiesByUserAndDateAndType: (state) => (userId, date, type) => {
            return state.entities.filter(entity => entity.userId === userId && entity.date === date && entity.type === type);
        },
        getEntitiesByDate: (state) => (date) => {
            return state.entities.filter(entity => entity.date === date);
        },
        getEntitiesByDateAndType: (state) => (date, type) => {
            return state.entities.filter(entity => entity.date === date && entity.type === type);
        },
    }
});

export default entityStore;
import Vuex from 'vuex'
import httpService from '@/services/http'

const createStore = () => {


    return new Vuex.Store({
        state: () => ({
            user: {},
            repos: [],
            loading: false,
        }),

        mutations: {
            SET_USER(state, payload) {
                state.user = payload
            },
            SET_REPOS(state, payload) {
                state.repos = payload
            },
            SET_LOADER(state, payload) {
                state.loading = payload
            },
        },

        actions: {
            async getUserData({ commit }) {
                commit("SET_LOADER", true);

                try {
                    let response = await new httpService(this.$axios).userData();
                    commit('SET_USER', response.data)
                    commit("SET_LOADER", false)

                } catch (err) {
                    console.log(err);
                    commit("SET_LOADER", false)
                }
            },


            async getUserRepos({ commit }) {
                commit("SET_LOADER", true);

                try {
                    let response = await new httpService(this.$axios).userRepos();
                    commit('SET_REPOS', response.data)
                    commit("SET_LOADER", false)

                } catch (err) {
                    console.log(err);
                    commit("SET_LOADER", false)
                }
            }

        }
    })
}

export default createStore
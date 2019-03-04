import axios from 'axios'

export const state = () => ({
  list: [],
  page: 1,
  perPage: 10,
})

export const actions = {
  async SEARCH ({ commit }, keyword) {
    try {
      const { data } = await axios.get(`${process.env.baseURL}/search?keyword=${keyword}`)
      commit('SET_LIST', data.list)
      commit('SET_PAGE', 1)
    } catch (error) { console.log('Error from actions/SEARCH', error)}
  },
  PREV_PAGE ({ state, commit }) {
    if (state.page > 1) {
      commit('SET_PAGE', state.page - 1)
    }
  },
  NEXT_PAGE ({ state, commit }) {
    const { page, list, perPage } = state
    if (page < Math.ceil(list.length / perPage)){
      commit('SET_PAGE', page + 1)
    }
  }
}

export const mutations = {
  SET_LIST (state, data) {
    state.list = data
  },
  SET_PAGE (state, data) {
    state.page = data
  }
}

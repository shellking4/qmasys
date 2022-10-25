import { authService } from '../services/auth.service';


export const state = () => ({
  user: Object
})

export const mutations = {
  SET_USER(state: any, user: any) {
    state.user = user
  }
}

export const actions = {
  async authenticateUser({ commit }: any) {
      try {
        let authResponse = (await authService.authenticate(1)).data
        commit('SET_USER', authResponse)
      } catch (error) {
        
      }
  }
}
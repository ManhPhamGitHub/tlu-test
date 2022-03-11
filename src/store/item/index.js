import { actions } from './actions'
import * as types from './type'
const defaultState = {
  listItem:[],
  isLoading:false,
  isFetching:false,
  isLogin:false
}
 const item = {
  namespaced: true, // phan biet module 
  state:defaultState, // DEFAULT_STATE -> reducer 
  actions:actions, // saga -> react 
  mutations:{ // reducer 
    [types.GET_ITEM_REQUEST](state){ // [das] -> ten function 
      state.isLoading = true
    },
    [types.GET_ITEM_SUCCESS](state,payload){
      state.isLoading = false,
      state.listItem = payload
    },
    [types.UPLOAD_ITEM_REQUEST](state){
      state.isLoading = false
    },
    [types.UPLOAD_ITEM_SUCCESS](state){
      state.isLoading = false
    },
  }
}

export default item
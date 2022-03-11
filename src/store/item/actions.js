import * as types from './type'
import * as api from '../../api/index'
export const actions =  { 
    async [types.GET_ITEM_REQUEST]({ commit }, payload) { 
        try{
            console.log(payload,'testttt')
            commit(types.GET_ITEM_REQUEST,"test")
            const res = await api.getItem()
            console.log(res.data)
            commit(types.GET_ITEM_SUCCESS,res.data)
        }catch(error){
            commit(types.GET_ITEM_FAILURE,error)
        }
    },
    async [types.UPLOAD_ITEM_REQUEST]({ commit,dispatch }, payload) { // form 
        //commit -> cap nhat reducer 
        // dispatch -> phat hanh dong -> put()
        // payload du lieu 
        try{
            commit(types.UPLOAD_ITEM_REQUEST,"test") // 
            await api.uploadFile(payload) // call api 
            commit(types.UPLOAD_ITEM_SUCCESS) // cap nhat trang thai mutation 
            dispatch(types.GET_ITEM_REQUEST) // getRequest 
        }catch(error){ 
            commit(types.UPLOAD_ITEM_FAILURE,error)
        }
    }
  }

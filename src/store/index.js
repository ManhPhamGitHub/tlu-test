import item from './item'
import { createStore } from 'vuex'


const myPlugin = store => { // 
    // called when the store is initialized
    store.subscribe((mutation) => {
      // called after every mutation.
      // The mutation comes in the format of `{ type, payload }`.
      console.log(mutation)
    })
  }


 const store = createStore({ 
    plugins: [myPlugin],
    modules:{// combineReducer
        item:item
    }
  })


export default store
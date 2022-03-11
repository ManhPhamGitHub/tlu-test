
<template>
  <div>
  <Header />
  <div class="mainContent">
    <Menu />
    <router-view />
  </div>
  </div>
</template>

<script>
import Menu from './Menu.vue'
import Header from './Header.vue'
import { mapActions,mapState  } from 'vuex'
import * as type from '../store/item/type'
export default {
  data(){ // state react
    return{
    listFile:[],
    title:"",
    activePage:1,
    totalPage:0
    }
  },
  name: 'Main', 
  computed:mapState({ 
    listItem:state=>state.item.listItem, 
  })
  ,
  methods:{ 
    ...mapActions({ 
      getItem:"item/" + type.GET_ITEM_REQUEST, 
      uploadFile:"item/" + type.UPLOAD_ITEM_REQUEST 
    }), 
    handleFileUpload(event){
      this.listFile = event.target.files
    },
    upload(){
      const form = new FormData()
      for(let i= 0;i<this.listFile.length;i++){
        form.append('file',this.listFile[i])
      }
      if(this.title){
        form.append('title',this.title)
      }
      this.uploadFile({file:form})
    }    
  },
  components:{
    Menu,
    Header
    },
    created(){ // life circle vuejs
      this.getItem() // getItemRequest 
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mainContent{
  width:100vw;
  height:93vh;
  display:flex;
}
</style>

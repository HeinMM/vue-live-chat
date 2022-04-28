<template>
  <div class="container">
      <NavBar></NavBar>
      <ChatWindow></ChatWindow>
      <ChatForm></ChatForm>
      
  </div>
  
</template>

<script>
import ChatWindow from '../components/ChatWindow'
import ChatForm from '../components/ChatForm'
import { watch } from '@vue/runtime-core'
import NavBar from '../components/NavBar'
import getUser from '../composables/getUser'
import {useRouter} from "vue-router"
export default {
  components: {
    ChatWindow,
    ChatForm, NavBar },
    setup(props) {
        let {user}=getUser();
        let router = useRouter();
        watch(user,()=>{
            if (!user.value) {
                router.push({name:"welcome"});
            }
        });
    }
}
</script>

<style>

</style>
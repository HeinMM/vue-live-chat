<template>
  <div class="container">
      <NavBar></NavBar>
      <ChatForm></ChatForm>
  </div>
  
</template>

<script>
import ChatForm from '../components/ChatForm'
import { watch } from '@vue/runtime-core'
import NavBar from '../components/NavBar'
import getUser from '../composables/getUser'
import {useRouter} from "vue-router"
export default {
  components: {
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
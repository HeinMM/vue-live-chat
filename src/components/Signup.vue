<template>
  <h1>Singup</h1>
  <form @submit.prevent="signup">
      <input type="text" placeholder="display name" v-model="displayName">
      <input type="email" placeholder="email" v-model="email">
      <input type="password" placeholder="password" v-model="password">
      <button>Sing Up</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    setup(props) {
        let displayName=ref("");
        let email = ref("");
        let password = ref("");
        let signup=()=>{
            console.log(displayName.value,email.value,password.value);
        };
        return {displayName,email,password,signup};
    }
}
</script>

<style>

</style>
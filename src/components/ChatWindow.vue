<template>
  <div class="chat-window">
    <!-- this.$refs.msgBox -->
    <div class="messages" ref="msgBox">
      <div class="single" v-for="message in formatedMessages" :key="message.id">
        <span class="created-at">{{ message.created_at }}</span>
        <span class="name">{{ message.name }}</span>
        <span class="messages">{{ message.message }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { collection, onSnapshot, orderBy, query } from '@firebase/firestore'
import {db} from '../firebase/config'
import { ref } from '@vue/reactivity'
import { computed, onUpdated } from '@vue/runtime-core'
import {formatDistanceToNow} from 'date-fns'
export default {
  setup(props) {
    let messages = ref([]);
    let msgBox=ref(null);
    //auto scrolling feature
    onUpdated(()=>{
      msgBox.value.scrollTop = msgBox.value.scrollHeight
    });

    let formatedMessages = computed(()=>{
      return messages.value.map((element)=>{
        let formatTime = formatDistanceToNow(element.created_at.toDate());
      return {...element,created_at:formatTime}
      });
    });

    let mesCol = collection(db,"messages");
    let q = query(mesCol,orderBy("created_at"));
    let s = onSnapshot(q,(snap)=>{
      let results =[];
      snap.docs.forEach((doc)=>{
        let document = {...doc.data(),id:doc.id};
        
           doc.data().created_at && results.push(document); //if
         
      });
      messages.value = results;
    });
    return {formatedMessages,msgBox};
  }
}
</script>

<style>
.chat-window {
  background: #fafafa;
  padding: 30px 20px;
}
.single {
  margin: 18px 0;
}
.created-at {
  display: block;
  color: #999;
  font-size: 12px;
  margin-bottom: 4px;
}
.name {
  font-weight: bold;
  color: #5ae4ca;
  margin-right: 6px;
}
.messages {
  max-height: 400px;
  overflow: auto;
}
</style>
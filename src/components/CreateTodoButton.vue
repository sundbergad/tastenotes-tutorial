<template>
  
  <!-- don't style it here, reather do at called position (hopefully it works )-->
    <q-btn 
      @click="handleButtonClick"
      fab 
      style="margin-bottom: -40px" 
      color="secondary" 
      icon="mdi-plus"
      class="q-mx-lg"
      title="title"
    />
 
</template>

<script setup>
// import { title } from 'process';
// import { defineComponent } from 'vue'

import { useQuasar } from 'quasar';
const $q = useQuasar()

function handleButtonClick(){
  
  $q.dialog({
    title: 'Create Todo',
    prompt: {
      model: 'Default text',
      type: 'text'
    }
  }).onOk(
    // call own function to keep clean, this pass the data with the call by default
    createTodo
  )
  .onCancel(() => {
    console.log('Cancel')
  }).onDismiss(() => {
 //   console.log('Called on OK or Cancel')
  }) 
  
  
}

function createTodo(data){
  console.log(data);
  $q.notify({
    message: "Todo created!",
    icon: 'mdi-check',
    color: 'positive'
  })
}
</script>

<template>
  <q-page class="row">
  <q-card class="col-xs-9">
    <q-toolbar>
      <q-input class="full-width" 
        borderless 
        :model-value="search"
        placeholder="Search"
        dense>
        <template #append> 
          <q-icon name="mdi-magnify" />
        </template>        
      </q-input>
    </q-toolbar>
    <TodosList />
  </q-card>
  
  <div  class="col-xs-3">
    <q-toolbar class="bg-primary">
    <CreateTodoButton></CreateTodoButton>
    </q-toolbar>
  </div>
  
  </q-page>
</template>

<script setup lang="ts">
import { Todo, Meta } from 'components/models'
import { ref, onMounted } from 'vue'
import CreateTodoButton from 'components/CreateTodoButton.vue'
import TodosList from 'components/TodosList.vue'
// tool in quasar to pick out color hex
// first import colors lib
// import {colors} from 'quasar'
// then pick out the utility function to get color hex
// const {getPaletteColor} = colors;

// onMounted(() => {
//   console.log("getPaletteColor :", getPaletteColor('blue-9'));
  
// })

const search = "";
const selected = ref(0)
const todos = ref<Todo[]>([
  {
    id: 1,
    content: 'ct1'
  },
  {
    id: 2,
    content: 'ct2'
  },
  {
    id: 3,
    content: 'ct3'
  },
  {
    id: 4,
    content: 'ct4'
  },
  {
    id: 5,
    content: 'ct5'
  }
])

const meta = ref<Meta>({
  totalCount: 1200
})
    
  

</script>


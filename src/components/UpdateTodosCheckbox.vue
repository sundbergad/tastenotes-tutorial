<template>
  <div>
    <q-checkbox v-model="checked" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
const checked = ref(false)

function toggleChecked(){
  checked.value = !checked.value
  console.log(checked.value);
}
</script>

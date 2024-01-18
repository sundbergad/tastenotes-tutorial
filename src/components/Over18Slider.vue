<script setup>
import {ref} from  'vue'
import { useFormChild } from 'quasar';

const props = defineProps({
  modelValue: {
    type:Number,
    required: true
  }
})
const valid = ref(false)

useFormChild({
  validate
})
function validate(){
  valid.value = props.modelValue > 18 
  console.log(props.modelValue);
  console.log("validate(): ", valid.value);
  return valid.value
}

useFormChild({
  validate
})
</script>

<template>
  <div>
    {{ modelValue }}
    <q-slider v-bind="$attrs" :model-value="modelValue" />
    
    <span v-if="!valid" class="text-red">
      Must be over 18 
    </span>
  </div>
</template>


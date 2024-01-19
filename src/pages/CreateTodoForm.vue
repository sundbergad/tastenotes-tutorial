<template>
  <q-page 
    padding
    class="flex flex-center"
  >
  <!-- 'ref = "formComponent" ' ger access till hela formuläret -->
    <q-form
      :key="key"
      class="column q-pa-md shadow-2"
      actions="http://localhost:9000"
      method="GET"
      ref="formComponent"
    >
      <q-input 
        v-model="form.title" 
        type="text" 
        name="Title" 
        placeholder="Your title"
        :rules="[requiredRules]" />
      
      <q-input 
        v-model="form.body" 
        type="textarea" 
        name="body" 
        placeholder="Your post ..."
        :rules="[requiredRules]" />
      
      <q-toggle
        v-model="form.acceptEULA"
        label="I accept the license and terms"
      />

      <Over18Slider v-model="form.age" />

      <q-btn 
        label="Submit"        
        color="indigo"
        @click="onSubmit"
      />
      <q-btn 
        label="Reset validation"
        flat        
        @click="onReset"  
      />
   
    </q-form>
  </q-page>
</template>

<script setup>
import {ref} from 'vue' 
import Over18Slider from 'components/Over18Slider.vue'

const key = ref(0)
const formComponent = ref()

const form = ref({
  title: '',
  body: '',
  acceptEULA: false,
  age: 0
})
function onReset(event){
  console.log(event);
  // form.value.reset
  // formComponent.value.title = '';
  // formComponent.value.body = '';
  // formComponent.value.acceptEULA = false;
  // reset validerings fel mm
  formComponent.value.resetValidation()
  key.value++
}
const requiredRules = val => (val && val.length > 0) || 'Please provide some text'

function onSubmit(event){
  console.log('on submit', event);
  // anropa validate metoden i formuläret
  // om success är OK ie true or false...
  formComponent.value.validate().then(
    success => {
      if(success){
        console.log("gick bra med valideringen");
      }else{
        console.log("Ajdå... det sket sig i valideringen");
      }
      console.log(success)
  })
}

</script>

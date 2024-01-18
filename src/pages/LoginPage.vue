<script setup>
import {ref} from 'vue'
import { useQuasar } from 'quasar'
import login from 'src/firebase/firebase-login'


const $q = useQuasar()


const formdata = ref(null)

const form = ref({
  username:'',
  password:'',
  acceptedEULA: false
})

function resetForm(){  
  location.reload();
}

const requiredRules = val =>(val && val.length > 0) || "Please type something"

async function onSubmit(event){  
  if (form.value.validate()) {
    try {
      await login(user)
      router.push('/app')
    } catch (err) {}
  }

  console.log("login username :" + event.username + " and password : " + event.password);
  //console.log("try to fetch user from localstorage");
  let reguser = $q.localStorage.getItem(event.username) // hämta key ie username, value är password
  console.log("password from store on this user", reguser);
  getUsers()
  if(reguser === event.password ){ // kolla om användaren finns registrerad, annars registrera
    console.log("Login OK now route to startpage");
    // spara session data
    // $q.sessionstorage ....
    // ladda startsidan
  }else{
    alert("failed to login, try again")
  }

}

function getUsers(){
  const users = $q.localStorage.getAll();
  console.log("getUsers : ", users);  
  $q.localStorage.remove( "username");
}

function setUserLocalStorage(user, pwd){
  try {
      $q.localStorage.set(user, pwd)
    } catch (e) {
      // data wasn't successfully saved due to
      // a Web Storage API error
      console.log(e.message);
    }
  let reguser = $q.localStorage.getItem(user)
  console.log("set password = ", reguser);
}

function onReset(event){
  console.log(event);  
  resetForm();
  
}

function clearUsersStorage(){

  $q.localStorage.clear()
  console.log($q.localStorage.getAll());
}

function registerUser(event){
  console.log(setUserLocalStorage(event.username, event.password));
  console.log($q.localStorage.getAll());
}

let type= "sessionstorage"
let localstore = "localstorage";  
function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];        
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
      console.log(e.code);
      return (
        e instanceof DOMException &&
        // everything except Firefox
        (e.code === 22 ||
          // Firefox
          e.code === 1014 ||
          // test name field too, because code might not be present
          // everything except Firefox
          e.name === "QuotaExceededError" ||
          // Firefox
          e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
        // acknowledge QuotaExceededError only if there's something already stored
        storage &&
        storage.length !== 0
      );
    }
}
</script>



<template>
  <q-page class="flex flex-center"
  padding>
    <!-- content -->
    <div class="full-width" style="max-width: 300px">
    <h5 class="q-my-md" >
      Login
    </h5>
    <q-card>
    <!-- can be used as a Form that react on Enter => submit -->
      <q-form 
        ref="formdata"
        action="http://localhost:8080"
        class="q-pa-md shadow-2"
        method="GET"
      >
        <q-card-section>
          <q-input 
            filled
            v-model="form.username"
            name="username"
            label="email" 
            placeholder="email@example.com"
            :rules="[requiredRules]"
          />
        </q-card-section>
        <q-card-section>
          <q-input 
            filled 
            v-model="form.password"
            name="password"
            type="password" 
            placeholder="password " 
            class="q-mb-sm" 
            autocomplete
            :rules="[requiredRules]"            
          />
        <q-toggle 
          v-model="form.acceptedEULA" 
          label="Accept EULA text" 
        />        
        </q-card-section>
        <q-btn 
          v-if="form.acceptedEULA"
          label="Login" 
          class="full-width" 
          color="primary"
          @click="onSubmit(form)"
        />
        <q-btn 
        label="Reset" 
        actions="reset"
        @click="onReset"
        />
        <q-btn 
        label="ClearAll" 
        @click="clearUsersStorage"
        />
        <q-btn 
        label="Register New user"         
        @click="registerUser"
        />
      </q-form>
    </q-card>
  </div>
  </q-page>
</template>


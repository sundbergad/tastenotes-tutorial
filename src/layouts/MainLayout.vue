<template>
  <!-- replace lHh with hHh to handle side drawer apperance -->
  <q-layout view="hHh Lpr lFf">
  <!-- remove elevated to remove shaddow on toolbar -->
    <q-header>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="mdi-menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <q-btn @click="loginTo" flat round icon="mdi-logout"></q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-toolbar class="bg-primary" />

        <q-item class="bg-grey-3">
          <q-item-section>
          List
          </q-item-section>
          <q-item-section side>
            <q-btn icon="mdi-plus" flat round size="sm"></q-btn>
          </q-item-section>
          
        </q-item>
        <q-item clickable class="text-grey-9">
          <q-item-section>
            <q-icon name="mdi-shopping"></q-icon>
          </q-item-section>
          <q-item-section>
            Shopppinglist            
          </q-item-section>
          <q-item-section side>
            12
            
          </q-item-section>
        </q-item>


      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
  import {ref} from 'vue'
  const leftDrawerOpen = ref(false)
  import { useQuasar, QSpinnerGears } from 'quasar';

  const $q = useQuasar()

  function toggleLeftDrawer () {
    leftDrawerOpen.value = !leftDrawerOpen.value
  }

  function loginTo(){
    console.log("loginTo clicked ");
    // display login form
    // call own function to keep clean, this pass the data with the call by default
    
    let dialog = $q.dialog({
      title: 'Uploading...',
        dark: true,
        message: '0%',
        progress: {
          spinner: QSpinnerGears,
          color: 'amber'
        },
        persistent: true, // we want the user to not be able to close it
        ok: false // we want the user to not be able to close it
    })
    
    // we simulate some progress here...
    let percentage = 0
    const interval = setInterval(() => {
      percentage = Math.min(100, percentage + Math.floor(Math.random() * 22))

      // we update the dialog
      //this.dialog.update({ message: `${percentage}%` })
      dialog.update({message: `${percentage}%` })
      // if we are done...
      if (percentage === 100) {
        clearInterval(interval)
        // if 100% achived
        // dialog.update({
        //   title: 'Done!',
        //   message: 'Upload completed successfully',
        //   progress: false,
        //   ok: true
        // })
        dialog.hide()
        
      }
    }, 1000) // end setInterval()
  
  }

</script>

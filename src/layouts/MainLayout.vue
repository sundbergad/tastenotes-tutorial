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

  function toggleLeftDrawer () {
    leftDrawerOpen.value = !leftDrawerOpen.value
  }

</script>

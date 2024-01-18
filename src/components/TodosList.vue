<template>
  <div><q-list bordered>
      <q-item>
        <q-item-section side>
          <UpdateTodosCheckbox />
        </q-item-section>
        <q-item-section>Go shopping</q-item-section>
        <q-item-section side>
          <q-btn flat round icon="mdi-delete" size="small">
        </q-btn></q-item-section>
      </q-item>
    </q-list></div>
</template>

<script setup>
import UpdateTodosCheckbox from './UpdateTodosCheckbox.vue';
</script>

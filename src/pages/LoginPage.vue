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
      <q-form>
        <q-card-section>
          <q-input filled label="email" placeholder="email@example.com"/>
        </q-card-section>
        <q-card-section>
          <q-input filled type="password" placeholder="password " class="q-mb-sm" />
        <q-checkbox :model-value="true" label="Remember me" />
        </q-card-section>
        <q-btn label="Login" class="full-width" color="primary" />
      </q-form>
    </q-card>
  </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  // name: 'PageName'
})
</script>

<template>
  <main id="main" class="flex items-center m-4">
    <login-form />
  </main>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import LoginForm from '@/components/login/login-form.vue'

@Component({
  auth: false,
  components: {
    LoginForm,
  },
})
export default class LoginPage extends Vue {}
</script>

<style lang="scss"></style>

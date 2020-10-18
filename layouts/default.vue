<template>
  <div id="app">
    <header-component />
    <Nuxt />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

import HeaderComponent from '~/components/common/header.vue'

@Component({
  components: {
    HeaderComponent,
  },
})
export default class DefaultLayout extends Vue {}
</script>

<style lang="scss"></style>

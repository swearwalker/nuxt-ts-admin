<template>
  <main id="main" class="flex items-center m-4">
    <v-btn
      no-shadow="true"
      class="mx-4"
      color="primary-mono"
      to="index"
      title="link"
    />
    <v-btn class="mx-4" color="neutral" title="button" />
    <v-btn class="mx-4" color="success" icon="home-line" />
    <v-btn
      class="mx-4"
      color="info"
      :disabled="true"
      icon="home-line"
      title="title"
    />
    <v-btn
      class="mx-4"
      color="danger"
      reverse="true"
      icon="home-line"
      title="title"
    />
    <v-btn class="mx-4" color="warning" title="title" />
    <v-btn class="mx-4" color="primary"
      ><p>qweqwe</p>
      <span>wwwww</span></v-btn
    >
  </main>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

import VBtn from '~/components/common/v-btn.vue'

@Component({
  components: {
    VBtn,
  },
})
export default class IndexPage extends Vue {}
</script>

<style lang="scss"></style>

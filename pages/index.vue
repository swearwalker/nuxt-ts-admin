<template>
  <main id="main" class="flex items-center m-4">
    <v-btn class="mx-4" color="primary" to="index" mode="mono" title="link" />
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
      no-shadow="true"
      class="mx-4"
      color="danger"
      reverse="true"
      icon="home-line"
      title="title"
    />
    <v-btn mode="border" class="mx-4" color="warning" title="title" />
    <v-btn mode="link" class="mx-4" color="primary"
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

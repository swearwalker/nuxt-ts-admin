<template>
  <main id="main">
    <v-input :value="1" />
  </main>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

export interface test1 {
  name: string
}

@Component
export default class IndexPage extends Vue {
  test: test1[] = [
    {
      name: 'qweqwe',
    },
  ]
}
</script>

<style lang="scss"></style>

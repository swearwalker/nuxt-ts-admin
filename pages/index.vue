<template>
  <main id="main" class="flex items-center m-4 pt-16">
    <v-btn
      class="mx-4"
      :color="colorsEnums.PRIMARY"
      to="index"
      :mode="modesEnums.MONO"
      title="link"
    />
    <v-btn class="mx-4" title="button" />
    <v-btn class="mx-4" :color="colorsEnums.SUCCESS" :icon="iconsEnums.HOME" />
    <v-btn
      class="mx-4"
      :color="colorsEnums.INFO"
      :disabled="true"
      :icon="iconsEnums.HOME"
      title="title"
    />
    <v-btn
      no-shadow="true"
      class="mx-4"
      :color="colorsEnums.DANGER"
      reverse="true"
      icon="home-line"
      title="title"
    />
    <v-btn
      :mode="modesEnums.BORDER"
      class="mx-4"
      :color="colorsEnums.WARNING"
      title="title"
    />
    <v-btn :mode="modesEnums.LINK" class="mx-4" :color="colorsEnums.PRIMARY"
      ><span>Custom title</span></v-btn
    >
    <v-toggle v-model="test" />
  </main>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

import VBtn from '~/components/common/v-btn.vue'
import VToggle from '~/components/common/v-toggle.vue'
import { ColorsEnums, ModesEnums, IconsEnums } from '~/enums/common'

@Component({
  components: {
    VBtn,
    VToggle,
  },
})
export default class IndexPage extends Vue {
  readonly colorsEnums = ColorsEnums
  readonly modesEnums = ModesEnums
  readonly iconsEnums = IconsEnums

  test: boolean = true
}
</script>

<style lang="scss"></style>

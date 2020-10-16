<template>
  <main id="main" class="flex items-center m-4">
    <v-btn
      class="mx-4"
      :color="btnColorsEnums.PRIMARY"
      to="index"
      :mode="btnModesEnums.MONO"
      title="link"
    />
    <v-btn class="mx-4" title="button" />
    <v-btn
      class="mx-4"
      :color="btnColorsEnums.SUCCESS"
      :icon="iconsEnums.HOME"
    />
    <v-btn
      class="mx-4"
      :color="btnColorsEnums.INFO"
      :disabled="true"
      :icon="iconsEnums.HOME"
      title="title"
    />
    <v-btn
      no-shadow="true"
      class="mx-4"
      :color="btnColorsEnums.DANGER"
      reverse="true"
      icon="home-line"
      title="title"
    />
    <v-btn
      :mode="btnModesEnums.BORDER"
      class="mx-4"
      :color="btnColorsEnums.WARNING"
      title="title"
    />
    <v-btn
      :mode="btnModesEnums.LINK"
      class="mx-4"
      :color="btnColorsEnums.PRIMARY"
      ><span>Custom title</span></v-btn
    >
  </main>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

import VBtn from '~/components/common/v-btn.vue'
import { VBtnColorsEnums, VBtnModesEnums, IconsEnums } from '~/enums/common'

@Component({
  components: {
    VBtn,
  },
})
export default class IndexPage extends Vue {
  readonly btnColorsEnums = VBtnColorsEnums
  readonly btnModesEnums = VBtnModesEnums
  readonly iconsEnums = IconsEnums
}
</script>

<style lang="scss"></style>

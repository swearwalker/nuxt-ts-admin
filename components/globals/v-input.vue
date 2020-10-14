<template>
  <div>
    <select v-model="$colorMode.preference">
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { VInputDto } from '~/types/common/v-input.dto'

@Component
export default class VInput extends Vue implements VInputDto {
  @Prop({ type: [String, Number] })
  readonly value?: string | number
}
</script>

<style lang="scss" scoped></style>

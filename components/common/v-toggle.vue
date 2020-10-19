<template>
  <div class="toggle" @click="change(!value)">{{ value }}</div>
</template>

<script lang="ts">
import { Vue, Component, Model, Emit, Prop } from 'vue-property-decorator'
import { VToggleDto } from '~/types/common'
import { ColorsEnums, IconsEnums, ModesEnums } from '~/enums/common'

@Component
export default class VToggle extends Vue implements VToggleDto {
  @Model('change', { type: Boolean }) readonly value!: boolean

  @Prop({ default: ColorsEnums.NEUTRAL })
  readonly color?: ColorsEnums

  @Prop()
  readonly icon?: IconsEnums

  @Prop()
  readonly title?: string

  @Prop()
  readonly mode?: ModesEnums

  @Prop({ default: false })
  readonly noShadow?: boolean

  @Prop({ default: false })
  readonly disabled?: boolean

  get buttonMode(): string {
    if (ModesEnums.BORDER === this.mode) {
      return `btn-${this.color}-${ModesEnums.BORDER}`
    } else if (ModesEnums.LINK === this.mode) {
      return `btn-${this.color}-${ModesEnums.LINK}`
    } else if (ModesEnums.MONO === this.mode) {
      return `btn-${this.color}-${ModesEnums.MONO}`
    } else {
      return `btn-${this.color}`
    }
  }

  @Emit('change')
  change(value: boolean): boolean {
    return value
  }
}
</script>

<style lang="scss" scoped></style>

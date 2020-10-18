<template>
  <component
    :is="componentType"
    :class="[
      {
        'no-title': icon && !title,
        'no-shadow': noShadow,
        disabled: disabled,
      },
      buttonMode,
    ]"
    class="btn"
    :to="localePath(to)"
    :disabled="disabled"
    @click="click"
  >
    <div :class="{ btn__reverse: reverse }" class="btn__content">
      <slot v-if="$slots.default" />
      <svg-icon v-if="!$slots.default && icon" class="btn__icon" :name="icon" />
      <span
        v-if="!$slots.default && title"
        :class="[textMargin, 'btn__text']"
        >{{ title }}</span
      >
    </div>
  </component>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator'
import { RawLocation } from 'vue-router'
import { VBtnDto } from '@/types/common'
import {
  VBtnColorsEnums,
  VBtnModesEnums,
  VBtnTypesEnums,
  IconsEnums,
} from '~/enums/common'

@Component
export default class VBtn extends Vue implements VBtnDto {
  @Prop()
  readonly to?: RawLocation

  @Prop({ default: VBtnColorsEnums.NEUTRAL })
  readonly color?: VBtnColorsEnums

  @Prop()
  readonly icon?: IconsEnums

  @Prop()
  readonly title?: string

  @Prop()
  readonly mode?: VBtnModesEnums

  @Prop()
  readonly reverse?: boolean

  @Prop({ default: false })
  readonly noShadow?: boolean

  @Prop({ default: false })
  readonly disabled?: boolean

  get componentType(): VBtnTypesEnums {
    return this.to ? VBtnTypesEnums.LINK : VBtnTypesEnums.BTN
  }

  get textMargin(): string {
    return this.icon ? (this.reverse ? 'mr-2' : 'ml-2') : ''
  }

  get buttonMode(): string {
    if (VBtnModesEnums.BORDER === this.mode) {
      return `btn-${this.color}-${VBtnModesEnums.BORDER}`
    } else if (VBtnModesEnums.LINK === this.mode) {
      return `btn-${this.color}-${VBtnModesEnums.LINK}`
    } else if (VBtnModesEnums.MONO === this.mode) {
      return `btn-${this.color}-${VBtnModesEnums.MONO}`
    } else {
      return `btn-${this.color}`
    }
  }

  @Emit('click')
  click() {}
}
</script>

<style lang="scss" scoped></style>

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
import { Location } from 'vue-router'
import { VBtnDto } from '@/types/common'
import {
  ColorsEnums,
  ModesEnums,
  VBtnTypesEnums,
  IconsEnums,
} from '~/enums/common'

@Component
export default class VBtn extends Vue implements VBtnDto {
  @Prop()
  readonly to?: string | Location

  @Prop({ default: ColorsEnums.NEUTRAL })
  readonly color?: ColorsEnums

  @Prop()
  readonly icon?: IconsEnums

  @Prop()
  readonly title?: string

  @Prop()
  readonly mode?: ModesEnums

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

  @Emit('click')
  click() {}
}
</script>

<style lang="scss" scoped></style>

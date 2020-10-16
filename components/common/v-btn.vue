<template>
  <component
    :is="componentType"
    :class="[
      { 'btn__no-title': icon && !title, 'no-shadow': noShadow },
      'btn-' + (disabled ? color + '-disabled' : color),
      mode,
    ]"
    class="btn"
    :to="localePath(to)"
    :disabled="disabled"
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
import { Vue, Component, Prop } from 'vue-property-decorator'
import { RawLocation } from 'vue-router'
import { VBtnDto } from '@/types/common/v-btn.dto'

@Component
export default class VBtn extends Vue implements VBtnDto {
  @Prop()
  readonly to?: RawLocation

  @Prop({ default: 'neutral' })
  readonly color?: string

  @Prop()
  readonly icon?: string

  @Prop()
  readonly title?: string

  @Prop()
  readonly mode?: string

  @Prop()
  readonly reverse?: boolean

  @Prop({ default: false })
  readonly noShadow?: boolean

  @Prop({ default: false })
  readonly disabled?: boolean

  get componentType(): string {
    return this.to ? 'nuxt-link' : 'button'
  }

  get textMargin(): string {
    return this.icon ? (this.reverse ? 'mr-2' : 'ml-2') : ''
  }
}
</script>

<style lang="scss" scoped></style>

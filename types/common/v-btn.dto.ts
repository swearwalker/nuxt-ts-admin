import { RawLocation } from 'vue-router/types/router'

export interface VBtnDto {
  to?: RawLocation
  color?: string
  icon?: string
  title?: string
  reverse?: boolean
  noShadow?: boolean
  disabled?: boolean
  componentType: string
  textMargin: string
}

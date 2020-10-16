import { RawLocation } from 'vue-router'

export interface VBtnDto {
  to?: RawLocation
  color?: string
  mode?: string
  icon?: string
  title?: string
  reverse?: boolean
  noShadow?: boolean
  disabled?: boolean
  componentType: string
  textMargin: string
}

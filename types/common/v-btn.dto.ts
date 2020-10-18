import { RawLocation } from 'vue-router'
import { VBtnTypesEnums, VBtnColorsEnums, VBtnModesEnums } from '~/enums/common'

export interface VBtnDto {
  to?: RawLocation
  color?: VBtnColorsEnums
  mode?: VBtnModesEnums
  icon?: string
  title?: string
  reverse?: boolean
  noShadow?: boolean
  disabled?: boolean
  componentType: VBtnTypesEnums
  textMargin: string
  buttonMode: string
}

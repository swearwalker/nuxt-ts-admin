import { Location } from 'vue-router'
import { VBtnTypesEnums, ColorsEnums, ModesEnums } from '~/enums/common'

export interface VBtnDto {
  to?: string | Location
  color?: ColorsEnums
  mode?: ModesEnums
  icon?: string
  title?: string
  reverse?: boolean
  noShadow?: boolean
  disabled?: boolean
  componentType: VBtnTypesEnums
  textMargin: string
  buttonMode: string
}

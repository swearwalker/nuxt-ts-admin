import { ColorsEnums, ModesEnums, IconsEnums } from '~/enums/common'

export interface VToggleDto {
  value: boolean
  color?: ColorsEnums
  icon?: IconsEnums
  title?: string
  mode?: ModesEnums
  noShadow?: boolean
  disabled?: boolean
  buttonMode: string
  change(value: boolean): boolean
}

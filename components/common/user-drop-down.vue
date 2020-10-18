<template>
  <div class="user-drop-down">
    <div
      class="user-drop-down__main main flex items-center relative cursor-pointer"
    >
      <p class="main__username uppercase font-medium text-xs">
        {{ $auth.user.username }}
      </p>
      <svg-icon class="main__icon ml-2 w-4 h-4" :name="iconsEnums.ARROW" />
    </div>
    <ul class="user-drop-down__menu menu relative flex flex-col">
      <li class="menu__item">
        <v-btn
          :color="btnColorsEnums.NEUTRAL"
          :mode="btnModesEnums.LINK"
          :type="btnTypesEnums.LINK"
        />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import {
  VBtnColorsEnums,
  VBtnModesEnums,
  VBtnTypesEnums,
  IconsEnums,
} from '~/enums/common'

import VBtn from '~/components/common/v-btn.vue'

@Component({
  components: {
    VBtn,
  },
})
export default class UserDropDown extends Vue {
  readonly btnColorsEnums = VBtnColorsEnums
  readonly btnModesEnums = VBtnModesEnums
  readonly btnTypesEnums = VBtnTypesEnums
  readonly iconsEnums = IconsEnums
}
</script>

<style lang="scss" scoped></style>

<template>
  <header
    id="header"
    class="header bg-white fixed z-40 top-0 w-full flex items-center justify-between p-2 shadow-md"
  >
    <v-btn
      class="uppercase"
      :color="colorsEnums.PRIMARY"
      :mode="modesEnums.LINK"
      :title="$t('header.name')"
    />
    <user-drop-down v-if="$auth.loggedIn" />
  </header>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

import VBtn from '~/components/common/v-btn.vue'
import UserDropDown from '~/components/common/user-drop-down.vue'
import { ColorsEnums, ModesEnums } from '~/enums/common'

@Component({
  components: {
    VBtn,
    UserDropDown,
  },
})
export default class Header extends Vue {
  readonly colorsEnums = ColorsEnums
  readonly modesEnums = ModesEnums
}
</script>

<style lang="scss" scoped></style>

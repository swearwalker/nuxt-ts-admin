<template>
  <FormulateForm
    class="flex flex-col justify-center w-full md:w-2/3 lg:w-1/2 xl:w-1/4 bg-white shadow-md rounded"
    @submit="login"
  >
    <FormulateInput
      v-model="form.username"
      :label="$t('loginPage.username.label')"
      name="username"
      type="text"
    />
    <FormulateInput
      v-model="form.password"
      :label="$t('loginPage.password.label')"
      name="password"
      type="password"
    />
    <v-btn class="m-2" :title="$t('titles.buttons.login')" color="primary" />
  </FormulateForm>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { LoginFormDto } from '~/types/auth'
import VBtn from '~/components/common/v-btn.vue'

@Component({
  auth: false,
  components: {
    VBtn,
  },
})
export default class LoginForm extends Vue {
  form: LoginFormDto = {
    username: '',
    password: '',
  }

  async login() {
    try {
      await this.$auth.login({ data: this.form })
      await this.$router.push(this.localePath('index'))
    } catch (e) {
      console.error(e.response.data)
    }
  }
}
</script>

<style lang="scss" scoped></style>

<template>
  <div class="login">
    <div class="login-container">
      <van-form @submit="onSubmit">
        <van-cell-group inset>
          <van-field
              v-model="loginForm.userEmail"
              name="邮箱"
              label="邮箱："
              placeholder="请输入邮箱"
              :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <van-field
              v-model="loginForm.usePassword"
              type="password"
              name="密码"
              label="密码："
              placeholder="请输入密码"
              :rules="[{ required: true, message: '请填写密码' }]"
          />
        </van-cell-group>
        <div style="margin: 16px;">
          <van-button round size="large" type="primary" @click="toLogin">登录</van-button>
          <van-button round size="large" type="primary" style="margin-top: 20px" @click="toRegister">注册</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>
<script lang="ts">
import {reactive, onMounted, toRef, toRefs, ref, computed, watch, defineComponent} from 'vue';
import {useRoute, useRouter} from 'vue-router';

export default {
  name: 'login',
  setup() {
    let router = useRouter()
    let route = useRoute()
    let loginForm = reactive({
      userEmail: route.query.email || '',
      usePassword: '',
    })
    let onSubmit = ()=>{
      // console.log('表单校验')
    }
    let toLogin = () => {
      // if(useName.value=='admin'&&usePassword.value=='123456'){
      router.push({path: '/my'})
      // localStorage.setItem('token',obj)
      // let userInfo={
      //   'userName':useName.value,
      // }
      // localStorage.setItem('userInfo',userInfo.toString())
      // }
    }
    let toRegister = () => {
      router.push({path: '/register'})
    }
    return {
      loginForm,
      onSubmit,
      toLogin,
      toRegister,
    }
  },
}
</script>
<style lang="stylus" scoped>
.login-container
  width 100%
  height 300px
  margin 50vw auto
  background white

//border 1px solid black
</style>
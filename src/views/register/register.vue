<template>
  <div class="register">
    <div class="register-container">
      <van-form>
        <van-cell-group inset>
          <van-field
              v-model="registerForm.username"
              required
              label="用户名"
              type="text"
              placeholder="请输入用户名"
          />
          <van-field
              v-model="registerForm.email"
              required
              label="邮箱"
              type="text"
              name="validator"
              placeholder="请输入邮箱"
              :rules="[{ required: validator,message:'邮箱输入不合法'}]"
          >
            <template #button>
              <van-button class="verification" size="mini" type="primary" :disabled="!verificationShow"
                          @click="sendVerification">{{ verificationShow ? '发送验证码' : `${time}s可重新发送` }}
              </van-button>
            </template>
          </van-field>
          <van-field
              v-show="!verificationShow"
              v-model="registerForm.verification"
              required
              label="验证码"
              type="number"
              maxlength="6"
              placeholder="请输入验证码"
          />
          <van-field
              v-model="registerForm.userPass"
              required
              label="密码"
              name="passwordValidator"
              type="password"
              placeholder="请输入密码"
              :rules="[{ required:passwordValidator,message:'最多不能超过18位并不能输入特殊字符'}]"
          />
          <van-field
              v-model="savePassword"
              required
              label="确认密码"
              type="password"
              placeholder="请再次输入密码"
          />
        </van-cell-group>
        <van-button class="signRegister" size="large" type="primary" style="margin-top: 20px" @click="signRegister">立即注册
        </van-button>
      </van-form>
    </div>
  </div>
</template>
<script lang="ts">
import {ref, reactive} from "vue";
import {useRouter} from "vue-router";
import {getSignRegister, getSendVerification} from '@/utils/api'
import {Notify} from "vant";
import {Toast} from 'vant'

export default {
  name: 'register',
  components: {
    [Notify.Component.name]: Notify.Component,
  },
  setup() {
    let router = useRouter()
    let registerForm = reactive({
      username: "",
      userPass: "",
      email: '',
      verification: '',
    });
    let savePassword = ref<string>('')
    //密码邮箱验证
    let passwordValidator = (val: string) => /^((?![\\/:*?<>|'%]).){1,8}$/.test(val)
    let validator = (val: string) => /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(val)
    //验证码倒计时显示
    let verificationShow = ref<boolean>(true)
    let time = ref<number>(60 * 3)
    //注册事件
    let signRegister = () => {
      let bool: boolean = validator(registerForm.email)
      if (registerForm.userPass !== savePassword.value) {
        Toast('两次输入密码不一致')
        return
      } else if (!registerForm.userPass && !savePassword.value) {
        Toast('请输入密码')
        return
      }
      if (bool) {
        getSignRegister(registerForm).then(res => {
          if (res.code === 200) {
            Notify({type: 'success', message: '注册成功'});
            router.push({path: '/login', query: {email: registerForm.email}})
          } else {
            Notify({type: 'danger', message: '您已注册过，现在去登陆'});
            // router.push({path:'/login',query:{email:registerForm.email}})
          }
        })
      }
    }
    //发送验证码
    let sendVerification = () => {
      let bool: boolean = validator(registerForm.email)
      if (bool) {
        getSendVerification(registerForm).then(res => {
          if (res.code == 200) {
            verificationShow.value = false;
            Notify({type: 'success', message: res.msg});
            handleTimeChange()
          }
        })
      } else if (!registerForm.email) {
        Toast('请输入邮箱')
      }
    }
    //倒计时
    const handleTimeChange = () => {
      if (time.value <= 0) {
        verificationShow.value = true;
        time.value = 60 * 3;
      } else {
        setTimeout(() => {
          time.value--;
          handleTimeChange();
        }, 5 * 1000);
      }
    }

    return {
      //验证函数
      passwordValidator,
      validator,
      //变量
      registerForm,
      verificationShow,
      savePassword,
      time,
      // 函数
      signRegister,
      // 发送验证码
      sendVerification,
    }
  }
}
</script>
<style lang="stylus" scoped>
.register
  .register-container
    margin 50vw auto
    background white
    text-align center

    >>> .verification
      border-radius 2vw

    >>> .signRegister
      width 80%
      border-radius 2vw
</style>

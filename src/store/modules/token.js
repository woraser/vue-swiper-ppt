export default {
  state:{
    token:'', // 定义一个token，用来存放后台提供的access_token
    account:''//登录账号
  },
  // getters中可以在获取状态时，再定义一些操作逻辑
  getters:{
    getToken(state){//这里的state对应着上面这个state
      if(state.token == ''){
        state.token = window.localStorage.getItem('token')
      }
      return state.token;
    },
  getAccount(state){//这里的state对应着上面这个state
    if(state.account == ''){
      state.account = window.localStorage.getItem('account')
    }
    return state.account;
  }
  },
  // mutations只用来修改单个状态的变化
  mutations:{
    // 定义一个saveToken方法，注意这个方法名必须在整个vuex中全局唯一
    saveToken(state,token){//这里的state对应着上面这个state
      state.token = token
      window.localStorage.setItem('token',token);
    },
    saveAccount(state,account){//这里的state对应着上面这个state
      state.account = account
      window.localStorage.setItem('account',account);
    },
  },
  // actions中可以聚合多个状态的变化
  actions:{
    saveToken(context,token){//这里的context和我们使用的$store拥有相同的对象和方法
      context.commit('saveToken',token);
      // 假如有需要还可以在这里调用其他mutations方法
    },
    saveAccount(context,account){//这里的context和我们使用的$store拥有相同的对象和方法
      context.commit('saveAccount',account);
      // 假如有需要还可以在这里调用其他mutations方法
    },
  }
}

// import Vue from "vue";
import axios from "axios";
// import VueAxios from "vue-axios";
// Vue.use(VueAxios, axios)

export function requestUser(config) {
  const instance = axios.create({
    baseURL: 'https://www.easy-mock.com/mock/5dea5195b7527b1c3b8631b2/helper',
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return instance(config)
}


const getUserList = requestUser({
  url: 'userlist',
})

export {
  getUserList,
}

/* eslint-disable no-restricted-syntax */
import Axios from 'axios'
import Vue from 'vue'

// Axios.defaults.withCredentials = true
Axios.defaults.timeout = 1000


const baseUrl = 'https://wx.redrock.team/magicloop/menu?token=magicloooooooooop'


export const send = (data) => {
  Axios.patch(baseUrl, data).then((res) => {
    if (res.data.errcode === 0) {
      alert('修改成功')
    } else {
      alert('修改失败')
    }
  })
}

const copy = (obj) => {
  const newObj = {}
  for (const item in obj) {
    newObj[item] = obj[item]
  }
  return newObj
}

const check = (obj) => {
  // eslint-disable-next-line guard-for-in
  for (const key in obj) {
    const test = obj[key].trim()
    if (test === '') {
      return false
    }
  }
  return true
}
Vue.prototype.test = null


Vue.prototype.copy = copy
Vue.prototype.check = check


export const getList = async (that) => {
  try {
    const { data } = await Axios.get(baseUrl , {
      headers:{
        'Content-Type': 'application/json',
      }
    })
    // eslint-disable-next-line no-param-reassign
    Vue.test = data.selfmenu_info
    // eslint-disable-next-line no-param-reassign
    that.data = data
  } catch (error) {
    return
  }
  // eslint-disable-next-line no-param-reassign
  that.meun = Vue.test.button
}

/* eslint-disable no-restricted-syntax */
import Axios from 'axios'
import Vue from 'vue'

Axios.defaults.withCredentials = true
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
  // eslint-disable-next-line guard-for-in
  // eslint-disable-next-line no-restricted-syntax
  // eslint-disable-next-line guard-for-in
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

const initMeun = () => {
  Vue.prototype.copy = copy
  Vue.prototype.check = check
  Vue.prototype.test = {
    button: [
      {
        type: 'click',
        name: '今日歌曲',
        key: 'V1001_TODAY_MUSIC',
      },
      {
        name: '菜单',
        sub_button: {
          list: [
            {
              type: 'view',
              name: '搜索',
              url: 'http://www.soso.com/',
            },
            {
              type: 'view',
              name: '视频',
              url: 'http://v.qq.com/',
            },
            {
              type: 'click',
              name: '赞一下我们',
              key: 'V1001_GOOD',
            },
          ],
        },
      },
    ],
  }
}

export const getList = async (that) => {
  initMeun()
  try {
    const { data } = await Axios.get(baseUrl)
    // eslint-disable-next-line no-param-reassign
    that.test = data.selfmenu_info
    // eslint-disable-next-line no-param-reassign
    that.data = data
  // eslint-disable-next-line no-empty
  } catch (error) {
  }
  // eslint-disable-next-line no-param-reassign
  that.meun = that.test.button
}

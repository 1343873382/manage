import axios from 'axios'

const API = 'https://wx.redrock.team/wxapi/barrage/admin'
const USER_API = `${API}/blacklist`
const SENSITIVE_API = `${API}/sensitive`
const BARRAGE_LUCKY_BAG_API = `${API}/barrage-lucky-bag`
const RANDOM_LUCKY_BAG_API = `${API}/random-lucky-bag`

const addUserToBlackList = async (redid) => {
  const { data } = await axios.post(USER_API, {
    word: redid,
  })

  return data
}

const delUserFromBlackList = async (redid) => {
  const { data } = await axios.delete(USER_API, {
    word: redid,
  })

  return data
}

const addSensitive = async (word) => {
  const { data } = await axios.post(SENSITIVE_API, {
    word,
  })

  return data
}

const delSensitive = async (word) => {
  const { data } = await axios.delete(SENSITIVE_API, {
    word,
  })

  return data
}

const sendRandomLB = async (num) => {
  const { data } = await axios.post(RANDOM_LUCKY_BAG_API, {
    peopleNum: num,
  }, {
    headers: { 'Authorization': `Bearer helloworld!` },
  })

  return data
}

const sendBarrageLB = async (num, word, time) => {
  const [m, s] = time.split(':')
  const duration = parseInt(m, 10) * 60 + parseInt(s, 10)

  const { data } = await axios.post(BARRAGE_LUCKY_BAG_API, {
    peopleNum: num,
    keyword: word,
    duration,
  }, {
    headers: { 'Authorization': `Bearer helloworld!` },
  })

  return data
}

export {
  addUserToBlackList,
  addSensitive,
  delUserFromBlackList,
  delSensitive,
  sendBarrageLB,
  sendRandomLB,
}

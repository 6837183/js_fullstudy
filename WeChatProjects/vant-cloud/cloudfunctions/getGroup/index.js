// 云函数入口文件
const cloud = require('wx-server-sdk')
const env = 'jwk2333-52ved'

cloud.init()
const db = cloud.database({ env })

// 云函数入口函数
exports.main = async (event, context) => {
  return await db.collection('Group').get()
}
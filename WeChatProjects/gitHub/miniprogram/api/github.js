const trendings = () => new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve([{
            repo:'欧巴凯项目'
        }])
    },2000)

})

const getRepo = () => new Promise((resolve,reject)=>{
    const url = 'https://github-trending-api.now.sh/repositories'
    wx.request({
        url,
        data: {},
        method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        // header: {}, // 设置请求的 header
        success: function(res){
            // success
        },
        fail: function() {
            // fail
        },
        complete: function() {
            // complete
        }
    })
})
module.exports = {
    trendings,
    getRepo
}
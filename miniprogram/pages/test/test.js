// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     openid:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   //var let快捷的局部变量 const固定的值
   //for(let i=0; i<5;i++){

   // }
   //console.log(i)
    //const a = 3
    //a = 4
    //定义对象、数组、字符串
   // const obj = {}
   // const arr = []
   // const str = ''
   //关于属性简写
   //const name = 'szz'
   //const person = {
   //name ,
   //  age: 30, 
   //}
    //let _this = this
   //调用云函数
   //回调函数问题用箭头函数解决
    wx.cloud.callFunction({
      name:'login'
    }).then((res) => {
      this.setData({
        openid : res.result.openid
      })
      //console.log(JSON.stringify(res.result))
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
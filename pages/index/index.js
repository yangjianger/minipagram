// pages/index/index.js
//获取全局对象
// const app = getApp()
// console.log(app.globalData.name)

//注册页面
Page({

    /**
    * 页面的初始数据
    */
    data: {
      name: "yjcoder",
      age: 19,
      students: [
          {id: 110, name: "aa", age: 21},
          {id: 111, name: "bb", age: 22},
          {id: 112, name: "cc", age: 23},
      ],
      counter: 0,
      eventList: [],
      pageSize: 30,
      pageLimit: 1
    },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log("onLoad")
    wx.request({
      url: 'https://api.jiguo.com/wxcode/event/geteventlist',
      success: (res) => {
        this.setData({
          eventList: res.data.result,
          
        })
      },
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   * 页面初次渲染完成
   */
  onReady() {
    console.log("onReady")
  },

  /**
   * 生命周期函数--监听页面显示
   * 页面显示出来时，执行
   */
  onShow() {
    console.log("onShow")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
    console.log("onHide")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("onUnload")
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log("onPullDownRefresh")
  },

  /**
   * 页面上拉触底事件的处理函数
   * 页面滚动到底部
   */
  onReachBottom: function () {
    console.log("onReachBottom")
  },

  onPullDownRefresh(){
    console.log("onPullDownRefresh")
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log("onShareAppMessage")
  },

  //监听页面滚动
  onPageScroll: (obj) => {
    console.log(obj)
  },

  /**
   * 监听wxml事件
   */
  //+counter
  incrCounter(){
    let counter = this.data.counter + 1
    this.setData({
      counter: counter
    });
    console.log(this.data.counter)
  },

  handleUserInfo: (evt) => {
    
    console.log(evt.detail.userInfo)
  },

})
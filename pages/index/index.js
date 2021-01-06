// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: "组件传递标题",
    student: {
      age: 18,
      name: "yangjiang"
    },
    counter: 0,
    tabControl: ["衣服", "裤子", "鞋子"],
  },

  increment(ev){
    this.setData({
      counter: this.data.counter+1
    })
    console.log(ev)
  },

  handleControl(ev){
    console.log(ev)
  },

  //修改组件对象数据
  handleClick(ev){
    //获取组件对象
    const mySel = this.selectComponent("#sel-id");
    //修改值
    //不推荐直接操作
    // mySel.setData({
    //   counter: mySel.data.counter + 2
    // });
    //推荐这样
    mySel.updateCounter(5)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
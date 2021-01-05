// pages/index/index.js
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
    },
    //+counter
    incrCounter(){
        let counter = this.data.counter + 1
        this.setData({
          counter: counter
        });
        console.log(this.data.counter)
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
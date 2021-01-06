// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: "xixix"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //这里获取页面参数
    console.log(options)
  },

  /**
   * 页面退出时调用
   */
  onUnload() {

    //页面返回的时候，传递数据
    //1.获取首页的首页面对象
    //getCurrentPages 返回当前所有栈的页面
    const pages = getCurrentPages();
    const home = pages[pages.length - 2]
    //2.调用页面对象的setData
    home.setData({
      name: "jixixi"
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
})
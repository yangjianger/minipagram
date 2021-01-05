//注册小程序示例
App({

  /**
   * 当小程序初始化完成时，执行的函数，这里页面还没生成，会触发 onLaunch（全局只触发一次）
   * 后台存活2小时
   * 一般在这里发送网络请求，获取用户信息等
   */
  onLaunch: function () {
    console.log("初始化完成");

    //异步调用
    // wx.getUserInfo({
    //   success: res => {
    //     console.log(res)
    //   },
    // })

    // setTimeout(() => {
    //   let err = new Error;
    //   throw err;
    // }, 3000);
  },

  /**
   * 小程序界面显示出来之后会执行的函数，会触发 onShow
   */
  onShow: function (options) {

    //这里获取进入小程序的场景值
    //console.log(options)

    console.log("页面显示完成");

    //获取用户信息并且将用户信息传递给后台
    // wx.getUserInfo({
    //   success: res => {
    //     console.log(res)
    //   }
    // })

  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    console.log("小程序隐藏");
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    console.log("当小程序发生脚本错误，或者 api 调用失败时");
  },

  /**
   * 定义全局数据
  */
 globalData: {
   name: "coderWHY"
 }

})

App({

  globalData:{
    token: ""
  },

  login(){
     //登录操作
     wx.login({
      success: res => {
        //1.获取code
        const code = res.code;

        //2.将code 传递给服务器
        /*
        wx.request({
          url: 'url',
          data: {
            code
          },
          success: res => {
            //返回openid
          }
        })
        */

        //保存token 到globalData
        this.globalData.token = "aaa";

        //进行本地存储
        wx.setStorageSync('token', "ccccdddd")

      }
    })
  },

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    
    //1.先从换从中获取是否登录
    const token = wx.getStorageSync('token');
    if(token){
      console.log("已登录")
      return;
    }

    this.login();
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  }
})

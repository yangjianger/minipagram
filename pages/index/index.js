// pages/index/index.js
import network from "../../util/network/network"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: "hahahah"
  },

  handlePushDetail(){
    wx.navigateTo({
      url: '/pages/detail/detail',
    })
  },

  showTocst(){
    wx.showToast({
      title: '你好呀你',
      duration: 2000,
      icon: "loading",
      mask: true,
    })
  },

  showModal(){
    wx.showModal({
      title: "我是标题",
      content: "我是内容我是内容我是内容我是内容",
      success: res => {
        if(res.confirm){
          console.log("点击了确定")
        }else{
          console.log("点击了取消")
        }
      }
    })
  },

  showActionSheet(){
    wx.showActionSheet({
      itemList: ["相册", "拍照"],
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //this.getDataOrigin()

    //使用封装网络请求,防止出现回调地域
    /*
    network.request({
      url: "https://api.jiguo.com/wxcode/event/geteventlist",
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    });
    */

  },

  /**
   * 原生网络请求
   */
  getDataOrigin(){
    /*
    //发送网络请求
    wx.request({
      url: 'https://api.jiguo.com/wxcode/event/geteventlist',
      data: {
        size: 30
      },
      success: res => {
        console.log(res.data)
      },
      fail: err => {
        console.log(err)
      }
    })

    //post
    wx.request({

      url: 'https://api.jiguo.com/wxcode/event/geteventlist',
      data: {},
      method: 'POST',
      success: res => {
        console.log(res.data)
      },
      fail: err => {
        console.log(err)
      },
      complete: ret => {
        //请求完成
        console.log(ret)
      }
    })
    */
  },

  /**
   * 分享
   * @param {}} options 
   */
  onShareAppMessage(options){
    return {
      title: "你好,李银河",
      path: "/pages/about/about",
      imageUrl: "https://s2.jiguo.com/ed590101-e74c-4240-a562-40c09daf5340"
    };
  }
})
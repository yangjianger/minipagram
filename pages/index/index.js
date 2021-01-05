// pages/index/index.js
Page({

    /**
    * 页面的初始数据
    */
    data: {
      imagePath: ""
    },
   
    handleChooseAlbum(){
      //系统api,让用户在相册中悬着图片(或者拍照)
      let _this = this;
      
      wx.chooseImage({
        success: (res) => {
          _this.setData({
            imagePath: res.tempFilePaths[0]
           });
        },
      })
    },

    handleBindInput(ev){
      console.log(ev)
    },

    handleBindScroll(ev){
      console.log(ev)
    },

    handleImageLoad(ev){
      console.log(ev)
    },
})
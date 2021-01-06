// components/my-mslot/my-mslot.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 定义组件的配置选项
  */
  options:{
    //表示可以使用多插槽
    multipleSlots: true
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  },

  /**
   * 监听所在页面的声明周期函数
   */
  pageLifetimes: {
    show(){
      console.log("pageLifetimes-show")
    },
    hide(){
      console.log("pageLifetimes-hide")
    },
    resize(){
      console.log("pageLifetimes-resize")
    }
  },

  //组件声明周期函数
  lifetimes: {
    created(){
      console.log("组件被创建出来")
    },
    attached(){
      console.log("组件被添加到页面")
    },
    ready(){
      console.log("组件被渲染出来")
    },
    moved(){
      console.log("组件被移动到另外一个节点")
    },
    detached(){
      console.log("组件被移除")
    }
  }

})

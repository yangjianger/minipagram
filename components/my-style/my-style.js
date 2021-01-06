// components/my-style/my-style.js
Component({

  //希望页面css 影响组件样式
  options:{
    styleIsolation: "apply-shared"
  },

  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    title: "标题",
    content: "内容"
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})

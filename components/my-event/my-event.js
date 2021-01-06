// components/my-event/my-event.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

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
    handleIncrement(){
      //调用父级事件
      this.triggerEvent("increment", {age: 18, name: "hahah"}, {})
    }
  }
})

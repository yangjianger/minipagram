// components/my-tab-control/my-tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabControl: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    tabIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleControl(ev){
      this.setData({
        tabIndex: ev.currentTarget.dataset.itemIndex
      })
      
      //给父元素发送事件
     // this.triggerEvent("handleControl", {index: ev.currentTarget.dataset.itemIndex, item: ev.currentTarget.dataset.item}, {})
      this.triggerEvent("handleControl", {index: ev.currentTarget.dataset.itemIndex, item: this.properties.tabControl[this.data.tabIndex]}, {})
    }
  }
})


Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    value: {
      type: String,
      value: '提 交',
    },
    disable: {
      type: Boolean,
      value: false
    }
  },
  data: {
  },
  methods: {
    // 这里是一个自定义方法
    submit: function(){
      if (!this.data.disable) this.triggerEvent('tapEvent');
    }
  },
  ready: function () {
    
  }
})

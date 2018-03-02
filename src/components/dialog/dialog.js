Component({
  data: {
    // 弹窗显示控制
    isShow: false
  },
  properties: {
    title: {
      type: String,
      value: '标题'
    },
    content: {
      type: String,
      value: '弹窗内容'
    },
    cancelText: {
      type: String,
      value: '取消'
    },
    confirmText: {
      type: String,
      value: '确定'
    }
  },
  methods: {
    // 隐藏弹框
    hideDialog() {
      this.setData({
        isShow: !this.data.isShow
      })
    },
    // 展示弹框
    showDialog() {
      this.setData({
        isShow: !this.data.isShow
      })
    },
    // 触发取消回调
    _cancelEvent() {
      this.triggerEvent("cancelEvent")
    },
    // 触发成功回调
    _confirmEvent() {
      this.triggerEvent("confirmEvent");
    }
  }
})
Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    timer: {
      type: Number,
      value: 5,
    }
  },
  data: {
    // 这里是一些组件内部数据
    stop: true,
    mytimer: 5,
    Interval: null,
  },
  methods: {
    // 这里是一个自定义方法
    start: function() {
      if (this.data.stop) { 
         this.triggerEvent("getvalidate", _ => this.startTime())
      }
    },
    update: function() {
      if (this.data.mytimer <= 1) {
         this.setData({
            // 重置计数
             mytimer: this.properties.timer,
             // 清除计时器
             Interval: null,
             // 允许启动倒计时
             stop: true
         });
      } else {
         let t = --this.data.mytimer;
         this.setData({
             // 倒计时
             mytimer: t
         });
      }
    },
    startTime: function() {
        // 我不明白为什么小程序不支持传入函数。而必须这样做
        // 不仅这里如此，其实也不能将本组件的函数传到外部去？
        let val = setInterval(_ => this.update(), 1000);
        this.setData({
              // 开始循环执行update函数
              Interval: val,
              // 禁止启动倒计时
              stop: false
        });
    }
  },
  ready: function () {
    this.data.mytimer = this.properties.timer;
  }
})

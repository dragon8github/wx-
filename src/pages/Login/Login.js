
Page({
  /**
   * 页面的初始数据
   */
  data: {
      username: '',
      userError: '',
      pwd: '',
      pwdError: '',
      disable: true
  },

  usernamekeyup: function (v) {
      this.setData({
          // 由于是通过triggerEvent触发的事件，所以返回值是一个事件类型的参数。detail才是我们的值
          username: v.detail
      });
      this.isDisable()
  },

  pwdkeyup: function (v) {
      this.setData({
          pwd: v.detail
      });
      this.isDisable()
  },

  isDisable: function () {
    console.log(this.data.username, this.data.pwd, this.data.username !== '' && this.data.pwd !== '')
    if (this.data.username !== '' && this.data.pwd !== '') {
      this.setData({
          disable: false
      })
    } else {
      this.setData({
          disable: true
      });
    }
  },

  cleartext: function () {
      this.setData({
          username: ''
      });
  },

  eyeclick: function (e) {
      this.setData({
          pwdeye: this.data.pwdeye === 'close' ? 'open' : 'close',
          pwdType: this.data.pwdType === 'password' ? 'text' : 'password'
      });
  },

  go: function () {
      console.log(this.data.username, this.data.pwd);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
      this.userfield = this.selectComponent("#userfield");
      this.pwdfield = this.selectComponent("#pwdfield");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})

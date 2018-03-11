
Page({
  /**
   * 页面的初始数据
   */
  data: {
      username: '',
      userError: '',
      pwd: '',
      pwdeye: 'close',
      pwdType: 'password'
  },

  usernamekeyup: function (v) {
      this.setData({
          username: v.detail
      });
  },

  pwdkeyup: function (v) {
      this.setData({
          pwd: v.detail
      });
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

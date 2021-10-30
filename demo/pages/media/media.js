// pages/media/media.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {
        id:"123",
        title:'第一个视频',
        videoUrl:'https://www.bilibili.com/video/BV1i4411c7dU?p=21&spm_id_from=pageDriver'
      },
      {
        id:'456',
        title:'第二个视频',
        videoUrl:'https://www.bilibili.com/video/BV1i4411c7dU?p=21&spm_id_from=pageDriver'
      },
      {
        id:'789',
        title:'第三个视频',
        videoUrl:'https://www.bilibili.com/video/BV1i4411c7dU?p=21&spm_id_from=pageDriver'
      }
    ]

  },
playVideo:function(e){
  this.videoCtx.stop()
//停止播放之前正在播放的视频
  this.setData({
  src:e.currentTarget.dataset.url
})
//更新视频地址
  this.videoCtx.play()
//播放新的视频
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   this.videoCtx=wx.createVideoContext('myVideo')
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
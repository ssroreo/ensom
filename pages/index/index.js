// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    comment:[
      {
        id:1,
        comment:'helloworld'
      },
      {
        id:2,
        comment:'你好'
      },
      {
        id: 3,
        comment: '你好\n你好啊\n12345678901234567890123456789012345678901234567890contentEditable\
        你好\n你好啊\n12345678901234567890123456789012345678901234567890contentEditable\
        你好\n你好啊\n12345678901234567890123456789012345678901234567890contentEditable'
      },
      {
        id: 4,
        comment: '12345678901234567890123456789012345678901234567890'
      }, {
        id: 5,
        comment: 'helloworld'
      },
      {
        id: 6,
        comment: '你好'
      },
      {
        id: 7,
        comment: '你好\n你好啊\n12345678901234567890123456789012345678901234567890contentEditable\
        你好\n你好啊\n12345678901234567890123456789012345678901234567890contentEditable\
        你好\n你好啊\n12345678901234567890123456789012345678901234567890contentEditable'
      },
      {
        id: 8,
        comment: '12345678901234567890123456789012345678901234567890'
      }, {
        id: 9,
        comment: 'helloworld'
      },
      {
        id: 10,
        comment: '你好'
      },
      {
        id: 11,
        comment: '你好\n你好啊\n12345678901234567890123456789012345678901234567890contentEditable\
        你好\n你好啊\n12345678901234567890123456789012345678901234567890contentEditable\
        你好\n你好啊\n12345678901234567890123456789012345678901234567890contentEditable'
      },
      {
        id: 12,
        comment: '12345678901234567890123456789012345678901234567890'
      },
    ]
  },

  aboutTap(){
    wx.navigateTo({
      url: '../about/index',
    })
  },

  commentTap(){
    wx.navigateTo({
      url: '../comment/index',
    })
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
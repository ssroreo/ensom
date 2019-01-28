// pages/index/index.js
var gItems = [];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    comment:[],
    refresh:'stoprefresh'
  },

  refreshTap(){
    var that = this;
    that.setData({
      refresh: 'playrefresh'
    });
    setTimeout(function(){
      that.setData({
        refresh: 'stoprefresh'
      });
      that.onShow();
    },1000);
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
    var that = this;
    wx.request({
      url: 'http://pokerin.top/ensom_server_war/ShowComment',
      header: {
        'content-type': 'application/json;charset=gbk' // 默认值
      },
      success(res) {
        console.log(res.data);
        for (var i = 0; i < 5;i++){
          gItems[i] = res.data.comment[i];
          that.setData({
            comment: gItems
          });
        }
      }
    });
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
    console.log("reach");
    wx.showNavigationBarLoading();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
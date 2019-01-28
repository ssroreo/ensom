// pages/comment/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    textareaVal: '',       // textarea的文本值
    min:5,
    max:2000,
    currentWordNumber:0,
    texts: '至少5个字',
    show: 0,
    btndisable:false,
    publishresult:'发布成功',
    backgroundcolor:'green'
  },

  publish() {
    if (!this.data.show) {
      let that = this;
      this.setData({
        show: 1
      })
      setTimeout(function () {
        that.setData({
          show: 0
        })
      }, 2000)
    }
  },

  textarea: function (e) {
    var value = e.detail.value;
    var len = parseInt(value.length);
    if (len >= this.data.min && len != this.data.max){
      this.setData({
        texts: ""
      })
    } else if (len < this.data.min){
      this.setData({
        texts: "至少5个字"
      })
    } else{
      this.setData({
        texts: "最多输入2000个字"
      })
    }
    this.setData({
      textareaVal: value,
      currentWordNumber: len
    })
  },

  submitText:function(){
    var that = this;
    var value = that.data.textareaVal;
    var len = parseInt(value.length);
    if(len<5) {
      that.setData({
        backgroundcolor:"red",
        publishresult: '发布失败，最少输入5个字！'
      });
      that.publish();
      return;
    }
    else {
      console.log(that.data.textareaVal);
      that.setData({
        backgroundcolor: "green",
        publishresult: '发布成功'
      });
      that.publish();
      that.setData({
        btndisable:true
      });
      setTimeout(function(){
        wx.request({
          url: 'https://pokerin.top/ensom_server_war/CommentController',
          data: {
            comment: that.data.textareaVal
          },
          header: {
            'content-type': 'application/json;charset=gbk' // 默认值
          },
          success(res) {
            console.log(res.data)
          }
        });
        wx.navigateBack({

        })
      },1000);
      
    }
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
    that.setData({
      btndisable: false,
      publishresult:"发布成功",
      backgroundcolor:"green"
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
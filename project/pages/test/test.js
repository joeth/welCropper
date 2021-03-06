// pages/test/test.js

const device = wx.getSystemInfoSync()
const W = device.windowWidth
const H = device.windowHeight - 50

Page({
    data: {
        path:'',
        isShowCropper: false,
        size: {
            width: 100,
            height: 100,
        },
        item: {
            x: 22,
            y: 22,
        },
        length: 50,
    },
    onLoad: function (options) {
    },
    tapHandler: function () {
        this.setData({
            size:{
                width: 300,
                height: 300,
            }
        })
    },
    selectImage:function(){
        var z = this
        wx.chooseImage({
            count:1,
            success: function(res) {
                var path = res.tempFilePaths[0]
                if(path) {
                    z.setData({
                        path:path,
                        isShowCropper:true
                    })
                }
                else {
                    wx.showModal({
                        title: '',
                        content: 'no path',
                    })
                }
            },
        })
    }
})

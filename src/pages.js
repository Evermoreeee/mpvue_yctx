module.exports = [
  {
    path: 'pages/index' // 页面路径，同时是 vue 文件相对于 src 的路径
  }, {
    path: 'pages/counter',
    config: { // 页面配置，即 page.json 的内容
      navigationBarTitleText: '查看启动日志',
      enablePullDownRefresh: true,
      usingComponents: {
        'van-row': '../../dist/row/index',
        'van-col': '../../dist/col/index'
      }
    }
  }, {
    path: 'packageA/logs',
    subPackage: true,
    
  }
]


var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/hot/hot","pages/ucenter/ucenter","pages/search/search","pages/list/list","pages/categories/categories","pages/article/article","pages/about/about","pages/wodeintegral/wodeintegral","pages/jifenxiangqing/jifenxiangqing","pages/personalData/personalData","pages/login/login","pages/viewhtml/viewhtml","pages/webview/webview","pages/verify/verify","pages/logout/logout"],"window":{"backgroundTextStyle":"light","navigationBarBackgroundColor":"#E6321D","navigationBarTitleText":"WeChat","navigationBarTextStyle":"white","backgroundColor":"#F7F7F7","backgroundColorTop":"#F7F7F7","backgroundColorBottom":"#F7F7F7"},"tabBar":{"color":"#bfbfbf","selectedColor":"#e6372f","backgroundColor":"#FFFFFF","list":[{"pagePath":"pages/categories/categories","text":"学习","iconPath":"/static/images/tabbar/xuexi_gray.png","selectedIconPath":"/static/images/tabbar/xuexi_active.png"},{"pagePath":"pages/index/index","text":"首页","iconPath":"/static/images/tabbar/index_gray.png","selectedIconPath":"/static/images/tabbar/index_active.png"},{"pagePath":"pages/ucenter/ucenter","text":"我的","iconPath":"/static/images/tabbar/my_gray.png","selectedIconPath":"/static/images/tabbar/my_active.png"}]},"networkTimeout":{"request":10000,"connectSocket":10000,"uploadFile":10000,"downloadFile":10000},"darkmode":false,"nvueCompiler":"uni-app","nvueStyleCompiler":"weex","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"jiangqie_xcx_free","compilerVersion":"3.99","entryPagePath":"pages/index/index"};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"首页","navigationStyle":"custom","onReachBottomDistance":50}},{"path":"/pages/hot/hot","meta":{},"window":{"navigationBarTitleText":"热榜","onReachBottomDistance":50}},{"path":"/pages/ucenter/ucenter","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"我的","backgroundColorTop":"#DA2A1A","navigationBarBackgroundColor":"#DA2A1A","backgroundColorBottom":"#DA2A1A","onReachBottomDistance":50}},{"path":"/pages/search/search","meta":{},"window":{"navigationBarTitleText":"搜索"}},{"path":"/pages/list/list","meta":{},"window":{"navigationBarTitleText":"...","onReachBottomDistance":50}},{"path":"/pages/categories/categories","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"文章分类"}},{"path":"/pages/article/article","meta":{},"window":{"navigationBarTitleText":"文章详情","onReachBottomDistance":50}},{"path":"/pages/about/about","meta":{},"window":{"navigationBarTitleText":"关于我们"}},{"path":"/pages/wodeintegral/wodeintegral","meta":{},"window":{"navigationBarTitleText":"我的积分","navigationBarBackgroundColor":"#fbaf6b"}},{"path":"/pages/jifenxiangqing/jifenxiangqing","meta":{},"window":{"navigationBarTitleText":"积分明细","navigationBarBackgroundColor":"#fbaf6b"}},{"path":"/pages/personalData/personalData","meta":{},"window":{"navigationBarTitleText":"个人信息","navigationBarBackgroundColor":"#fbaf6b"}},{"path":"/pages/login/login","meta":{},"window":{"navigationBarTitleText":"","navigationBarBackgroundColor":"#DA291A"}},{"path":"/pages/viewhtml/viewhtml","meta":{},"window":{"navigationBarTitleText":"..."}},{"path":"/pages/webview/webview","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/verify/verify","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/logout/logout","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
import React,{Component} from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import '../style/common/TopBar.css'



const navs = [
  {name: '小米商城', sourceUrl: 'http://www.mi.com/index.html'},
  {name: 'MIUI', sourceUrl: 'http://www.miui.com/'},
  {name: '米聊', sourceUrl: 'http://www.miliao.com/'},
  {name: '游戏', sourceUrl: 'http://game.xiaomi.com/'},
  {name: '多看阅读', sourceUrl: 'http://www.duokan.com/'},
  {name: '云服务', sourceUrl: 'https://i.mi.com/'},
  {name: '小米网移动版', sourceUrl: 'http://www.mi.com/c/appdownload/'},
  {name: '问题反馈', sourceUrl: 'http://static.mi.com/feedback/'},
  {name: 'Select Region', sourceUrl: 'http://www.mi.com/index.html'}
]

class TopBar extends Component{

    constructor(props){
      super(props)

    }



    render(){
      return(
        <header className="top-container">
          <div className="container" >
            <ul className="topbar-nav" >
              {navs.map( (val,index) => {
                  return ( <li key={index} >< a  href={ val.sourceUrl } > { val.name } </a><span className="sep" > { index === navs.length - 1 ? '' : '|'  } </span></li> )
              } )}
            </ul>
            <div className="topbar-cart" >
              <a href="#">
                <i className="iconfont" ></i>
                购物车
                <span>(0)</span>
              </a>
              <ReactCSSTransitionGroup
                  transitionName="example"
                  transitionEnterTimeout={500}
                  transitionLeaveTimeout={300}
                >
                <div className="cart-menu" >
                  <div className="loading" >
                  购物车中还没有商品，赶紧选购吧！
                  </div>
                </div>
              </ReactCSSTransitionGroup>
            </div>
            <div className="topbar-info" >
              <a href="http://order.mi.com/site/login?redirectUrl=http://www.mi.com/index.html">登录</a>
              <span className="sep"  >|</span>
              <a href="https://account.xiaomi.com/pass/register">注册</a>
              <span className="sep" >|</span>
              <a href="#" >信息通知</a>
            </div>
          </div>
        </header>
      )

    }
}



export default TopBar

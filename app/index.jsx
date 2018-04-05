import React from 'react'
import { render } from 'react-dom'
// import {BrowserRouter as Router, Route, Link} from "react-router-dom";
// import Header from "./container/Header";
// import Foot from  "./container/Foot"
// import RouterMap from  "./router/routerMap"
// import fn from "./redux.js";
// fn()

// import './static/css/common.less'


import {Provider} from "react-redux";
import configureStore from "./store/configureStore"
import Hello from "./container/Hello"

// class Hello extends React.Component {   
//     render() {
//         var name="张三";
//         return (
//             <div>
               
               
//                 <RouterMap  />
//                 {/*<Header/>*/}
//             </div>
            

//         )
//     }
    
// }
const store = configureStore()

render(
    <Provider store={store}>
        <Hello/>
    </Provider>,
    document.getElementById('root')
)

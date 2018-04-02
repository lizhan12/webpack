import React from 'react'
import { render } from 'react-dom'
// import {BrowserRouter as Router, Route, Link} from "react-router-dom";
// import Header from "./container/Header";
// import Foot from  "./container/Foot"
import RouterMap from  "./router/routerMap"

// import './static/css/common.less'


class Hello extends React.Component {
    
    render() {
        var name="张三";
        return (
            <div>
               
               
                <RouterMap  />
                {/*<Header/>*/}
            </div>
            

        )
    }
    
}

render(
    <Hello/>,
    document.getElementById('root')
)

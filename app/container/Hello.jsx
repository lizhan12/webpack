import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as userinfoActions from "../actions/userinfo"

import A from "../component/A"
import B from "../component/B"
import C from "../component/C"

class Hello extends React.Component{

   render(){
      return (
            <div>
               <p>Hello World</p>
               <hr/>
               <A userinfo={this.props.userinfo}></A>
               <hr/>
               <B userinfo={this.props.userinfo}></B>
               <hr/>
               <C actions={this.props.userinfoActions}></C>
            </div>
         )
   }
   componentDidMount(){
      this.props.userinfoActions.login({
         userid:"122344",
         city:"北京"
      })
   }
   

}

function mapStateToProps(state) {
      return{
         userinfo:state.userinfo
      }
   }
   function mapDispatchToProps(dispatch) {
      return {
         userinfoActions:bindActionCreators(userinfoActions,dispatch)
      }
   }

export default connect(
   mapStateToProps,
   mapDispatchToProps
   )(Hello)

import React from 'react'
import { connect } from "react-redux";
import { setInfo } from "../redux/actions/main";

function Todo() {
    return (
        <div>
            this is todo component
        </div>
    )
}
 
const mapStateToProps = state =>({
    userInfo: state.main
})
   
const mapDispatchToProps = {
    setInfo: setInfo
}
  
  export default connect(mapStateToProps, mapDispatchToProps)(Todo); 
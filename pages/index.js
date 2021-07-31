import React, {useState} from 'react'; 
import Layout from "./components/layout"; 
import { connect } from "react-redux";
import { setInfo } from "../redux/actions/main"; 
import styles from '../styles/globals.module.scss'

const Home = (props) => {

  const  {userInfo, setInfo}  = props; 

  const [name, setName] = useState("");

  return (
    <Layout>
    <div className={styles.hello}> hello home  {userInfo.name}</div>  
      <input name="name" value={name} onChange={(e)=>{setName(e.target.value)}} />
      <button onClick={()=>setInfo(name)}> Set info</button>
    </Layout>
  )
}

const mapStateToProps = state =>({
  userInfo: state.main
})
 
const mapDispatchToProps = {
  setInfo: setInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(Home); 
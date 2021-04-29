import React, { useEffect, useState } from "react"
import all_dreams from '../../img/alldreams.png';
import ADream from "./ADream";
import { connect } from 'react-redux';
import { DispatchDreamType, DreamState } from "../../react-app-env";
import axios from "axios";

const AllDreams = () => {
  const [ data, setData ] = useState([]);
  
  // TODO: Handle this request with Redux
  useEffect(() => {
    axios.get('https://dreamsapi.herokuapp.com/dreams')
    .then((res) => {
      setData(res.data)
    })
    .catch(err => {console.log(err)});
  }, [])

  return (
    <div className='main-all-dreams'>
      <h1>List of Dreams</h1>
      <div className="all-dreams">
        {
          data ? data.map((obj: any) => {
            return <ADream {...obj} key={Math.random() * 99} />
          }) : 
          <div className='loading'>Loading...</div>
        }
      </div>
      <div className="main-home-picture">
        <img src={all_dreams} /> 
      </div>
    </div>
  )
}

// const mapStateToProps = (state: any) => {
//   return {
//     dreams: state.dreams
//   }
// }

// const mapDispatchToProps = (dispatch: DispatchDreamType) => {
//   return {
//     getDreams: () => {
//       dispatch(getDreams())
//     }
//   }
// }

export default AllDreams
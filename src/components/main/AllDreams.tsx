import all_dreams from '../../img/alldreams.png';
import ADream from "./ADream";
import { connect, useDispatch } from 'react-redux';
import { DreamState, IDream } from "../../react-app-env";
import { useEffect, useState } from 'react';
import { getDreams, requestFailed } from '../../redux/dreams/dreamActionCreator';
import axios from 'axios';

const AllDreams = ({ dreams, loading} : any) => { 
  const [ search, setSearch ] = useState('0');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDreams())
  }, [])

  const handleDelete = () => {
    axios.delete('/')
      .then((res) => {
        //console.log(res.data)
        dispatch(getDreams())
      })
      .catch((err) => {
        dispatch(requestFailed(err))
      })
  }
  
  return (
    <div className='main-all-dreams'>
      <h1>List of Dreams</h1>
      <div className="dream-details-buttons">
        <button onClick={handleDelete}>Delete All Dreams</button>
      </div>

      {/* <div className="search-dreams">
        <label htmlFor="search">Search dreams by type: </label>
        <select name="type" id="type" onChange={(e) => setSearch(e.target.value)}>
          <option value='0'>Search...</option>
          <option value='happy'>Happy</option>
          <option value='sad'>Sad</option>
          <option value='exciting'>Exciting</option>
          <option value='scary'>Scary</option>
        </select>
      </div> */}

      <div className="all-dreams">
        {
        loading ? 
          <div className='loading'>Loading...</div> :
          dreams.length != 0 ? 
            dreams.map((obj: IDream) => {
              return <ADream key={obj._id} {...obj} />
            }) :
          <div className='error'>
            Dream log empty
          </div> 
        }
      </div>
      <div className="main-home-picture">
        <img src={all_dreams} /> 
      </div>
    </div>
  )
}

const mapStateToProps = (state:DreamState) => {
  return {
    dreams: state.data,
    loading: state.loading
  }
}

export default connect(mapStateToProps)(AllDreams)
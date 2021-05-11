import all_dreams from '../../img/alldreams.png';
import ADream from "./ListOfDreams";
import { connect, useDispatch } from 'react-redux';
import { DreamState, IDream } from "../../react-app-env";
import { useEffect } from 'react';
import { anyDreamRequest, anyDreamRequestResult, getDreams } from '../../redux/dreams/dreamActionCreator';
import axios from 'axios';
import { API } from '../..';
import Search from './Search';

const AllDreams = ({ dreams, filteredData, loading} : any) => { 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDreams())
  }, [])

  const handleDelete = () => {
    let warningBeforeDelete = window.confirm('Are you sure you want to delete a dream?')

    warningBeforeDelete &&
    axios.delete(API)
      .then((res) => {
        dispatch(anyDreamRequestResult(res.data.message))
        dispatch(getDreams())
      })
      .catch((err) => {
        dispatch(anyDreamRequestResult(err))
      })
  }
  
  return (
    <div className='main-all-dreams'>
      <h1>List of Dreams</h1>
      <div className="dream-details-buttons">
        <button onClick={handleDelete}>Delete All Dreams</button>
      </div>

      <Search />

      <div className="all-dreams">
        {
        loading ? 
          <div className='loading'>Loading...</div> :
          dreams.length != 0 &&  filteredData.length === 0 ? 
            dreams
            .sort((first:any, second:any) => {
              // Converting string to date
              let a = new Date(first.date)
              let b = new Date(second.date)
              
              // Sorting by date dreamt
              return b.getDate() - a.getDate()
            })
            .map((obj: IDream) => {
              return <ADream key={obj._id} {...obj} />
            }) : 
          filteredData.length !== 0 ? 
          filteredData.map((obj: IDream) => {
            return <ADream key={obj._id} {...obj} />
          }) :
          <div className='error'>
            Dream log empty
          </div> 
        }
      </div>
      <div className="main-home-picture">
        <img src={all_dreams} alt='' /> 
      </div>
    </div>
  )
}

const mapStateToProps = (state:DreamState) => {
  return {
    dreams: state.data,
    filteredData: state.filteredData,
    loading: state.loading
  }
}

export default connect(mapStateToProps)(AllDreams)
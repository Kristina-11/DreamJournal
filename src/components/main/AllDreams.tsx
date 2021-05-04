import all_dreams from '../../img/alldreams.png';
import ADream from "./ADream";
import { connect, useDispatch } from 'react-redux';
import { DreamState, IDream } from "../../react-app-env";
import { useEffect } from 'react';
import { getDreams } from '../../redux/dreams/dreamActionCreator';

const AllDreams = ({ dreams, loading} : any) => { 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDreams())
  }, [])

  return (
    <div className='main-all-dreams'>
      <h1>List of Dreams</h1>
      <div className="dream-details-buttons">
        <button>Delete All Dreams</button>
      </div>
      <div className="all-dreams">
        {
        loading ? 
          <div className='loading'>Loading...</div> :
          dreams.length != 0 ? dreams.map((obj: IDream) => {
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
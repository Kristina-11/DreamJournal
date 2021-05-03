import { useEffect } from "react"
import all_dreams from '../../img/alldreams.png';
import ADream from "./ADream";
import { useDispatch, useSelector } from 'react-redux';
import { DreamState, IDream } from "../../react-app-env";
import { getDreams } from "../../redux/dreams/dreamActionCreator";

const AllDreams = () => { 
  const dreams = useSelector((state: DreamState) => state.data);
  const loading = useSelector((state: DreamState) => state.loading);
  const error = useSelector((state: DreamState) => state.error);

  return (
    <div className='main-all-dreams'>
      <h1>List of Dreams</h1>
      <div className="all-dreams">
        {
        loading ? 
          <div className='loading'>Loading...</div> :
        error ? <div className='error'>{error }</div> :
          dreams && dreams.map((obj: IDream) => {
            return <ADream key={obj._id} {...obj} />
          })
        }
      </div>
      <div className="main-home-picture">
        <img src={all_dreams} /> 
      </div>
    </div>
  )
}

export default AllDreams
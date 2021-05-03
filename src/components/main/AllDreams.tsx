import { useEffect } from "react"
import all_dreams from '../../img/alldreams.png';
import ADream from "./ADream";
import { useDispatch, useSelector } from 'react-redux';
import { DreamState } from "../../react-app-env";
import { getDreams } from "../../redux/dreams/dreamActionCreator";

const AllDreams = () => { 
  const dreams = useSelector((state: DreamState) => state.data);
  const loading = useSelector((state: DreamState) => state.loading);
  const error = useSelector((state: DreamState) => state.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDreams())
  }, [])

  return (
    <div className='main-all-dreams'>
      <h1>List of Dreams</h1>
      <div className="all-dreams">
        {
        loading ? 
          <div className='loading'>Loading...</div> :
        error ? <div className='error'>{error }</div> :
          dreams && dreams.map((obj: any) => {
            return <ADream {...obj} key={Math.random() * 99} />
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
import { useState } from "react"
import all_dreams from '../../img/alldreams.png';
import ADream from "./ADream";

const AllDreams = (props:unknown) => {
  const [data, setData] = useState([
    { id: '1', title: 'Dream 1', description: 'Lorem ipsum something easy', date: '12/12/2020', type: 'sad' },
    { id: '2', title: 'Dream 2', description: 'Lorem ipsum something easy', date: '12/12/2020', type: 'sad' },
    { id: '3', title: 'Dream 3', description: 'Lorem ipsum something easy', date: '12/12/2020', type: 'sad' },
    { id: '4', title: 'Dream 4', description: 'Lorem ipsum something easy', date: '12/12/2020', type: 'sad' }
  ]);

  console.log(props)
  return (
    <div className='main-all-dreams'>
      <h1>List of Dreams</h1>
      <div className="all-dreams">
        {
          data ? data.map(obj => {
            return <ADream {...obj} key={obj.id} />
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

export default AllDreams

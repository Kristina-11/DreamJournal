import { Link } from "react-router-dom"
import { IDream } from "../../react-app-env"

// Short data to show on screen
const ADream = (obj: IDream) => {
  return (
    <div className='dream'>
      <Link to={`/dreams/${obj._id}`}>
        <h2>
          {obj.title}
        </h2>
      </Link>
      <p>{obj.date}</p>
    </div>
  )
}

export default ADream

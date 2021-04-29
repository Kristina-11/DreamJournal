import { Link } from "react-router-dom"
import { IDream } from "../../react-app-env"

const ADream = (obj: IDream) => {
  console.log(obj)
  return (
    <div className='dream'>
      <Link to={`/dreams/${obj.id}`}>
        <h2>
          {obj.title}
        </h2>
      </Link>
      <p>{obj.date}</p>
    </div>
  )
}

export default ADream

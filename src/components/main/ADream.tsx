import { Link } from "react-router-dom"

interface parameters {
  id: string | number,
  title: string,
  description: string,
  date: string,
  type: string
}

const ADream = (obj: parameters) => {
  return (
    <div className='dream'>
      <h2>
        <Link to={`/dreams/${obj.id}`}>{obj.title}</Link>
      </h2>
      <p>{obj.date}</p>
    </div>
  )
}

export default ADream

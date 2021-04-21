import { useParams } from "react-router-dom"

const ADream = () => {
  interface parameters {
    id: string
  }
  const { id }:parameters = useParams();

  return (
    <div className='main-dream'>
      <h1>{ id }</h1>
    </div>
  )
}

export default ADream

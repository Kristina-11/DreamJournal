import { useParams } from "react-router-dom"

interface parameters {
  id:  string
}

const DreamDetails = () => {
  const { id }:parameters = useParams();

  return (
    <div className='dream-details'>
      <h2></h2>
    </div>
  )
}

export default DreamDetails

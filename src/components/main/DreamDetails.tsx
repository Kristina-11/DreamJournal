import { connect, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router";
import { IDream } from "../../react-app-env";
import adream from '../../img/adreama.png';
import { getDreams, postRequestSuccess, requestFailed, requestSuccess } from '../../redux/dreams/dreamActionCreator';
import axios from "axios";
import { useEffect } from "react";

// TODO: Move this to react-app-env.d.ts
type dreamParam = {
  id: string
}

const DreamDetails = ({ dreams }: any) => {
  const { id } = useParams<dreamParam>();
  const data = dreams.data;
  const loading = dreams.loading;
  const error = dreams.error;

  let dispatch = useDispatch();
  let history = useHistory();

  useEffect(() => {
    dispatch(getDreams())
  }, [])

  const dream = data.filter(( d:IDream ) => d._id === id);

  const dreamTypes = (number: number) => {
    switch(number) {
      case 0:
        return 'Happy'

      case 1: 
        return 'Sad'

      case 2:
        return 'Exciting'

      case 3: 
        return 'Scary'

      default:
        return 'Error'
    }
  }

  const handleDelete = (id: string) => {
    axios.delete(`https:/dreamsapi.herokuapp.com/dreams/${id}`)
    .then((res) => {
      history.push('/dreams')
    })
    .catch((err) => {
      dispatch(requestFailed(err))
    })
  }

  return (
    <div className='dream-details'>
      {
        loading ? 
          <div className='loading'>Loading...</div> :
          error ? <div className='error'> { error }</div> :
          <>
            <h1>{dream[0].title}</h1>
            <h3>{dream[0].date}</h3>

            <div className="dream-details-description">
              {dream[0].description}
            </div>

            <div className="dream-details-type">
              <p>Type of dream: </p>
              { 
                dreamTypes(dream[0].type)
              }
            </div>

            <div className="dream-details-buttons additional">
              <button>Edit</button>
              <button onClick={() => handleDelete(dream[0]._id)}>Delete</button>
            </div>
          </>
      }
      <div className="main-home-picture details-picture">
        <img src={adream} /> 
      </div>
    </div>
  )
}

// NOTE: Used mapState cause of useSelector not re-rendering
// unless changed property
const mapStateToProps = (state: IDream) => {
  return {
    dreams: state
  }
}

export default connect(mapStateToProps)(DreamDetails)

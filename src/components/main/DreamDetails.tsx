import { connect } from "react-redux";
import { useParams } from "react-router";
import { IDream } from "../../react-app-env";
import adream from '../../img/adreama.png';

// TODO: Move this to react-app-env.d.ts
type dreamParam = {
  id: string
}

const DreamDetails = ({ dreams }: any) => {
  const { id } = useParams<dreamParam>();
  const data = dreams.data;
  const loading = dreams.loading;
  const error = dreams.error;

  const dream = data.filter(( d:IDream ) => d._id === id);

  const dreamTypes = (number: number) => {
    switch(number) {
      case 0:
        return 'Happy'
        break;

      case 1: 
        return 'Sad'
        break;

      case 2:
        return 'Exciting'
        break;

      case 3: 
        return 'Scary'
        break;

      default:
        return 'Error'
    }
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

            <div className="dream-details-buttons">
              <button>Edit</button>
              <button>Delete</button>
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

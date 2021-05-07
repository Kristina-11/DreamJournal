import { connect, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router";
import { IDream } from "../../react-app-env";
import adream from '../../img/adreama.png';
import { getDreams, postRequestSuccess, requestFailed } from '../../redux/dreams/dreamActionCreator';
import { useEffect, useState } from "react";
import { API } from "../../axios";

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

  let dispatch = useDispatch();
  let history = useHistory();

  // TODO: Fix the states for dream objects
  // On refresh data is not loaded
  const [ update, setUpdate ] = useState(false);
  const [ title, setTitle ] = useState(dream[0].title);
  const [ description, setDescription ] = useState(dream[0].description);
  const [ date, setDate ] = useState(dream[0].date);
  // TODO: Fix updating of a type
  const [ type, setType ] = useState(dream[0].type);

  useEffect(() => {
    dispatch(getDreams())
  }, [])

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
    API.delete(`dreams/${id}`)
    .then((res) => {
      console.log(res)
      history.push('/dreams')
    })
    .catch((err) => {
      console.log(err)
      dispatch(requestFailed(err))
    })
  }

  const handleEdit = () => {
    setUpdate(true)
  }

  const updateFields = (id:string) => {
    let dream:object = {
      title,
      date,
      description
    }

    API.patch(`dreams/${id}`, dream)
      .then((res) => {
        dispatch(postRequestSuccess(res.data.message))
        setUpdate(false)
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
          ( !update ? 
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
              <button onClick={() => handleEdit()}>Edit</button>
              <button onClick={() => handleDelete(id)}>Delete</button>
            </div>
          </> : 
          <div className='all-dreams dream-form'>
            <div className="form-items">
              <label htmlFor="title">Title:</label>
              <input type='text' placeholder={dream[0].title} onChange={(e) => setTitle(e.target.value)} />
            </div>

            <div className="form-items">
              <label htmlFor="date">Date:</label>
              <input type="date" placeholder={dream[0].date} onChange={(e) => {setDate(e.target.value)}} />
            </div>

            <div className="form-items">
              <label htmlFor='description'>Description</label>
              <input type="text" placeholder={dream[0].description} onChange={(e) => setDescription(e.target.value)} />
            </div>

            <div className="form-items">
              <p>Type of dream: </p>
              { 
                dreamTypes(dream[0].type)
              }
            </div>

            <div className="dream-details-buttons additional">
              <button onClick={() => updateFields(dream[0]._id)}>Done</button>
            </div>
          </div> )
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

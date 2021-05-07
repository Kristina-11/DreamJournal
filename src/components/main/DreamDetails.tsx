import { connect, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router";
import { IDream } from "../../react-app-env";
import adream from '../../img/adreama.png';
import { deleteADreamRequest, deleteADreamSuccess, getDreams, postRequestSuccess, requestFailed } from '../../redux/dreams/dreamActionCreator';
import { useEffect, useState } from "react";
import axios from "axios";
import { API } from "../..";

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
  const [ type, setType ] = useState(dream[0].type);
  const [ message, setMessage ] = useState('');

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
    dispatch(deleteADreamRequest())
    axios.delete(API + `/${id}`)
    .then((res) => {
      dispatch(deleteADreamSuccess(res.data))
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
    let typeNum:number = parseInt(type)
    console.log(typeNum)

    let dream:object = {
      title,
      date,
      description,
      type: typeNum
    }
    console.log(dream)

    axios.patch(API + `/${id}`, dream)
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
              <select name="type" id="type" onChange={(e) => setType(e.target.value)}>
                <option value=''>Choose</option>
                <option value='0'>Happy</option>
                <option value='1'>Sad</option>
                <option value='2'>Exciting</option>
                <option value='3'>Scary</option>
              </select>
            </div>

            <div className="dream-details-buttons additional">
              <button onClick={() => updateFields(id)}>Done</button>
            </div>
          </div> )
      }
      <div className='message'>
        { message }
      </div>
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

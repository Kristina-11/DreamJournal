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
  const loading = dreams.loading;
  //const message = dreams.message;
  
  const [ update, setUpdate ] = useState(false);
  const [ title, setTitle ] = useState('');
  const [ description, setDescription ] = useState('');
  const [ date, setDate ] = useState('');
  const [ type, setType ] = useState<any>();

  // Getting one dream
  useEffect(() => {
    axios.get(API + `/${id}`)
    .then((res) => {
      setTitle(res.data.title)
      setDescription(res.data.description)
      setDate(res.data.date)
      setType(res.data.type)
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])

  let dispatch = useDispatch();
  let history = useHistory();

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
          ( !update ? 
          <> 
            <h1>{ title }</h1>
            <h3>{ date }</h3>

            <div className="dream-details-description">
              { description }
            </div>

            <div className="dream-details-type">
              <p>Type of dream: </p>
              { 
                dreamTypes(type)
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
              <input type='text' placeholder={ title } onChange={(e) => setTitle(e.target.value)} />
            </div>

            <div className="form-items">
              <label htmlFor="date">Date:</label>
              <input type="date" placeholder={ date } onChange={(e) => {setDate(e.target.value)}} />
            </div>

            <div className="form-items">
              <label htmlFor='description'>Description</label>
              <input type="text" placeholder={ description } onChange={(e) => setDescription(e.target.value)} />
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
        {/* { message } */}
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

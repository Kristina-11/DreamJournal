import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { API } from '../..';
import add_dream from '../../img/adddreams.png';
import { DispatchDreamType } from '../../react-app-env';
import { anyDreamRequest, anyDreamRequestResult } from '../../redux/dreams/dreamActionCreator';

const AddADream = () => {
  const [ title, setTitle ] = useState('');
  const [ description, setDescription ] = useState('');
  const [ date, setDate ] = useState('');
  const [ type, setType ] = useState('');
  const [ message, setMessage ] = useState('');

  let dispatch: DispatchDreamType = useDispatch();

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(anyDreamRequest())

    if (type === '') {
      return setMessage('You have to choose type of dream!')
    }

    let dream: object = {
      title,
      description,
      date,
      type
    }

    axios.post(API, dream)
    .then((res) => {
      setMessage(res.data)
      dispatch(anyDreamRequestResult(res.data.message))

      setTitle('')
      setDescription('')
      setDate('')
      setType('')
    })
    .catch((err) => {
      setMessage('Request to the server failed :(')
      dispatch(anyDreamRequestResult(err))
    })
  }

  return (
    <div className='main-add-dream'>
      <h1>Add A Dream</h1>
      <div className='all-dreams dream-form'>
        <form onSubmit={handleSubmit}>
          <div className='form-items'>
            <label htmlFor='title'>Title</label>
            <input type="text" name="title" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required/>
          </div>

          <div className='form-items'>
            <label htmlFor='description'>Description</label>
            <input type="text" name="description" id="description" value={description} onChange={(e) => setDescription(e.target.value)} required/>
          </div>

          <div className='form-items'>
            <label htmlFor='date'>Date</label>
            <input type='date' name="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} required/>
          </div>

          <div className='form-items'>
            <label htmlFor='type'>Type of dream</label>
            <select name="type" id="type" onChange={(e) => setType(e.target.value)} required>
              <option value=''>Choose...</option>
              <option value='happy'>Happy</option>
              <option value='sad'>Sad</option>
              <option value='exciting'>Exciting</option>
              <option value='scary'>Scary</option>
            </select>
          </div>

          <div className="dream-details-buttons">
              <button>Add a Dream</button>
            </div>
        </form>

        <div className="message">
          { message }
        </div>
      </div>

      <div className="main-home-picture">
        <img src={add_dream} /> 
      </div>
    </div>
  )
}

export default AddADream

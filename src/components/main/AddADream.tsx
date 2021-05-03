import { useState } from 'react';
import { useHistory } from 'react-router';
import add_dream from '../../img/adddreams.png';
import { IDream } from '../../react-app-env';
import { postADream } from '../../redux/dreams/dreamActionCreator';

const AddADream = () => {
  const [ title, setTitle ] = useState('');
  const [ description, setDescription ] = useState('');
  const [ date, setDate ] = useState('');
  const [ type, setType ] = useState('');

  const history = useHistory();

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const dream: object = {
      title,
      description,
      date,
      type
    }
    
    postADream(dream);
    //history.push('/dreams');
  }

  return (
    <div className='main-add-dream'>
      <h1>Add A Dream</h1>
      <div className='all-dreams dream-form'>
        <form onSubmit={handleSubmit}>
          <div className='form-items'>
            <label htmlFor='title'>Title</label>
            <input type="text" name="title" id="title" onChange={(e) => setTitle(e.target.value)} required/>
          </div>

          <div className='form-items'>
            <label htmlFor='description'>Description</label>
            <input type="text" name="description" id="description" onChange={(e) => setDescription(e.target.value)} required/>
          </div>

          <div className='form-items'>
            <label htmlFor='date'>Date</label>
            <input type='date' name="date" id="date" onChange={(e) => setDate(e.target.value)} required/>
          </div>

          <div className='form-items'>
            <label htmlFor='type'>Type of dream</label>
            <select name="type" id="type" onChange={(e) => setType(e.target.value)} required>
              <option value='happy'>Happy</option>
              <option value='sad'>Sad</option>
              <option value='exciting'>Exciting</option>
              <option value='scary'>Scary</option>
            </select>
          </div>

          <button>Add A Dream</button>
        </form>

        <div className="message">

        </div>
      </div>

      <div className="main-home-picture">
        <img src={add_dream} /> 
      </div>
    </div>
  )
}

export default AddADream

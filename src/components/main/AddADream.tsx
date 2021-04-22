import { useState } from 'react';
import add_dream from '../../img/adddreams.png';

const AddADream = () => {
  const [ title, setTitle ] = useState('');
  const [ description, setDescription ] = useState('');
  const [ date, setDate ] = useState('');
  const [ type, setType ] = useState('');

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(title, description, date, type);
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
              <option value='0'>Choose</option>
              <option value='Happy'>Happy</option>
              <option value='Sad'>Sad</option>
              <option value='Exciting'>Exciting</option>
              <option value='Scary'>Scary</option>
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

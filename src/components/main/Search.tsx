import { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { DreamState, IDream } from "../../react-app-env";
import { getDreams, searchType } from '../../redux/dreams/dreamActionCreator';

const Search = ({ dreams }: any) => {
  const [ search, setSearch ] = useState('');
  const [ message, setMessage ] = useState('');

  const dispatch = useDispatch();
  const type:number = parseInt(search)

  const searched = dreams.filter((d:IDream) => parseInt(d.type) === type)
  
  // Checking if type of dream exists
  const checkIfDreamTypeExists = (type:string, arr: []) => {
    let dreamType:string;

    switch(type) {
      case '0':
        dreamType = 'Happy'
        break

      case '1': 
        dreamType = 'Sad'
        break

      case '2':
        dreamType = 'Exciting'
        break

      case '3': 
        dreamType = 'Scary'
        break

      default:
        dreamType = ''
        break
    }

    if (type !== '' && arr.length === 0) {
      setMessage(`There are none ${dreamType} dreams.`);
    }
  }

  const findSelectedTypeOfDream = () => {
    if (search !== '') {
      dispatch(searchType(searched))
      setMessage('')
    } else {
      dispatch(getDreams())
      // Resets filtered state to empty array
      dispatch(searchType([])) 
      setMessage('')
    }
  }

  useEffect(() => {
    // Search based on dropdown selection
    findSelectedTypeOfDream();
    checkIfDreamTypeExists(search, searched);
  },[search])


  return (
    <div className="search-dreams">
      <label htmlFor="search">Search dreams by type: </label>
      <select name="type" id="type" onChange={(e) => setSearch(e.target.value)}>
        <option value=''>All dreams...</option>
        <option value='0'>Happy</option>
        <option value='1'>Sad</option>
        <option value='2'>Exciting</option>
        <option value='3'>Scary</option>
      </select>
      <div className="message">
        { message }
      </div>
    </div>
  )
}

const mapStateToProps = (state:DreamState) => {
  return {
    dreams: state.data
  }
}

export default connect(mapStateToProps)(Search)

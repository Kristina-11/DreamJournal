import { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { DreamState, IDream } from "../../react-app-env";
import { getDreams, searchType } from '../../redux/dreams/dreamActionCreator';

const Search = ({ dreams }: any) => {
  const [ search, setSearch ] = useState('');
  const dispatch = useDispatch();
  const type:number = parseInt(search)

  const searched = dreams.filter((d:IDream) => parseInt(d.type) === type)

  useEffect(() => {
    if (search !== '') {
      dispatch(searchType(searched))
    } else {
      dispatch(getDreams())
      dispatch(searchType([]))
    }
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
    </div>
  )
}

const mapStateToProps = (state:DreamState) => {
  return {
    dreams: state.data
  }
}

export default connect(mapStateToProps)(Search)

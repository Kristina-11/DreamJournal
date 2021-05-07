import { useState } from "react";
import { connect } from "react-redux";
import { DreamState } from "../../react-app-env";

const Search = ({ dreams }: any) => {
  const [ search, setSearch ] = useState('0');

  return (
    <div className="search-dreams">
      <label htmlFor="search">Search dreams by type: </label>
      <select name="type" id="type" onChange={(e) => setSearch(e.target.value)}>
        <option value='0'>Search...</option>
        <option value='happy'>Happy</option>
        <option value='sad'>Sad</option>
        <option value='exciting'>Exciting</option>
        <option value='scary'>Scary</option>
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

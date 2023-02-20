import React, { useContext, useRef, useState } from "react";
import {Data} from './Home';
import {GooglePlay, Search} from 'react-bootstrap-icons';
import {Link} from 'react-router-dom';

const Navbar = () => {
  const {getVal} = useContext(Data);
  const [val, setVal] = useState();
  const valRef = useRef();

  const handleInputEnter = (e) => {
    if (e.code === 'Enter') {
        getVal(valRef.current.value);
    }
}
  
  return (
      <nav className="navbar" style={{background:"purple"}}>
        <div className="container-fluid">
          <Link to="/" className="navbar-brand"><GooglePlay color="white" size={30}/></Link>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search Movie"
              aria-label="Search"
              onChange={e => setVal(e.target.value)}
              value={val}
              ref={valRef}
              onKeyUp={handleInputEnter}
            />
            <button className="btn btn-danger " type="button" onClick={() => {getVal(valRef.current.value); setVal('')} }>
            <Search size={30}/>
            </button>
          </form>
        </div>
      </nav>
  );
};

export default Navbar;
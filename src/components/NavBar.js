import React from 'react'
import {Link} from "react-router-dom";

const NavBar=() =>
{
    // const work=()=>{
    //     alert("Great work");
    // }
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg bg-dark" data-bs-theme="dark" style={{height: '70px'}}>
            <div className="container-fluid">
                <img src={'logo_news.png'} style={{width:'70px',height:'30px'}}/>
                <Link className="navbar-brand mx-3" to="/">News-Wave</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    {/* <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li> */}
                    <li className="nav-item"><Link className="nav-link" to="/">General</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
                </ul>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
                {/* <button onClick={()=>work()}>do work</button> */}
            </div>
        </nav>
      </div>
    )
}
export default NavBar;
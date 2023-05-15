import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css';
const Home = () => {
  return (
    <div className='container'>
            <div className='col-md-6 mx-auto'>
                <h1 style={{textAlign:'center'}}>Contact Management App</h1>
            </div>
        <div className='row'  >
            {/* <div className='col-md-12 my-5' style={{textAlign:'center'}}>
                <Link to="/add" className="btn btn-outline-dark">Create Contact</Link>
            </div> */}
            <div  className='col-md-12 my-5' style={{textAlign:'center'}} >
                <Link to="/contact" className='btn btn-outline-dark'style={{textAlign:'right'}} >Contact Details</Link>
            </div>
            <div  className='col-md-12 my-5' style={{textAlign:'center'}} >
                <Link to="/ChartPage" className='btn btn-outline-dark'style={{textAlign:'right'}} >Charts and Map</Link>
            </div>
        </div>

    </div>
  )
} 

export default Home
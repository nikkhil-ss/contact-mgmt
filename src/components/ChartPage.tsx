import { Link } from "react-router-dom";


const ChartPage = () => {
 
  return (
    <div>
      <div  className='col-md-12 my-5' style={{textAlign:'center'}} >
                <h1>World wide data of cases:</h1>
                <Link to="/chartCovid" className='btn btn-outline-dark'style={{textAlign:'right'}} >Click For Graph</Link>
            </div>
      <div  className='col-md-12 my-5' style={{textAlign:'center'}} >
            <h1>Graph data for cases with date:</h1>
                <Link to="/CovidTime" className='btn btn-outline-dark'style={{textAlign:'right'}} >Click For Graph</Link>
            </div>
      <div  className='col-md-12 my-5' style={{textAlign:'center'}} >
        <h1>Country Specific data of cases:</h1>
                <Link to="/covidworld" className='btn btn-outline-dark'style={{textAlign:'right'}} >Click For Graph</Link>
            </div>
    </div>
    
  );
};

export default ChartPage;

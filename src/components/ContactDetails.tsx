import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const ContactDetails = () => {
    const contacts:any=useSelector(state=>state);
    const isEmpty = Object.keys(contacts).length === 0;

    const dispatch =useDispatch();    
    const deleteContact=(id:any)=>{
        dispatch({type:"DELETE", payload: id});
        toast.success("Contact deleted Successfully");
    }

  if(!isEmpty){  
  return (
    
   <div className='col-md-6 mx-auto my-5'>
      
    <table className='table table-hover'>
        <thead className='text-white bg-dark text-center'>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Number</th>
                <th scope="col">Action</th>
               
            </tr>
        </thead>
        <tbody>
            {
                contacts.map((contact: any, id: any)=>(
                        <tr key={id}>
                            <td >{id+1}</td>
                            <td>{contact.name}</td>
                            <td>{contact.email}</td>
                            <td>{contact.number}</td>
                            <td style={{display:"flex",justifyContent:"space-around"}}>
                                <Link to={`/edit/${contact.id}`} className='btn btn-small btn-primary mr-2'>Update</Link>
                                <button type="button" onClick={()=>deleteContact(contact.id)} className='btn btn-small btn-danger'>Delete</button>
                                    
                            </td>

                        </tr>
                ))
            }
        </tbody>
    </table>
    <div className='col-md-12 my-5' style={{textAlign:'center'}}>
                <Link to="/add" className="btn btn-outline-dark">Create Contact</Link>
            </div>
    <div className='col-md-12 my-5' style={{textAlign:'center'}}>
                <Link to="/" className="btn btn-outline-dark">HomePage</Link>
            </div>
    
   </div>
  )
}
else{
    return(
        <>
        <h1>Contact Book is Empty! </h1>
        <div className='col-md-12 my-5' style={{textAlign:'center'}}>
                <Link to="/add" className="btn btn-outline-dark">Create Contact</Link>
            </div>
            </>
    )
}
}

export default ContactDetails;
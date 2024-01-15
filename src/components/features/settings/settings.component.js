import React, { useEffect,useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useSelector, useDispatch } from 'react-redux'
import store from './../../../store'
import {updateUser} from './../../../actions/auth-actions'


const Settings = (props) => {
   const [userData,setUserData] = useState({});
   const data = store.getState().authReducer.user;
   const dispatch = useDispatch();
   useEffect(() => {
    
   setUserData({
    firstname : store.getState().authReducer.user.firstname,
    lastname : store.getState().authReducer.user.lastname,
    password : store.getState().authReducer.user.token,
   })
},[]);

const inputsHandler = (e) =>{
    setUserData({ ...userData, [e.target.name]: e.target.value });
}

const saveData = (e) =>{
dispatch(updateUser(userData))

}

  
    return (
      <>
        
  
        <Modal show={props.show} onHide={props.close}>
          <Modal.Header closeButton>
            <Modal.Title>Settings</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <form id="formAuthentication" className="mb-3" action="index.html" method="POST">
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Firstname</label>
          <input type="text" className="form-control" id="username" name="firstname" onChange={inputsHandler}  value={userData.firstname} placeholder="Enter your username"  />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Lastname</label>
          <input type="text" className="form-control"  value={userData.lastname} id="lastname" name="lastname" onChange={inputsHandler} placeholder="Enter your email" />
        </div>
        <div className="mb-3 form-password-toggle">
          <label className="form-label" htmlFor="password">Password</label>
          <div className="input-group input-group-merge">
            <input type="password" id="password"  value={userData.token} className="form-control" name="password" onChange={inputsHandler} placeholder="············" aria-describedby="password" />
            <span className="input-group-text cursor-pointer"><i className="bx bx-hide" /></span>
          </div>
        </div>
        
      </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={props.close}>
              Close
            </Button>
            <Button variant="primary" onClick={saveData}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  


  export default Settings;
/* eslint-disable react/prop-types */

import { useState } from "react";







const Model = ({modelOpen,onClose}) => {
    const [reason,setReason]=useState('')
    const handleReasonChange = (event) => {
        setReason(event.target.value);
    };
    
    return (
        <div>
          <div className="modal"onClick={()=>modelOpen(true)}>
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>Reason for Decline</h2>
                <textarea 
                    value={reason} 
                    onChange={handleReasonChange} 
                    rows="4" 
                    cols="50">
                </textarea>
                <button type='submit'>Submit</button>
            </div>
        </div>
        </div>
    );
};

export default Model;
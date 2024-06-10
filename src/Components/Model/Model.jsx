/* eslint-disable react/prop-types */









const Model = ({onClose,children}) => {

   
    
    return (
        <div>
           <div className="modal-overlay flex justify-center">
      <div className="modal-content">
        {children}
        <button onClick={onClose} className="btn btn-outline">close</button>
      </div>
    </div>
        </div>
    );
};

export default Model;
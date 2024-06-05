/* eslint-disable react/prop-types */

import {
  Dialog,
 
  DialogTitle,
  DialogPanel,

} from '@headlessui/react'


const Model = ({setIsOpen, isOpen}) => {
  
    return (
        <div>
             <button onClick={() => setIsOpen(true)}>Open dialog</button>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
            <DialogTitle className="font-bold">Decline reason</DialogTitle>
           
            <textarea
            
              className="textarea textarea-accent h-24"
            
              placeholder=""
             
            ></textarea>
            <div className="flex gap-4  ">
            <button  className='btn btn-outline'>Submit</button>
              <button onClick={() => setIsOpen(false)}  className='btn btn-outline '>post</button>
              {/* <br />
              <button onClick={() => setIsOpen(false)}>post</button> */}
            </div>
          </DialogPanel>
        </div>
      </Dialog>
  
        </div>
    );
};

export default Model;
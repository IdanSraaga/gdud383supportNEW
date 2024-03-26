import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css'; // Import the default styles
import '../styles/ScrollingTextCss.css';
import Swal from 'sweetalert2';
import ReactDOM from 'react-dom';
import SLA from './SLA';

const openModal = () => {
  console.log("Click!");
  // Customize based on the button number
  let content = <SLA />;
  // Open SweetAlert modal
  Swal.fire({
    
    title: "חדשות מתפרצות",
    html: '<div id="swal-content"></div>',
    showCloseButton: true,
    showCancelButton: false,
    showConfirmButton: false,
    focusConfirm: false,
    
  
    didOpen: () => {
      // Render your component inside the SweetAlert2 modal
      const swalContent = document.getElementById('swal-content');
      const component = content;
      ReactDOM.render(component, swalContent);
    },
  });
};
const ScrollingText = () => {
  return (

          <div >
            <div className="ScrollingText" id="scroll-text" onClick={openModal()}>
              This is scrolling text.<br />
              This is scrolling text.<br />
              This is scrolling text.<br />
              This is scrolling text.
            </div>
          </div>
          
  );
};

export default ScrollingText;

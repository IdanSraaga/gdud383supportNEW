import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css'; // Import the default styles
import '../styles/ScrollingTextCss.css';

const ScrollingText = () => {
  return (
      <div>
      <Popup
        trigger={
          <div>
            <div className="ScrollingText" id="scroll-text">
              This is scrolling text.<br />
              This is scrolling text.<br />
              This is scrolling text.<br />
              This is scrolling text.
            </div>
          </div>
          
        }
        modal
        nested
        contentStyle={{
          maxWidth: '600px',
          width: '80%',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        {(close) => (
          <div className="modal">
            <button className="close" onClick={close}>
              &times;
            </button>
            <br/>
            This is scrolling text.<br />
              This is scrolling text.<br />
              This is scrolling text.
          </div>
        )}
      </Popup>
    </div>
  );
};

export default ScrollingText;

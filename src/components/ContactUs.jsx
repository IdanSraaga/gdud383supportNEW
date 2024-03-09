// Box.js
import React from 'react';
import '../styles/ContactUsCss.css'
const ContactUs = () => {
  return (
    <div style={{overflow:'hidden'}}>
        <table className="phone-contact-ways" style={{paddingBottom:"5px"}}>
            <thead>
                <tr>
                <th style={{width:'50%',fontSize:'20px'} }>אדום</th>
                <th style={{width:'50%',fontSize:'20px'}}>מרכזייה</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style={{fontSize:'18px'}}>681-2677</td>
                    <td style={{fontSize:'18px'}}>03-5698383</td>
                </tr>
                <tr>
                    <td>או</td>
                    <td>או</td>
                </tr>
                <tr>
                    <td style={{fontSize:'18px'}}>681-2682</td>
                    <td style={{fontSize:'18px'}}>0302-8383</td>
                </tr>
            </tbody>  
            
        </table>
        <hr style={{borderTop: '1px solid #000000',width:'100%'}}/>
        <table className="phone-contact-ways">
            <thead>
                <tr>
                <th>מייל</th>
                <th>וואצאפ</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td >Ctrl + K <br/> משוב תקשוב</td>
                <td>052-4381785</td> 
                </tr>


                
                <tr>
                <td >(r03830010)</td>
                <td>משוב תקשוב</td>
                </tr>
            </tbody>  
        </table>

        
    </div>
  );
};

export default ContactUs;
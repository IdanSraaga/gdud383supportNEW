import React from "react";
import Nav from"../components/CenteredNav"
import { StepLabel } from '@mui/material';
import Test from '../components/Test'
import '../styles/RequestsPage.css'

const RequestsPage = () => {
    return(
        <div className="requests-body">
            <Nav/>
            <div className="requests-container">
                <div style={{width:"100%"}}><Test/></div>
            </div>
        </div>
        
    );
};
export default RequestsPage;
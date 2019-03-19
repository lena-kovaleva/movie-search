import React from 'react';
import './Loader.scss';

const Loader = ({loading}) => {
    if (loading==true) {
        return(
            <div className="loader">
                <div className="spinner">
                    <div className="circle1"></div>
                    <div className="circle2"></div>
                </div>
                <div className="spinner">
                    <div className="circle1"></div>
                    <div className="circle2"></div>
                </div>
                <div className="spinner">
                    <div className="circle1"></div>
                    <div className="circle2"></div>
                </div>
            </div>
        )
    }
    else return(
        <React.Fragment></React.Fragment>
    )
}

export default Loader;
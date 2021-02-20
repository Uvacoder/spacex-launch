import React from 'react';
import './Spinner.css'
import loadingGif from './preloader.gif'

const Spinner = () => {
    return (
        <div className="backdrop">
            <img className='loader' src={loadingGif} alt="loading" />
        </div>
    );
}

export default Spinner; 
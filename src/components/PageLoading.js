import React from 'react';
import loader from './images/preloader.gif'


function PageLoading() {
    console.log('Loading');
    return (
    <div id="loading">
        <img src={loader} alt="" />
    </div>
  );
}

export default PageLoading;

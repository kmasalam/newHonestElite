import React from 'react';

function Loader({...allprops}) {

    const {loaderType} = allprops;
    if(loaderType == 'component'){
        return (
            <div>
                Component is Loading..
            </div>
        );
    }
    
}

export default Loader;
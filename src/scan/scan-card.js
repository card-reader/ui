import React from 'react';
 
class ScanCard extends React.Component{
    render(){
        //todo: we need to add an event handler
        return (
            <section>
                <input type="file" accept="image/*" id="fileUpload"  />
            </section>
        );  
    }
}

export default ScanCard;
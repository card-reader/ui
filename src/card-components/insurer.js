import React from 'react';

class Insurer extends React.Component{
    render(){
        return (
            <section id="insurerSection">
                <div>
                    <label for="name">Insurer Name</label>
                    <input name="name" type="text" readOnly="true" value=""/>
                </div>
                <div>
                    <label for="phone">Insurer Phone #</label>
                    <input name="phone" type="tel" readOnly="true" value=""/>
                </div>
                <div>
                    <label for="type">Insurer Type</label>
                    <input name="type" type="text" readOnly="true" value=""/>
                </div>
            </section>
        );
    }
}

export default Insurer;
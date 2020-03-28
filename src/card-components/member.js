import React from 'react';


class Member extends React.Component{
    render(){
        return (
            <section id="memberSection">
                <div>
                    <label for="name">Member Name</label>
                    <input name="name" type="text" readOnly="true" value=""/>
                </div>
                <div>
                    <label for="number">Member #</label>
                    <input name="number" type="text" readOnly="true" value=""/>
                </div>
            </section>
        );
    }
}

export default Member;
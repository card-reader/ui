import React from 'react';
import Insurer from  '../card-components/insurer';
import Member from  '../card-components/member';

class DisplayCard extends React.Component{

    render(){
        return (
              <section id="displaycard">
                  <Insurer />
                  <Member />
              </section>  

        );
    }
}

export default DisplayCard;
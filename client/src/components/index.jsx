import React, { Component } from 'react';
import { render } from 'react-dom';
import Character from './character';
import Enemy from './enemy';

document.body.style.backgroundColor = 'grey';

export default class Main extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        //console.log(<Enemy />)
        return (
            <div>
                <h1 style={{ 
                    textAlign: 'center', 
                    backgroundColor: 'black', 
                    color: 'white', 
                    padding: '20px',
                    marginTop: 0,
                    }}>Test</h1>
                    <h6></h6>
                <div className='arena' id='arena' style={{
                    border: '1px solid gray',
                    backgroundColor: 'white',
                    //backgroundImage: `url(${background3})`,
                    backgroundSize: 'cover',
                    maxWidth: '1000px',
                    height: '500px',
                    textAlign: 'center',
                    margin: 'auto',
                }}>
                    <Character />
                    <Enemy />
                </div>
            </div>
        )
    }
};
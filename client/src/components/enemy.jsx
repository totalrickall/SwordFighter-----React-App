import React, { Component } from 'react';
import { r_arm_and_weapon, l_arm_and_weapon } from './arm_and_weapon';
import { positions } from './positions';

export default class Enemy extends Component {
  constructor(props) {
    super(props);

    this.state = {
      horizontal: -400,
      vertical: 399,
      swordSwap: 'right',
    };

    this.positions = positions.bind(this);
    this.r_arm_and_weapon = r_arm_and_weapon.bind(this);
    this.l_arm_and_weapon = l_arm_and_weapon.bind(this);
  };

  componentWillMount() {
    document.addEventListener("keydown", this.onKeyDown.bind(this));
    document.addEventListener("keyup", this.onKeyUp.bind(this));
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeyDown.bind(this));
    document.removeEventListener("keyup", this.onKeyUp.bind(this));
  }

  onKeyUp(e) {
    let changeX = this.positions()[8];
    if (changeX < 0) this.setState({ swordSwap: 'left' });
    if (changeX > 0) this.setState({ swordSwap: 'right' });
    // this.setState({
    //   fired: !this.state.fired,
    //   attack: false,
    //   forceBlock: false,
    // });
  };

  onKeyDown(e) {
    //console.log(e.keyCode)
  };

  enemyWeapon() {
    let blade_color = 'red';
    let arm_color = 'black';
    let classAdd = 'enemy-';

    if (this.state.swordSwap === 'right') {
      return this.l_arm_and_weapon(blade_color, arm_color, classAdd);
    }
    if (this.state.swordSwap === 'left') {
      return this.r_arm_and_weapon(blade_color, arm_color, classAdd);
    }
  }

  enemy() {
    //console.log('ENEMY:', `x: ${this.state.horizontal}px`, `y: ${this.state.vertical}px`);
    let robe_color = 'black';
    let skin_color = '#FFA07A'
    let hair_color = 'black';

    return (
      <div id='enemy' style={{
        height: '50px',
        width: '10px',
        backgroundColor: `${robe_color}`,
        borderRadius: '100%',
        position: 'relative',
        right: `${this.state.horizontal}px`,
        top: `${this.state.vertical}px`,
      }}
        tabIndex="0"
      >
        <div id='face' style={{
          position: 'relative',
          backgroundColor: `${skin_color}`,
          height: '13px',
          width: '10px',
          bottom: '2px',
          borderRadius: '50%',
        }}>
          <div id='hair' style={{
            position: 'relative',
            backgroundColor: `${hair_color}`,
            height: '5px',
            width: '10px',
            borderRadius: '50%',
          }}></div>
        </div>
        {this.enemyWeapon()}
      </div>
    );
  };

  render() {
    return this.enemy();
  };
};
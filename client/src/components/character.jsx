import React, { Component } from 'react';
import { render } from 'react-dom';
import { r_arm_and_weapon, l_arm_and_weapon, sheathedLeft, sheathedRight, forceBlock } from './arm_and_weapon';
import { bladeToEnemy, positions, charCoords, arenaCoords, character_position_arena } from './positions';

export default class Character extends Component {

  constructor(props) {
    super(props);

    this.state = {
      horizontal: -500,
      vertical: 449,
      status: 'alive',
      fired: false,
      forceBlock: false,
      attack: false,
      swordSwap: 'right',
      unSheathed: true,
    }
    this.verticalSpeed = 15;
    this.horizontalSpeed = 20;

    this.bladeToEnemy = bladeToEnemy.bind(this);
    this.positions = positions.bind(this);
    this.charCoords = charCoords.bind(this);
    this.arenaCoords = arenaCoords.bind(this);
    this.character_position_arena = character_position_arena.bind(this);
    this.r_arm_and_weapon = r_arm_and_weapon.bind(this);
    this.l_arm_and_weapon = l_arm_and_weapon.bind(this);
    this.sheathedLeft = sheathedLeft.bind(this);
    this.sheathedRight = sheathedRight.bind(this);
    this.forceBlock = forceBlock.bind(this);
  }

  componentWillMount() {
    document.addEventListener("keydown", this.onKeyDown.bind(this));
    document.addEventListener("keyup", this.onKeyUp.bind(this));
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeyDown.bind(this));
    document.removeEventListener("keyup", this.onKeyUp.bind(this));
  }

  moveUp() {
    let character = document.getElementById('character');
    let oneFlip = 180;
    let twoFlip = 210;
    let threeFlip = 250;
    
    let x = 0;
    if (this.state.swordSwap === 'right') {
      let interval = setInterval(() => {
        x++;
        let heightChange = (-0.1 * x * (x - 75));
        let spin = (-0.1 * x * (x - oneFlip));
        character.style.top = this.state.vertical - heightChange + 'px';
        if (character.style.top <= '360px') {
          character.style.transform = `rotate(-${spin}deg)`;
        }
        if (x >= 75) clearInterval(interval);
      }, 20);
    };
    if (this.state.swordSwap === 'left') {
      let interval = setInterval(() => {
        x++;
        let heightChange = (-0.1 * x * (x - 75));
        let spin = (-0.1 * x * (x - oneFlip));
        character.style.top = this.state.vertical - heightChange + 'px';
        if (character.style.top <= '360px') {
          character.style.transform = `rotate(${spin}deg)`;
        }
        if (x >= 75) clearInterval(interval);
      }, 20);
    };
  }

  moveDown() {
    let character = document.getElementById('character');
   if(character.style.top <= '360px') this.setState({ forceBlock: true })
  }

  moveRight() {
    let character = document.getElementById('character');
    let x = 0;
    if (this.state.horizontal >= -900) {
      let interval = setInterval(() => {
        x++;
        this.state.horizontal += -5;
        character.style.right = this.state.horizontal + 'px';
        if (x >= 10) clearInterval(interval);
      }, 20);
    } else if (this.state.horizontal <= -900 && this.state.horizontal >= -980) {
      let interval = setInterval(() => {
        x++;
        this.state.horizontal += -1;
        character.style.right = this.state.horizontal + 'px';
        if (x >= 10) clearInterval(interval);
      }, 20);
    } else {
      return;
    }
  }

  moveLeft() {
    let character = document.getElementById('character');
    let x = 0;
    if (this.state.horizontal <= -100) {
      let interval = setInterval(() => {
        x++;
        this.state.horizontal += 5;
        character.style.right = this.state.horizontal + 'px';
        if (x >= 10) clearInterval(interval);
      }, 20);
    } else if (this.state.horizontal >= -100 && this.state.horizontal <= -10) {
      let interval = setInterval(() => {
        x++;
        this.state.horizontal += 1;
        character.style.right = this.state.horizontal + 'px';
        if (x >= 10) clearInterval(interval);
      }, 20);
    } else {
      return;
    }
  }

  slash() {
    let bladeToEnemy = this.bladeToEnemy();
    let distance = bladeToEnemy[0];
    let handle = document.getElementById('character-handle');
    let blade = document.getElementById('character-blade');
    let x = 0;

    if (this.state.swordSwap === 'right' && this.state.attack === false) {
      this.setState({ attack: true })
      let interval = setInterval(() => {
        x++
        let swing = (-0.5 * x * (x - 30));
        handle.style.transform = `rotate(${swing}deg)`;
        if (x >= 5) clearInterval(interval);
      }, 20);
    };
    if (this.state.swordSwap === 'left' && this.state.attack === false) {
      this.setState({ attack: true })
      let interval = setInterval(() => {
        x++
        let swing = (-0.3 * x * (x - 60));
        handle.style.transform = `rotate(${swing}deg)`;
        if (x >= 10) clearInterval(interval);
      }, 5);
    };
    if (distance <= 60) {
      let enemy = document.getElementById('enemy');
      let interval = setInterval(() => {
        x++;
        let spin = (-0.1 * x * (x - 20));
        enemy.style.transform = `rotate(-90deg)`;
        if (x >= 100) clearInterval(interval);
      }, 20);
      setTimeout(() => {
        window.location.reload();
      }, 500)
    }
  }

  // plunge() {
  //   let handle = document.getElementById('character-handle');
  //   let blade = document.getElementById('character-blade');
  //   let x = 0;
  //   let interval = setInterval(() => {
  //     x++;
  //     let heightChange = (-0.1 * x * (x - 75));
  //     let descent = (-0.1 * x * (x - 180));
  //     handle.style.top = `${descent}px`;
  //     if (x >= 75) clearInterval(interval);
  //   }, 20);
  // }

  onKeyUp(e) {
    let changeX = this.positions()[8];
    //console.log('D:' + a, changeX);
    if (changeX < 0) this.setState({ swordSwap: 'left' });
    if (changeX > 0) this.setState({ swordSwap: 'right' });
    this.setState({
      fired: !this.state.fired,
      attack: false,
      forceBlock: false,
    });
  };

  onKeyDown(e) {
    //console.log(e.keyCode)
    const arenaFloor = '449px';
    let elem = document.getElementById('character');

    if (!this.state.fired) {
      this.setState({ fired: true });
      if (elem.style.top === arenaFloor) {
        if (e.which === 38 || e.which === 87) this.moveUp();
      } //else if (elem.style.top <= '360px') this.plunge();
      if (e.which === 40 || e.which === 83) this.moveDown();
      if (e.which === 39 || e.which === 68) this.moveRight();
      if (e.which === 37 || e.which === 65) this.moveLeft();
      if (e.which === 32) this.slash();
      if (e.which === 70) this.setState({ unSheathed: !this.state.unSheathed })
    }
  };

  characterWeapon() {
    let blade_color = 'green';
    let arm_color = 'black';
    let classAdd = 'character-';

    if (this.state.swordSwap === 'right' && this.state.unSheathed && this.state.forceBlock === false) {
      return this.r_arm_and_weapon(blade_color, arm_color, classAdd);
    }
    if (this.state.swordSwap === 'left' && this.state.unSheathed && this.state.forceBlock === false) {
      return this.l_arm_and_weapon(blade_color, arm_color, classAdd);
    }
    if (this.state.swordSwap === 'right' && !this.state.unSheathed && this.state.forceBlock === false) {
      return this.sheathedRight(classAdd, arm_color)
    }
    if (this.state.swordSwap === 'left' && !this.state.unSheathed && this.state.forceBlock === false) {
      return this.sheathedLeft(classAdd, arm_color)
    }
    if (this.state.forceBlock === true) {
      return this.forceBlock(classAdd, arm_color);
    }
  }

  character() {
    let robe_color = 'black';
    let robe_outline = 'black';
    let classAdd = 'character-';
    let skin_color = '#FFA07A'
    let hair_color = 'gold';

    return (
      <div id='character' style={{
        height: '50px',
        width: '10px',
        backgroundColor: robe_color,
        //border: `1px solid ${robe_outline}`,
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
        {this.characterWeapon()}
      </div>
    )
  }

  render() {
    return this.character();
  };
};
import React from 'react';

export function r_arm_and_weapon(blade_color, arm_color, identifier) {
    return (
        <div className={identifier + 'arm'} id={identifier + 'arm'} style={{
            height: '15px',
            width: '5px',
            position: 'relative',
            bottom: '5px',
            right: '10px',
            borderRadius: '30%',
            backgroundColor: arm_color,
            transform: 'rotate(270deg)',
        }}>
            <div className={identifier + 'handle'}
                id={identifier + 'handle'} style={{
                    height: '15px',
                    width: '2px',
                    position: 'relative',
                    bottom: '8px',
                    border: '1px solid black',
                    borderRadius: '30%',
                    backgroundColor: 'grey',
                    transform: 'rotate(40deg)',
                }}>
                <div className={identifier + 'blade'}
                    id={identifier + 'blade'} style={{
                        height: '45px',
                        width: '4px',
                        position: 'relative',
                        right: '1px',
                        bottom: '45px',
                        borderRadius: '30%',
                        backgroundColor: blade_color,
                    }}></div>
            </div>
        </div>
    );
}

export function l_arm_and_weapon(blade_color, arm_color, identifier) {
    return (
        <div className={identifier + 'arm'} id={identifier + 'arm'} style={{
            height: '15px',
            width: '5px',
            position: 'relative',
            bottom: '5px',
            left: '13px',
            borderRadius: '30%',
            backgroundColor: arm_color,
            transform: 'rotate(270deg)',
        }}>
            <div className={identifier + 'handle'}
                id={identifier + 'handle'} style={{
                    height: '15px',
                    width: '2px',
                    position: 'relative',
                    top: '8px',
                    border: '1px solid black',
                    borderRadius: '30%',
                    backgroundColor: 'grey',
                    transform: 'rotate(-220deg)',
                }}>
                <div className={identifier + 'blade'}
                    id={identifier + 'blade'} style={{
                        height: '45px',
                        width: '4px',
                        position: 'relative',
                        right: '1px',
                        bottom: '45px',
                        borderRadius: '30%',
                        backgroundColor: blade_color,
                    }}></div>
            </div>
        </div>
    );
}

export function sheathedLeft(identifier, arm_color) {
    return (
        <div className={identifier + 'arm'} id={identifier + 'arm'} style={{
            height: '8px',
            width: '5px',
            position: 'relative',
            top: '10px',
            right: '5px',
            borderRadius: '30%',
            backgroundColor: arm_color,
            transform: 'rotate(-120deg)',
        }}>
            <div className={identifier + 'handle'}
                id={identifier + 'handle'} style={{
                    height: '15px',
                    width: '2px',
                    position: 'relative',
                    bottom: '8px',
                    border: '1px solid black',
                    borderRadius: '30%',
                    backgroundColor: 'grey',
                    transform: 'rotate(90deg)',
                }}>
            </div>
        </div>
    )
}

export function sheathedRight(identifier, arm_color) {
    return (
        <div className={identifier + 'arm'} id={identifier + 'arm'} style={{
            height: '8px',
            width: '5px',
            position: 'relative',
            top: '10px',
            left: '10px',
            borderRadius: '30%',
            backgroundColor: arm_color,
            transform: 'rotate(120deg)',
        }}>
            <div className={identifier + 'handle'}
                id={identifier + 'handle'} style={{
                    height: '15px',
                    width: '2px',
                    position: 'relative',
                    bottom: '8px',
                    border: '1px solid black',
                    borderRadius: '30%',
                    backgroundColor: 'grey',
                    transform: 'rotate(-90deg)',
                }}>
            </div>
        </div>
    );
}

export function forceBlock(identifier, arm_color) {
    return (
        <div className={identifier + 'arm'} id={identifier + 'arm'} style={{
            height: '8px',
            width: '5px',
            position: 'relative',
            top: '5px',
            right: '10px',
            borderRadius: '30%',
            backgroundColor: arm_color,
            transform: 'rotate(-90deg)',
        }}>
            <div className={identifier + 'handle'}
                id={identifier + 'handle'} style={{
                    height: '15px',
                    width: '2px',
                    position: 'relative',
                    bottom: '8px',
                    border: '1px solid black',
                    borderRadius: '30%',
                    backgroundColor: 'grey',
                    transform: 'rotate(90deg)',
                }}>
                <div className={identifier + 'force'}
                    id={identifier + 'force'} style={{
                        position: 'relative',
                        bottom: '50px',
                        right: '30px',
                        height: '80px',
                        width: '80px',
                        border: '5px solid blue',
                        borderBottom: 'none',
                        borderRadius: '50%',
                        display: 'inline-block',
                        transform: 'rotate(180deg)',
                    }}></div>
            </div>
        </div >
    )
}
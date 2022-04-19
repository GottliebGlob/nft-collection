import React from 'react';
import openIcon from "../../img/icons/openIcon.png";
import closeIcon from "../../img/icons/closeIcon.png"


interface ToggleIcon {
    flag: boolean;
    handler: (flag: boolean)=>void;
}

export const FaqIcon = (props: ToggleIcon) => {
    return (
        <>
            {
                props.flag ? <div style={{
                    width: 40,
                    height: 40,
                    display: 'inline-block',
                    textAlign: 'center',
                    marginRight: 5,
                    cursor: 'pointer'
                }}
                onClick={() => props.handler(props.flag)}
                >
                    <img src={openIcon} alt="loading..."
                         style={{height: '70%', marginTop: 5, marginLeft: 3 }}/>
                </div> : <div style={{
                    width: 40,
                    height: 40,
                    display: 'inline-block',
                    textAlign: 'center',
                    marginRight: 5,
                    cursor: 'pointer'
                }}
                              onClick={() => props.handler(props.flag)}
                >
                    <img src={closeIcon} alt="loading..."
                         style={{height: '70%', marginTop: 5, marginLeft: 3 }}/>
                </div>
            }
        </>
    )

};


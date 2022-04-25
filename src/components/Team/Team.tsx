import React from 'react';
import team from "../../img/team.gif"
import {ShimmerTitle} from "../styled";

import devOne from "../../img/devOne.gif"
import devTwo from "../../img/devTwo.gif"
import devThree from "../../img/devThree.gif"
import devFour from "../../img/devFour.gif"
import devFive from "../../img/devFive.gif"


export const Team = () => {

    return (
        <div style={{
            width: '100%',
            textAlign: 'center'
        }}>
            <ShimmerTitle>Meet the team</ShimmerTitle>

            {
                window.innerWidth > 530 ?   <img src={team} alt="loading..."
                                                 style={{width: '90%', textAlign: 'center'}}/> : <div>
                    <img src={devOne} alt="loading..."
                         style={{width: '100%', textAlign: 'center'}}/>
                    <img src={devTwo} alt="loading..."
                         style={{width: '100%', textAlign: 'center'}}/>
                    <img src={devThree} alt="loading..."
                         style={{width: '100%', textAlign: 'center'}}/>
                    <img src={devFour} alt="loading..."
                         style={{width: '100%', textAlign: 'center'}}/>
                    <img src={devFive} alt="loading..."
                         style={{width: '100%', textAlign: 'center'}}/>
                </div>
            }



        </div>
    );
};

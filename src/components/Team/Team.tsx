import React from 'react';
import team from "../../img/team.gif"
import {ShimmerTitle} from "../styled";



export const Team = () => {

    return (
        <div style={{
            width: '100%',
            textAlign: 'center'
        }}>
            <ShimmerTitle>Meet the team</ShimmerTitle>

            <img src={team} alt="loading..."
                 style={{width: '90%', textAlign: 'center'}}/>
        </div>
    );
};

import React from 'react';
import {DesContainer, ShimmerTitle, TextCont} from "../styled";
import road from "../../img/roadmap.png";


interface RoadmapRef {
    roadmapRef: any
}

export const Roadmap = (props: RoadmapRef) => {


    return (
       <div style={{
           width: '100%',
           textAlign: 'center'
       }}>
            <div ref={props.roadmapRef}/>

                <img src={road} alt="loading..."
                     style={{width: '90%', textAlign: 'center'}}/>
       </div>
    );
};

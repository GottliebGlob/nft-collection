import React from 'react';
import {DesContainer, ShimmerTitle, TextCont} from "../styled";
import road from "../../img/roadmap.png";

import roadOne from "../../img/roadOne.png"
import roadTwo from "../../img/roadTwo.png"
import roadThree from "../../img/roadThree.png"


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

           {
               window.innerWidth > 530 ?  <img src={road} alt="loading..."
                                               style={{width: window.innerWidth > 530 ? '90%' : "100vw", textAlign: 'center'}}/> :
                   <div>
                       <ShimmerTitle> Roadmap </ShimmerTitle>

                       <img src={roadOne} alt="loading..."
                            style={{width: "95%", textAlign: 'center'}}/>

                       <img src={roadTwo} alt="loading..."
                            style={{width: "95%", textAlign: 'center'}}/>

                       <img src={roadThree} alt="loading..."
                            style={{width: "95%", textAlign: 'center'}}/>
                   </div>
           }


       </div>
    );
};

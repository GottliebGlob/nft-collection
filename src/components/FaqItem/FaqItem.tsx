import React, {useRef, useState} from 'react';
import {Paper, Typography} from "@material-ui/core";
import FaqIcon from "../FaqIcon";
import { Slide } from '@material-ui/core';

interface Faq {
    question: string;
    answer: string;
}

export const FaqItem = (props: Faq) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleOpen = () => {
        setIsOpen(!isOpen)
    }

    return (
       <>
           <Paper style={{
               width: '98%',
               display: 'flex',
               flexDirection: 'row',
               textAlign: 'start',
               backgroundColor: "#3d5a80",
               padding: 10,
               marginBottom: '1rem'
           }}
           >
               <Typography variant={window.innerWidth > 530 ? "h6" : "body1"}
                           style={{
                               color: '#fff',
                               fontFamily: 'pixels',
                               textAlign: 'justify'
                           }}>
                  <FaqIcon flag={isOpen} handler={toggleOpen} />

                   {props.question}
               </Typography>
           </Paper>
            <Slide direction="right" in={isOpen} mountOnEnter unmountOnExit>
           <Paper style={{
               width: '98%',
               display: 'flex',
               flexDirection: 'row',
               backgroundColor: "#fff",
               padding: 10,
               marginBottom: '1rem',
           }}>
               <Typography variant={window.innerWidth > 530 ? "h6" : "body1"}
                           style={{
                               color: '#3d5a80',
                               fontFamily: 'pixels',
                               textAlign: 'justify'
                           }}>
                   {props.answer}
               </Typography>
           </Paper>
           </Slide>
       </>
    );
};

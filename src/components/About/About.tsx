import React from 'react';
import {Paper, Typography} from "@material-ui/core";
import {DesContainer, ShimmerTitle, TextCont} from "../styled";


interface Ref {
    aboutRef: any,
    rarityRef: any
}

export const About = (props: Ref) => {

    return (
        <>
        <DesContainer  maxWidth="md" style={{
            marginBottom: '3rem',
            marginTop: '2rem',
        }}>
            <div ref={props.aboutRef}/>
            <TextCont elevation={3}>
                    <Typography variant={window.innerWidth > 530 ? "h6" : "body1"}
                                style={{
                                    color: '#fff',
                                    fontFamily: 'pixels',
                                    textAlign: 'justify'
                                }}>
                        Darkland Creatures Cards is a collection of 555 animated cards on the
                        Solana blockchain. All cards will be transferred to the upcoming Polygon
                        game to bring it's own daily income and show their secrets!
                    </Typography>
            </TextCont>
        </DesContainer>
        </>
    );
};


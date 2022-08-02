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
                        Forest Discovery is a collection of 1111 animated cards on the Solana blockchain.
                        All cards will be transferred to the upcoming  game to bring it's own daily
                        income and show their secrets!
                    </Typography>
            </TextCont>
        </DesContainer>
        </>
    );
};


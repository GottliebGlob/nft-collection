import React from 'react';
import {Paper, Typography} from "@material-ui/core";
import {DesContainer, ShimmerTitle, TextCont} from "../styled";

import rarOne from "../../img/icons/rarOne.png"
import rarTwo from "../../img/icons/rarTwo.png"
import rarThree from "../../img/icons/rarThree.png"
import rarFour from "../../img/icons/rarFour.png"
import rarFive from "../../img/icons/rarFive.png"
import rarSix from "../../img/icons/rarSix.png"
import RarityConstruct from "../RarityConstruct";


interface Ref {
    aboutRef: any,
    rarityRef: any
}

export const Rarity = (props: Ref) => {


    return (
        <>
        <DesContainer  maxWidth="md" style={{
            marginBottom: '3rem',
            marginTop: '2rem',
        }}>
            <div ref={props.aboutRef}/>
            <TextCont elevation={3}>
                <ShimmerTitle>About Collection</ShimmerTitle>
                <Paper style={{
                    width: '98%',
                    display: 'flex',
                    flexDirection: 'row',
                    textAlign: 'start',
                    backgroundColor: "#3d5a80",
                    padding: 10,
                }}>
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
                </Paper>
            </TextCont>
        </DesContainer>

    <DesContainer  maxWidth="md" style={{
        marginBottom: '1rem',
    }}>
        <div ref={props.rarityRef}/>
        <TextCont elevation={3}>
            <ShimmerTitle>Rarity</ShimmerTitle>
            <Paper style={{
                width: '98%',
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'start',
                backgroundColor: "#3d5a80",
                padding: 10
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    alignItems: 'center'
                }}>
                    <img src={rarOne} alt="loading..." style={{height: 30}}/>
                    <img src={rarTwo} alt="loading..." style={{height: 30}}/>
                    <img src={rarThree} alt="loading..." style={{height: 30}}/>
                    <img src={rarFour} alt="loading..." style={{height: 30}}/>
                    <img src={rarFive} alt="loading..." style={{height: 30}}/>
                    <img src={rarSix} alt="loading..." style={{height: 30}}/>
                </div>

                <Typography variant={window.innerWidth > 530 ? "h6" : "body1"}
                            style={{
                                color: '#fff',
                                fontFamily: 'pixels',
                                textAlign: 'justify',
                            }}>
                    6 TYPES OF RARITY WERE CREATED. Holding this collection NFS allows you to get
                    whitelist and also access to beta of our future game Forest industry.
                    THESE CARDS WILL BRING INCOME in Onyx tokens. The more rare NFTs you get the more
                    income they will generate!
                </Typography>
            </Paper>
            <ShimmerTitle>Rarity playground</ShimmerTitle>
            <RarityConstruct />
        </TextCont>
    </DesContainer>
        </>
    );
};


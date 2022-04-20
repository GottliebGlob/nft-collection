import React from 'react';
import {Paper, Typography} from "@material-ui/core";
import {DesContainer, ShimmerTitle, TextCont} from "../styled";

import profOne from "../../img/icons/profOne.png"
import profTwo from "../../img/icons/profTwo.png"
import profThree from "../../img/icons/profThree.png"
import profFour from "../../img/icons/profFour.png"
import profFive from "../../img/icons/profFive.png"
import profSix from "../../img/icons/profSix.png"

import house from "../../img/house.png"
import game from "../../img/game.gif"

interface Ref {
    gameRef: any
}

export const Game = (props: Ref) => {


    return (
        <>
            <DesContainer  maxWidth="md" style={{
                marginBottom: '3rem',
                marginTop: '3rem',
            }}>
                <div ref={props.gameRef} />
                <TextCont elevation={3}>
                    <ShimmerTitle>Game</ShimmerTitle>
                    <Paper style={{
                        width: '98%',
                        display: 'flex',
                        flexDirection: 'row',
                        textAlign: 'start',
                        backgroundColor: "#3d5a80",
                        padding: 10,
                        marginBottom: '1rem'

                    }}>

                        <Typography variant={window.innerWidth > 530 ? "h6" : "body1"}
                                    style={{
                                        color: '#fff',
                                        fontFamily: 'pixels',
                                        textAlign: 'justify'
                                    }}>

                            <img src={game} alt="loading..."
                                 style={{height: window.innerWidth > 530 ? 220 : 150, float: 'left', marginLeft: 5, marginRight: 5}}/>

                            Now we are developing a game called Forest Industry.
                            This is a p2e game on Polygon blockchain with Darkland Creatures Cards as characters.
                            The game will have 6 types of cards that correspond to 6 classes.
                            YOU CAN SEE THESE PROFESSIONS IN THE RIGHT CORNER ON THE CARD. There is
                            BLACKSMITH
                            <img src={profOne} alt="loading..." style={{height: 25, marginLeft: 5, marginRight: 5}}/>,
                            MINER
                            <img src={profTwo} alt="loading..." style={{height: 25, marginLeft: 5, marginRight: 5}}/>, LOGGER
                            <img src={profThree} alt="loading..." style={{height: 25, marginLeft: 5, marginRight: 5}}/>,
                            FISHERMAN
                            <img src={profFour} alt="loading..." style={{height: 25, marginLeft: 5, marginRight: 5}}/>,
                            GARDENER
                            <img src={profFive} alt="loading..." style={{height: 25, marginLeft: 5, marginRight: 5}}/>,
                            WARRIOR
                            <img src={profSix} alt="loading..." style={{height: 25, marginLeft: 5, marginRight: 5}}/>.
                            EACH PROFESSION WILL ALSO AFFECT EARNINGS,
                            THEY ARE SHOWN IN DESCENDING ORDER, RESPECTIVELY IN THEIR RARITY.
                        </Typography>
                    </Paper>


                    <Paper style={{
                        width: '98%',
                        display: 'flex',
                        flexDirection: 'column',
                        textAlign: 'start',
                        backgroundColor: "#3d5a80",
                        padding: 10
                    }}>


                        <Typography variant={window.innerWidth > 530 ? "h6" : "body1"}
                                    style={{
                                        color: '#fff',
                                        fontFamily: 'pixels',
                                        textAlign: 'justify',
                                    }}>
                            <img src={house} alt="loading..." style={{height: window.innerWidth > 530 ? 190 : 100, float: 'right'}}/>
                            Infrastructure will be added soon. Houses for Darkland Creatures will bring you more income.
                            This will be an addition to regular cards.
                            They will be located on your ground and bring new features. You can buy them on the in-game market for ONYX tokens.
                            One of the structures is a mill where you can burn your NFTs and receive a fixed income every day.
                            This will bring x3 times more tokens than the card itself.
                            You will be given a choice of several buildings with different purposes and prices.
                            You can only place 2 buildings on a lot.
                        </Typography>
                    </Paper>
                </TextCont>
            </DesContainer>
        </>
    );
};


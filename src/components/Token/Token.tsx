import React from 'react';
import {DesContainer, ShimmerTitle, TextCont} from "../styled";
import {Paper, Typography} from "@material-ui/core";
import coin from "../../img/icons/coin.gif"



interface Ref {
    tokenRef: any
}

export const Token = (props: Ref) => {


    return (
        <DesContainer  maxWidth="md" style={{
            marginBottom: '3rem',
            marginTop: '3rem',
        }}>
            <div ref={props.tokenRef} />
            <TextCont elevation={3}>
                <ShimmerTitle>
                    <img src={coin} alt="loading..." style={{height: 30, marginRight: 3}}/>
                    Token
                    <img src={coin} alt="loading..." style={{height: 30, marginRight: 3}}/>
                </ShimmerTitle>
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
                                    textAlign: 'justify',
                                }}>
                    ONYX is an in-game currency earned by your NFTs in Forest Industries.
                    It can be used to improve the characteristics of the characters or exchanged.
                    </Typography>
                </Paper>

            </TextCont>

        </DesContainer>
    );
};

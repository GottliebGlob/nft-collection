import React from 'react';
import styled from "styled-components";
import {Container, Paper, Typography} from "@material-ui/core";
import coin from "../../img/icons/coin.gif"



interface Ref {
    tokenRef: any
}

export const Token = (props: Ref) => {

    const TextCont = styled(Paper)`
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: start;
  background-color: var(--card-background-color) !important;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22) !important;
`;


    const DesContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  gap: 20px;
`;

    const ShimmerTitle = styled.h1`
  margin: 20px auto;
  text-transform: uppercase;
  animation: glow 2s ease-in-out infinite alternate;
  color: var(--main-text-color);
  font-family: Pixels;
  text-align: center;
  @keyframes glow {
    from {
      text-shadow: 0 0 20px var(--main-text-color);
    }
    to {
      text-shadow: 0 0 30px var(--title-text-color), 0 0 10px var(--title-text-color);
    }
  }
`;

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

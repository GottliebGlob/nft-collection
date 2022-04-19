import React from 'react';
import styled from "styled-components";
import {Container, Paper, Typography} from "@material-ui/core";

import question from "../../img/icons/question.png"
import FaqItem from "../FaqItem";

interface Ref {
    faqRef: any
}

export const Faq = (props: Ref) => {
    const DesContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  gap: 20px;
`;

    const ShimmerTitle = styled.h1`
  text-align: center;
  margin: 20px auto;
  text-transform: uppercase;
  animation: glow 2s ease-in-out infinite alternate;
  color: var(--main-text-color);
  font-family: Pixels;
  @keyframes glow {
    from {
      text-shadow: 0 0 20px var(--main-text-color);
    }
    to {
      text-shadow: 0 0 30px var(--title-text-color), 0 0 10px var(--title-text-color);
    }
  }
`;

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

    return (
        <DesContainer  maxWidth="md" style={{
            marginBottom: '3rem',
            marginTop: '2rem',
        }}>
            <TextCont elevation={3} >
                <div ref={props.faqRef} />
                <ShimmerTitle >
                    <img src={question} alt="loading..." style={{height: 30, marginRight: 3}}/>
                    FAQ
                    <img src={question} alt="loading..." style={{height: 30, marginLeft: 3}}/>
                </ShimmerTitle>
            <FaqItem question="Why should I buy Darkland Creatures Cards NFTs❓"
                     answer="Holding Darkland Creatures Cards NFTs will
                     allow you to get a whitelist on a Polygon p2e game"/>

                <FaqItem question="MINT price❓"
                         answer="0.1 SOL for public mint and 0.08 for whitelist"/>

                <FaqItem question="What about NFT game❓"
                         answer="This is a p2e game where you can earn ONYX tokens.
                         Each character receive a certain amount of tokens for 24 hours.
                         You can improve its performance by buying clothes and equipment.
                         Tokens can be exchanged on exchanges."/>

                <FaqItem question="Secondary markets❓"
                         answer="We have already received approval on Magical Eden."/>

                <FaqItem question="What about ONYX token❓"
                         answer="ONYX is an in-game currency earned by your NFTs in Forest Industries.
                         It can be used to improve the characteristics of the characters or exchanged."/>

                <FaqItem question="Is our game on Solana❓"
                         answer="No. It will be build on Polygon blockchain."/>

                <FaqItem question="How to get whitelist❓"
                         answer="Be the holder of 1 or more NFT Darkland Creatures collection or
                         Invite 3 friends to our discord and and Reach Level 6"/>
            </TextCont>
        </DesContainer>
    );
};


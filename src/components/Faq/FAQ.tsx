import React from 'react';
import {DesContainer, ShimmerTitle, TextCont} from "../styled";
import {useTheme} from "@material-ui/core";

import question from "../../img/icons/question.png"
import FaqItem from "../FaqItem";

interface Ref {
    faqRef: any
}

export const Faq = (props: Ref) => {
const theme = useTheme()

    return (
        <DesContainer  maxWidth="md" style={{
            marginBottom: window.innerWidth > 530 ? '3rem' : '0.5rem',
            marginTop: window.innerWidth > 530 ? '2rem' : '0.5rem',
            textAlign: 'center'
        }}>
                <div ref={props.faqRef} />
                <ShimmerTitle style={{

                }}>
                    FAQ
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

                <FaqItem question="How to get whitelist❓"
                         answer="Be the holder of 1 or more NFT Darkland Creatures collection or
                         Invite 3 friends to our discord and and Reach Level 6"/>
        </DesContainer>
    );
};


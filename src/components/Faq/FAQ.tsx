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

            <FaqItem question="Why should I mint Forest Industry NFTs❓"
                     answer="Holding Forest Industry NFTs allows you to get passive income in $FERO tokens
                     that you can trade for SOL."/>

            <FaqItem question="Why should I hold Darkland Creatures Cards NFTs❓"
                     answer="Holding Darkland Creatures Cards NFTs will
                     allow you to take part in p2e game"/>

                <FaqItem question="MINT price❓"
                         answer="0.1 SOL for public mint and 0.08 for whitelist"/>

                <FaqItem question="What about NFT game❓"
                         answer="This is a p2e game where you can earn ONYX tokens.
                         Each character receive a certain amount of tokens for 24 hours.
                         You can improve its performance by buying clothes and equipment.
                         Tokens can be exchanged on exchanges."/>

                <FaqItem question="Secondary markets❓"
                         answer="We have already received approval on Magical Eden."/>

            <FaqItem question="What about FERO token❓"
                     answer="FERO is a token for rewarding Forest Industry collections holders.
                     You can earn it staking your Forest Industry NFTs or as a reward for community events."/>

                <FaqItem question="What about ONYX token❓"
                         answer="ONYX is an in-game currency earned by your NFTs in Forest Industries.
                         It can be used to improve the characteristics of the characters or exchanged."/>

                <FaqItem question="How to get whitelist❓"
                         answer="Be the holder of 1 or more Forest Industry NFT, create a fan-art, win in giveaways or
                         Invite 3 friends to our discord and and Reach Level 5"/>
        </DesContainer>
    );
};


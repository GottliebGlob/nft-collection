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
import RarityConstructOld from "../RarityConstructOld"


interface Ref {
    rarityRef: any
}

export const Rarity = (props: Ref) => {

    return (
        <>


            <DesContainer  maxWidth="md" style={{
                marginBottom: '1rem',
                marginTop: '1rem'
            }}>
                <div ref={props.rarityRef}/>
                <TextCont elevation={3}>
                    <ShimmerTitle>Rarity</ShimmerTitle>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-evenly',
                            alignItems: 'center',
                            width: '100%'
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
                    <ShimmerTitle style={{
                        textAlign: 'center'
                    }}>Rarity sandbox</ShimmerTitle>
                    <ShimmerTitle style={{
                        textAlign: 'center'
                    }}>GEN I</ShimmerTitle>
                    <RarityConstructOld />
                    <ShimmerTitle style={{
                        textAlign: 'center'
                    }}>GEN II</ShimmerTitle>
                    <RarityConstruct />
                </TextCont>
            </DesContainer>
        </>
    );
};


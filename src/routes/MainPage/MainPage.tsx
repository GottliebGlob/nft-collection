import React, {useRef} from "react";

import {MainContainer, TextCont, DesContainer} from "../../components/styled";

import NavigationBar from "../../components/NavigationBar";
import Rarity from "../../components/About";
import Game from "../../components/Game";
import Faq from "../../components/Faq";
import Roadmap from "../../components/Roadmap";
import Token from "../../components/Token";

import isMobile from "../../components/isMobile"

import logo from "../../img/logo.png"
import {FaDiscord, FaTwitter} from "react-icons/fa";



export const MainPage = () => {
    const mobileMarker = isMobile()

    const aboutRef = useRef<any>(null)
    const rarityRef = useRef<any>(null)
    const gameRef = useRef<any>(null)
    const tokenRef = useRef<any>(null)
    const faqRef = useRef<any>(null)
    const roadmapRef = useRef<any>(null)


    return (
        <main>
            <MainContainer style={{
                marginTop: window.innerWidth > 530 ? 20 : 0,
            }}>
                <h2 style={{
                    marginBottom: mobileMarker ? '0.2rem' : '1rem'
                }}>
                    <img src={logo} alt="loading..."
                         style={{width: window.innerWidth > 530 ? "58%" : "100%", textAlign: 'center'}}/>
                </h2>


                {
                    mobileMarker ?
                        <DesContainer maxWidth="md" style={{
                            marginBottom: '1rem'
                        }}>
                            <TextCont elevation={1}
                                      style={{
                                          padding: '0.5rem'
                                      }}
                            >
                                <div style={{
                                    display: 'flex',
                                    width: '100%',
                                    flexDirection: 'row',
                                    justifyContent: 'space-evenly',

                                }}>
                                    <FaDiscord style={{fontSize: 50, color: '#fff'}}
                                               onClick={()=> window.open("https://discord.gg/sVcy4xpGAu", "_blank")} />
                                    <FaTwitter style={{fontSize: 50, color: '#fff', }}
                                               onClick={()=> window.open("https://twitter.com/heroes_of_veil", "_blank")}
                                    />
                                </div> </TextCont> </DesContainer> :   <NavigationBar
                            aboutRef={aboutRef}
                            rarityRef={rarityRef}
                            gameRef={gameRef}
                            tokenRef={tokenRef}
                            faqRef={faqRef}
                            roadmapRef={roadmapRef}
                        />
                }


            </MainContainer>

            <Rarity aboutRef={aboutRef} rarityRef={rarityRef}/>

            <Game gameRef={gameRef}/>

            <Token tokenRef={tokenRef} />

            <Faq faqRef={faqRef}/>

            <Roadmap roadmapRef={roadmapRef}/>

        </main>
    );
};



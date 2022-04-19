import React, {useRef} from "react";
import styled from "styled-components";

import {Paper, Container} from "@material-ui/core";


import NavigationBar from "../../components/NavigationBar";
import Rarity from "../../components/About";
import Game from "../../components/Game";
import Faq from "../../components/Faq";


import logo from "../../img/logo.png"
import Roadmap from "../../components/Roadmap";
import isMobile from "../../components/isMobile"
import {FaDiscord, FaTwitter} from "react-icons/fa";
import Token from "../../components/Token";


export const MainPage = () => {

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

    const MainContainer = styled.div`
      display: flex;
      flex-direction: column;
      margin-top: 20px;
      margin-bottom: 20px;
      margin-right: 2%;
      margin-left: 2%;
      text-align: center;
      justify-content: center;
    `;

    const DesContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  gap: 20px;
`;


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
                marginTop: window.innerWidth > 530 ? 20 : 0
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
                                    justifyContent: 'space-evenly'
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



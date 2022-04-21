import React from 'react';
import {Paper, Typography} from "@material-ui/core";
import {FaDiscord, FaTwitter} from "react-icons/fa";
import {NavLink} from "react-router-dom";

interface Refs {
    aboutRef: any,
    rarityRef: any,
    gameRef: any,
    tokenRef: any,
    faqRef: any,
    roadmapRef: any
}

export const NavigationBar = (props: Refs) => {


    function handleNavClick(ref: any) {
        if (ref.current !== null) {
            ref.current.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <Paper
            style={{
                backgroundColor: '#fff',
                width: '90vw',
                marginBottom: '2rem',
                marginTop: '1rem',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                overflow: 'hidden',
                boxSizing: 'border-box'
            }}>
            <div
                className="hovered-div"
                onClick={() => handleNavClick(props.aboutRef)}
                style={{
                    width: '13%',
                    boxSizing: 'border-box',
                    textAlign: 'center'
                }}>
                <NavLink to="/mint" style={{textDecoration: 'none'}}>
                <Typography variant={window.innerWidth > 530 ? "body1" : "body2"}
                            style={{
                                color: 'black',
                                borderRight: '1px solid lightsteelblue',
                                fontFamily: 'pixels',
                            }}
                >
                    Mint
                </Typography>
                </NavLink>
            </div>
            <div
                className="hovered-div"
                onClick={() => handleNavClick(props.aboutRef)}
                style={{
                    width: '13%',
                    boxSizing: 'border-box',
                    textAlign: 'center'
                }}>
                <Typography variant={window.innerWidth > 530 ? "body1" : "body2"}
                            style={{
                                color: 'black',
                                borderRight: '1px solid lightsteelblue',
                                fontFamily: 'pixels',
                            }}
                >
                    About
                </Typography>
            </div>
            <div
                className="hovered-div"
                onClick={() => handleNavClick(props.rarityRef)}
                style={{
                    width: '13%',
                    textAlign: 'center'
                }}>
                <Typography variant={window.innerWidth > 530 ? "body1" : "body2"}
                            style={{
                                color: 'black',
                                borderRight: '1px solid lightsteelblue',
                                fontFamily: 'pixels',
                            }}
                >
                    Rarity
                </Typography>
            </div>

            <div
                className="hovered-div"
                onClick={() => handleNavClick(props.gameRef)}
                style={{
                    width: '13%',
                    textAlign: 'center'
                }}>
                <Typography variant={window.innerWidth > 530 ? "body1" : "body2"}
                            style={{
                                color: 'black',
                                borderRight: '1px solid lightsteelblue',
                                fontFamily: 'pixels',
                            }}
                >
                    Game
                </Typography>
            </div>

            <div
                className="hovered-div"
                onClick={() => handleNavClick(props.tokenRef)}
                style={{
                    width: '13%',
                    textAlign: 'center'
                }}>
                <Typography variant={window.innerWidth > 530 ? "body1" : "body2"}
                            style={{
                                color: 'black',
                                borderRight: '1px solid lightsteelblue',
                                fontFamily: 'pixels',
                            }}
                >
                    Token
                </Typography>
            </div>

            <div
                className="hovered-div"
                onClick={() => handleNavClick(props.faqRef)}
                style={{
                    width: '13%',
                    textAlign: 'center'
                }}>
                <Typography variant={window.innerWidth > 530 ? "body1" : "body2"}
                            style={{
                                color: 'black',
                                borderRight: '1px solid lightsteelblue',
                                fontFamily: 'pixels',
                            }}
                >
                    FAQ
                </Typography>
            </div>

            <div
                className="hovered-div"
                onClick={() => handleNavClick(props.roadmapRef)}
                style={{
                    width: '13%',
                    textAlign: 'center'
                }}>
                <Typography variant={window.innerWidth > 530 ? "body1" : "body2"}
                            style={{
                                color: 'black',
                                fontFamily: 'pixels',
                                borderRight: '1px solid lightsteelblue',
                            }}
                >
                    Roadmap
                </Typography>
            </div>

            <FaDiscord style={{fontSize: 30, color: 'black', marginRight: window.innerWidth > 480 ? '1.5rem' : '1rem',
                marginLeft: window.innerWidth > 480 ? '1.5rem' : '1rem'
            }}
                       onClick={()=> window.open("https://discord.gg/sVcy4xpGAu", "_blank")} />
            <FaTwitter style={{fontSize: 30, color: 'black', marginRight: window.innerWidth > 480 ? '1.5rem' : '1rem'}}
                       onClick={()=> window.open("https://twitter.com/heroes_of_veil", "_blank")}
            />

        </Paper>
    );
};
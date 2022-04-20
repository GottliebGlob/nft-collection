import React from 'react';
import {Typography, Paper, Grid} from "@material-ui/core";
import {DesContainer, ShimmerTitle, TextCont} from "../styled";


interface RoadmapRef {
    roadmapRef: any
}

export const Roadmap = (props: RoadmapRef) => {


    return (
        <DesContainer  maxWidth="md" style={{
            marginBottom: '3rem',
            marginTop: '2rem',
        }}>
            <div ref={props.roadmapRef}/>
            <TextCont elevation={3} >
                <ShimmerTitle >
                Roadmap
                </ShimmerTitle>

                <Grid container spacing={1} style={{
                    color: '#fff'
                }}>
                    <Grid item md={5} style={{
                        display: "flex",
                        justifyContent: 'center',
                        alignItems: "center",
                        marginBottom: '0.5rem',
                    }}>
                        <Typography variant={window.innerWidth > 530 ? "h4" : "h5"}
                        style={{
                            fontFamily: "Pixels",
                            textAlign: "center",
                            marginTop: -10
                        }}>
                            PHASE ONE
                        </Typography>
                    </Grid>

                    <Grid item md={7}>
                        <Paper style={{
                            width: "100%",
                            backgroundColor: "#3d5a80",
                            marginBottom: '0.5rem',
                            color: '#fff'
                        }}>
                            <div style={{ padding: 10}}>
                            <Typography variant={window.innerWidth > 530 ? "h6" : "body1"}
                            style={{
                                fontFamily: "Pixels",
                                marginBottom: "0.25rem"}}>
                                1️⃣ Creation of a collection of 333 pieces on the Solana Blockchain.✅
                            </Typography>

                                <Typography variant={window.innerWidth > 530 ? "h6" : "body1"}
                                            style={{
                                                fontFamily: "Pixels",
                                                marginBottom: "0.25rem"}}>
                                    2️⃣ Secondary market Approval (Magic Eden).✅
                                </Typography>

                                <Typography variant={window.innerWidth > 530 ? "h6" : "body1"}
                                            style={{
                                                fontFamily: "Pixels",
                                                marginBottom: "0.25rem"}}>
                                    3️⃣ Launch Website.✅
                                </Typography>

                                <Typography variant={window.innerWidth > 530 ? "h6" : "body1"}
                                            style={{
                                                fontFamily: "Pixels",
                                                marginBottom: "0.25rem"}}>
                                    4️⃣ Mint✅
                                </Typography>

                                <Typography variant={window.innerWidth > 530 ? "h6" : "body1"}
                                            style={{
                                                fontFamily: "Pixels",
                                                marginBottom: "0.25rem"}}>
                                    5️⃣ Maintaining the price on the secondary market and holding promotions.✅
                                </Typography>

                                <Typography variant={window.innerWidth > 530 ? "h6" : "body1"}
                                            style={{
                                                fontFamily: "Pixels",
                                                marginBottom: "0.25rem"}}>
                                    6️⃣ Starting an NFT game development.✅
                                </Typography>
                            </div>
                        </Paper>
                    </Grid>

                    <Grid item md={7}>
                        <Paper style={{
                            width: "100%",
                            backgroundColor: "#3d5a80",
                            marginBottom: '0.5rem',
                            color: '#fff'
                        }}>
                            <div style={{ padding: 10}}>
                                <Typography variant={window.innerWidth > 530 ? "h6" : "body1"}
                                            style={{
                                                fontFamily: "Pixels",
                                                marginBottom: "0.25rem"}}>
                                    1️⃣ Distribute the time period for the following collections to maintain balance and price.✅
                                </Typography>

                                <Typography variant={window.innerWidth > 530 ? "h6" : "body1"}
                                            style={{
                                                fontFamily: "Pixels",
                                                marginBottom: "0.25rem"}}>
                                    2️⃣ Creating a Whitelist and privileges for it.✅
                                </Typography>

                                <Typography variant={window.innerWidth > 530 ? "h6" : "body1"}
                                            style={{
                                                fontFamily: "Pixels",
                                                marginBottom: "0.25rem"}}>
                                    3️⃣ Creating 2 waves at 555 NFT.
                                </Typography>

                                <Typography variant={window.innerWidth > 530 ? "h6" : "body1"}
                                            style={{
                                                fontFamily: "Pixels",
                                                marginBottom: "0.25rem"}}>
                                    4️⃣ Mint.
                                </Typography>
                            </div>
                        </Paper>
                    </Grid>

                    <Grid item md={5} style={{
                        display: "flex",
                        justifyContent: 'center',
                        alignItems: "center",
                        marginBottom: '0.5rem'
                    }}>
                        <Typography variant={window.innerWidth > 530 ? "h4" : "h5"}
                                    style={{
                                        fontFamily: "Pixels",
                                        textAlign: "center",
                                        marginTop: -10
                                    }}>
                            PHASE TWO
                        </Typography>
                    </Grid>

                    <Grid item md={5} style={{
                        display: "flex",
                        justifyContent: 'center',
                        alignItems: "center",
                        marginBottom: '0.5rem'
                    }}>
                        <Typography variant={window.innerWidth > 530 ? "h4" : "h5"}
                                    style={{
                                        fontFamily: "Pixels",
                                        textAlign: "center",
                                        marginTop: -10
                                    }}>
                            PHASE THREE
                        </Typography>
                    </Grid>

                    <Grid item md={7}>
                        <Paper style={{
                            width: "100%",
                            backgroundColor: "#3d5a80",
                            marginBottom: '0.5rem',
                            color: '#fff'
                        }}>
                            <div style={{ padding: 10}}>
                                <Typography variant={window.innerWidth > 530 ? "h6" : "body1"}
                                            style={{
                                                fontFamily: "Pixels",
                                                marginBottom: "0.25rem"}}>
                                    1️⃣ Release of 3 more collections for a total of 3333 NFTs
                                </Typography>

                                <Typography variant={window.innerWidth > 530 ? "h6" : "body1"}
                                            style={{
                                                fontFamily: "Pixels",
                                                marginBottom: "0.25rem"}}>
                                    2️⃣ Creation of p2e Polygon game where purchased NFTs will be used.
                                </Typography>

                                <Typography variant={window.innerWidth > 530 ? "h6" : "body1"}
                                            style={{
                                                fontFamily: "Pixels",
                                                marginBottom: "0.25rem"}}>
                                    3️⃣ Game beta for holders.
                                </Typography>

                                <Typography variant={window.innerWidth > 530 ? "h6" : "body1"}
                                            style={{
                                                fontFamily: "Pixels",
                                                marginBottom: "0.25rem"}}>
                                    4️⃣ Creation of the Onyx token as a game currency.
                                </Typography>

                                <Typography variant={window.innerWidth > 530 ? "h6" : "body1"}
                                            style={{
                                                fontFamily: "Pixels",
                                                marginBottom: "0.25rem"}}>
                                    5️⃣ Game launch.
                                </Typography>
                            </div>
                        </Paper>
                    </Grid>

                </Grid>
            </TextCont>
        </DesContainer>
    );
};

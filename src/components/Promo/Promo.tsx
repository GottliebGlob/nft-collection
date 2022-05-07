import React from 'react';
import {Container, Grid} from "@material-ui/core";
import promoOne from "../../img/promo/promoOne.png"
import promoTwo from "../../img/promo/promoTwo.png"
import promoThree from "../../img/promo/promoThree.png"
import promoFour from "../../img/promo/promoFour.png"
import promoFive from "../../img/promo/promoFive.png"
import promoSix from "../../img/promo/promoSix.png"
import promoSeven from "../../img/promo/promoSeven.png"
import promoEight from "../../img/promo/promoEight.png"
import {ShimmerTitle} from "../styled";

export const Promo = () => {
    return (
        <Container maxWidth="md" style={{
            marginTop: '-2rem',
            marginBottom: '2rem'
        }}>

            <ShimmerTitle style={{
            textAlign: 'center'
            }}>
                Listed on
            </ShimmerTitle>

       <Grid container spacing={1}>
           <Grid item sm={3} md={3} lg={3} style={{
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center'
           }}>
               <img src={promoOne} alt="loading..."
                    onClick={() => window.open("https://nftsolana.io/", "_blank")}
                    style={{width: '80%', textAlign: 'center', cursor: 'pointer'}}/>
           </Grid>

           <Grid item sm={3} md={3} lg={3} style={{
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center'
           }}>
               <img src={promoTwo} alt="loading..."
                    onClick={() => window.open("https://nftdesire.io/", "_blank")}
                    style={{width: '80%', textAlign: 'center', cursor: 'pointer'}}/>
           </Grid>

           <Grid item sm={3} md={3} lg={3} style={{
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center'
           }} >
               <img src={promoThree} alt="loading..."
                    onClick={() => window.open("https://nftsolanacalendar.com/", "_blank")}
                    style={{width: '80%', textAlign: 'center', cursor: 'pointer'}}/>
           </Grid>

           <Grid item sm={3} md={3} lg={3} style={{
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center'
           }}>
               <img src={promoFour} alt="loading..."
                    onClick={() => window.open("https://nftartpedia.com/", "_blank")}
                    style={{width: '40%', textAlign: 'center', cursor: 'pointer'}}/>
           </Grid>

           <Grid item sm={3} md={3} lg={3} style={{
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center'
           }}>
               <img src={promoFive} alt="loading..."
                    onClick={() => window.open("https://raritysniper.com/", "_blank")}
                    style={{width: '80%', textAlign: 'center', cursor: 'pointer'}}/>
           </Grid>

           <Grid item sm={3} md={3} lg={3} style={{
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center'
           }}>
               <img src={promoSix} alt="loading..."
                    onClick={() => window.open("https://nftdroops.com/", "_blank")}
                    style={{width: '80%', textAlign: 'center', cursor: 'pointer'}}/>
           </Grid>

           <Grid item sm={3} md={3} lg={3} style={{
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center'
           }}>
               <img src={promoSeven} alt="loading..."
                    onClick={() => window.open("https://nft-list.io/", "_blank")}
                    style={{width: '40%', textAlign: 'center', cursor: 'pointer'}}/>
           </Grid>

           <Grid item sm={3} md={3} lg={3} style={{
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center'
           }}>
               <img src={promoEight} alt="loading..."
                    onClick={() => window.open("https://nft-list.io/", "_blank")}
                    style={{width: '90%', textAlign: 'center', cursor: 'pointer'}}/>
           </Grid>
       </Grid>
        </Container>
    );
};


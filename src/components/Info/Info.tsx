import React from 'react';
import {Grid, Paper, Typography, useTheme} from "@material-ui/core";
import {ShimmerText} from "../styled";


interface Price {
    price: string
}

export const Info = (props: Price) => {
    const theme = useTheme()


    return (
        <Grid container spacing={1}>
            <Grid item sm={6} md={6} lg={6}>
                <Paper style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: theme.palette.primary.dark,
                    marginTop: window.innerWidth > 530 ? 0 : '0.5rem'
                }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        padding: 10,
                        justifyContent: 'center'
                    }}>
                        <Typography variant={window.innerWidth > 530 ? "h6" : "body1"}
                                    style={{
                                        color: '#fff',
                                        fontFamily: 'pixels',
                                    }}
                        >
                            Price
                        </Typography>

                        <ShimmerText>{props.price}</ShimmerText>
                    </div>
                </Paper>
            </Grid>

            <Grid item sm={6} md={6} lg={6}>
                <Paper style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: theme.palette.primary.dark,
                    marginTop: window.innerWidth > 530 ? 0 : '0.5rem'
                }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        padding: 10,
                        justifyContent: 'center'
                    }}>
                        <Typography variant={window.innerWidth > 530 ? "h6" : "body1"}
                                    style={{color: '#fff', fontFamily: 'pixels',}}>
                            Supply
                        </Typography>

                        <ShimmerText>555</ShimmerText>
                    </div>

                </Paper>
            </Grid>

        </Grid>
    );
};

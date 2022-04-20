import React from 'react';
import {Paper, Typography} from "@material-ui/core";
import {ShimmerText} from "../styled";


interface Price {
    price: string
}

export const Info = (props: Price) => {

    return (
        <Paper style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: "#3d5a80",
            marginTop: window.innerWidth > 530 ? 0 : '0.5rem'
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                padding: 10,
                justifyContent: window.innerWidth > 530 ? "flex-start" : 'center'
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
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                padding: 10,
                justifyContent: window.innerWidth > 530 ? "flex-start" : 'center'
            }}>
                <Typography variant={window.innerWidth > 530 ? "h6" : "body1"}
                            style={{color: '#fff', fontFamily: 'pixels',}}>
                    Supply
                </Typography>

                <ShimmerText>555</ShimmerText>
            </div>

        </Paper>
    );
};

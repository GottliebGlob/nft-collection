import React from 'react';
import {Paper, Typography} from "@material-ui/core";
import styled from "styled-components";


interface Price {
    price: string
}

export const Info = (props: Price) => {
    const ShimmerText = styled.h4`
  margin: 6px 0 0 10px;
  text-transform: uppercase;
  animation: glow 2s ease-in-out infinite alternate;
  color: var(--main-text-color);
  font-family: Pixels;
  @keyframes glow {
    from {
      text-shadow: 0 0 20px var(--main-text-color);
    }
    to {
      text-shadow: 0 0 30px var(--title-text-color), 0 0 10px var(--title-text-color);
    }
  }
`;

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

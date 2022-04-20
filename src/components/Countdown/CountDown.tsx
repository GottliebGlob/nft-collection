import React from "react";
import {Typography, Paper} from "@material-ui/core";
import "./count_down.css"

export const CountDown = ({days, hours, minutes, seconds}: any) => {
    return (
        <div className="countDown-container" style={{
            marginTop: window.innerWidth > 530 ? 0 : '1.5rem'
        }}>
            <Paper elevation={0} className="item-container"
                   style={{backgroundColor: '#3d5a80', marginRight:  window.innerWidth > 480 ? '1rem': '1rem', textAlign: 'center'}}>
                <Typography variant={window.innerWidth > 530 ? 'h4' : 'h5'} className="countDown-text glow-count-text"
                            style={{fontFamily: 'Pixels'}}>
                    {days < 10 ? `0${days}` : days}
                </Typography>
                <Typography variant={window.innerWidth > 530 ? 'h5' : 'h6'} className="countDown-text">days</Typography>
            </Paper>
            <Paper elevation={0} className="item-container"
                   style={{backgroundColor: '#3d5a80', marginRight:  window.innerWidth > 480 ? '1rem': '1rem'}}>
                <Typography variant={window.innerWidth > 530 ? 'h4' : 'h5'} className="countDown-text glow-count-text"
                            style={{fontFamily: 'Pixels'}}>
                    {hours < 10 ? `0${hours}` : hours}
                </Typography>
                <Typography variant={window.innerWidth > 530 ? 'h5' : 'h6'} className="countDown-text">hrs</Typography>
            </Paper>
            <Paper elevation={0} className="item-container"
                   style={{backgroundColor: '#3d5a80', marginRight:  window.innerWidth > 480 ? '1rem': '1rem'}}>
                <Typography variant={window.innerWidth > 530 ? 'h4' : 'h5'} className="countDown-text glow-count-text"
                            style={{fontFamily: 'Pixels'}}>
                    {minutes < 10 ? `0${minutes}` : minutes}
                </Typography>
                <Typography variant={window.innerWidth > 530 ? 'h5' : 'h6'}className="countDown-text"> mins </Typography>
            </Paper>
            <Paper elevation={0} className="item-container" style={{backgroundColor: '#3d5a80',}}>
                <Typography variant={window.innerWidth > 530 ? 'h4' : 'h5'} className="countDown-text glow-count-text"
                style={{fontFamily: 'Pixels'}}
                >
                    {seconds < 10 ? `0${seconds}` : seconds}
                </Typography>
                <Typography variant={window.innerWidth > 530 ? 'h5' : 'h6'} className="countDown-text"> secs</Typography>
            </Paper>
        </div>
    );
};

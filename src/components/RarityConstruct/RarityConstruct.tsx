import React, {SyntheticEvent, useState} from 'react';

import {Grid, Paper, Typography} from "@material-ui/core";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import "./RarityConstruct.css"
import {useTheme} from "@material-ui/core";


import backOne from "../../img/rarity/back/blue.png"
import backTwo from "../../img/rarity/back/orange.png"
import backThree from "../../img/rarity/back/pink.png"

import catOne from "../../img/rarity/body/grey.png"
import catTwo from "../../img/rarity/body/sandy.png"
import catThree from "../../img/rarity/body/white.png"
import catFour from "../../img/rarity/body/siamese.png"
import catFive from "../../img/rarity/body/striped.png"

interface RarityItem {
    rarity: number,
    text: string
}

export const RarityConstruct = () => {
    const theme = useTheme()

    const [anchorEl, setAnchorEl] = useState<null | EventTarget & Element>(null);
    const [selectedIndex, setSelectedIndex] = useState(0);


    const [anchorElTwo, setAnchorElTwo] = useState<null | EventTarget & Element>(null);
    const [selectedIndexTwo, setSelectedIndexTwo] = useState(0);


    const handleClickListItem = (event: SyntheticEvent) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (event: SyntheticEvent, index: number) => {
        setSelectedIndex(index);
        setAnchorEl(null);
    };

    const handleCloseTwo = () => {
        setAnchorElTwo(null);
    };

    const handleClickListItemTwo = (event: SyntheticEvent) => {
        setAnchorElTwo(event.currentTarget);
    };

    const handleMenuItemClickTwo = (event: SyntheticEvent, index: number) => {
        setSelectedIndexTwo(index);
        setAnchorElTwo(null);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const optionsOne = [
        'Blue',
        'Orange',
        'Pink',
    ];

    const optionsTwo = [
        'Gray',
        'Sandy',
        'White',
        'Siamese',
        'Striped',
    ];

    const imagesOne = [
        backOne,
        backTwo,
        backThree,
    ];

    const imagesTwo = [
        catOne,
        catTwo,
        catThree,
        catFour,
        catFive
    ];

    const rarityOne = [
        30,
        50,
        20
    ]

    const rarityTwo = [
        35,
        30,
        10,
        15,
        10
    ]



   const RarityItem = ({rarity, text}: RarityItem) => {
        return (
            <div style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Typography variant="h5" style={{
                    fontFamily: 'Pixels',
                    color: '#fff'
                }}>
                    {text}
                </Typography>

                <Paper style={{
                    alignSelf: 'flex-start',
                    justifySelf: 'flex-end',
                    padding: 5,
                    paddingTop: 3,
                    display: 'flex',
                    backgroundColor: '#e8c809'
                }}>
                    <Typography variant="body1" style={{
                        fontFamily: 'Pixels',
                        color: '#fff'
                    }}>
                        {rarity + "%"}
                    </Typography>
                </Paper>

            </div>
        )
    }


    return (

            <Grid container spacing={2}>
                <Grid item md={6}>
                    <Grid container spacing={2}>
                        <Grid item md={12} sm={12} xs={12}>
                    <Paper style={{
                        width: '100%',
                        backgroundColor: theme.palette.primary.main,
                        padding: 0,
                    }}>
                    <List component="nav" aria-label="Device settings"
                          style={{
                              padding: 0,
                          }}>
                        <ListItem
                            style={{
                                padding: 0,
                                paddingTop: 3,
                                paddingLeft: 10,
                                paddingRight: 10
                            }}
                            button
                            aria-haspopup="true"
                            aria-label="when device is locked"
                            onClick={handleClickListItem}
                        >
                            <ListItemText
                                primary={<RarityItem text="Back" rarity={rarityOne[selectedIndex]}/>
                                    } secondary={optionsOne[selectedIndex]} />
                        </ListItem>
                    </List>
                    <Menu
                        id="lock-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        {optionsOne.map((option, index) => (
                            <MenuItem
                                key={option}
                                selected={index === selectedIndex}
                                onClick={(event) => handleMenuItemClick(event, index)}
                            >
                                {option}
                            </MenuItem>
                        ))}
                    </Menu>
                    </Paper>
                </Grid>

                <Grid item md={12} sm={12} xs={12}>
                    <Paper style={{
                        width: '100%',
                        backgroundColor: theme.palette.primary.main,
                        padding: 0,
                    }}>
                        <List component="nav" aria-label="Device settings"
                              style={{
                                  padding: 0,
                              }}>
                            <ListItem
                                style={{
                                    padding: 0,
                                    paddingTop: 3,
                                    paddingLeft: 10,
                                    paddingRight: 10
                                }}
                                button
                                aria-haspopup="true"
                                aria-controls="lock-menu"
                                aria-label="when device is locked"
                                onClick={handleClickListItemTwo}
                            >
                                <ListItemText
                                    primary={<RarityItem text="Body" rarity={rarityTwo[selectedIndexTwo]}/>
                                        } secondary={optionsTwo[selectedIndexTwo]} />
                            </ListItem>
                        </List>
                        <Menu
                            id="lock-menu"
                            anchorEl={anchorElTwo}
                            keepMounted
                            open={Boolean(anchorElTwo)}
                            onClose={handleCloseTwo}
                        >
                            {optionsTwo.map((option, index) => (
                                <MenuItem
                                    key={option}
                                    selected={index === selectedIndexTwo}
                                    onClick={(event) => handleMenuItemClickTwo(event, index)}
                                >
                                    {option}
                                </MenuItem>
                            ))}
                        </Menu>
                    </Paper>
                </Grid>
                    </Grid>
                </Grid>
                <Grid item md={6} sm={6} xs={12} className="image-container">
                    <img src={imagesOne[selectedIndex]} alt="loading..." className="first-image" />
                    <img src={imagesTwo[selectedIndexTwo]} alt="loading..." className="second-image" />
                </Grid>
            </Grid>

    );
};


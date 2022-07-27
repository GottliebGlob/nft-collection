import React, {SyntheticEvent, useState} from 'react';

import {Grid, Paper, Typography} from "@material-ui/core";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import "./RarityConstructOld.css"
import {useTheme} from "@material-ui/core";


interface RarityItem {
    rarity: number,
    text: string,
}


export const RarityConstructOld = () => {
    const theme = useTheme()

    const [anchorEl, setAnchorEl] = useState<null | EventTarget & Element>(null);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const [anchorElTwo, setAnchorElTwo] = useState<null | EventTarget & Element>(null);
    const [selectedIndexTwo, setSelectedIndexTwo] = useState(14);

    const [anchorElThree, setAnchorElThree] = useState<null | EventTarget & Element>(null);
    const [selectedIndexThree, setSelectedIndexThree] = useState(0);

    const [anchorElFour, setAnchorElFour] = useState<null | EventTarget & Element>(null);
    const [selectedIndexFour, setSelectedIndexFour] = useState(0);

    const [anchorElFive, setAnchorElFive] = useState<null | EventTarget & Element>(null);
    const [selectedIndexFive, setSelectedIndexFive] = useState(0);


    function importAll(r: any) {
        return r.keys().map(r);
    }

    //@ts-ignore
    const back = importAll(require.context('../../img/rarityOld/background', false, /\.(gif)$/));
    //@ts-ignore
    const job = importAll(require.context('../../img/rarityOld/job', false, /\.(gif)$/));
    //@ts-ignore
    const legendary = importAll(require.context('../../img/rarityOld/legendary', false, /\.(gif)$/));
    //@ts-ignore
    const rarity = importAll(require.context('../../img/rarityOld/rarity', false, /\.(gif)$/));
    //@ts-ignore
    const common = importAll(require.context('../../img/rarityOld/common', false, /\.(gif)$/));

    //Field one
    const handleClickListItem = (event: SyntheticEvent) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (event: SyntheticEvent, index: number) => {
        setSelectedIndex(index);
        setAnchorEl(null);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    //Field two
    const handleCloseTwo = () => {
        setAnchorElTwo(null);
    };

    const handleClickListItemTwo = (event: SyntheticEvent) => {
        setAnchorElTwo(event.currentTarget);
    };

    const handleMenuItemClickTwo = (event: SyntheticEvent, index: number) => {
        setSelectedIndexTwo(index);
        setSelectedIndexFive(0);
        setAnchorElTwo(null);
    };

    //Field three
    const handleCloseThree = () => {
        setAnchorElThree(null);
    };

    const handleClickListItemThree = (event: SyntheticEvent) => {
        setAnchorElThree(event.currentTarget);
    };

    const handleMenuItemClickThree = (event: SyntheticEvent, index: number) => {
        setSelectedIndexThree(index);
        setAnchorElThree(null);
    };

    //Field four
    const handleCloseFour = () => {
        setAnchorElFour(null);
    };

    const handleClickListItemFour = (event: SyntheticEvent) => {
        setAnchorElFour(event.currentTarget);
    };

    const handleMenuItemClickFour = (event: SyntheticEvent, index: number) => {
        setSelectedIndexFour(index);
        setAnchorElFour(null);
    };

    //Field five
    const handleCloseFive = () => {
        setAnchorElFive(null);
    };

    const handleClickListItemFive = (event: SyntheticEvent) => {
        setAnchorElFive(event.currentTarget);
    };

    const handleMenuItemClickFive = (event: SyntheticEvent, index: number) => {
        setSelectedIndexFive(index);
        setSelectedIndexTwo(0);
        setAnchorElFive(null);
    };




    const optionsOne = [
        'bg',
        'bg',
        'bg',
        'bg',
        'bg',
        'bg'
    ];

    const optionsTwo = [
        'empty',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',

    ];

    const optionsThree = [
        'common',
        'uncommon',
        'rare',
        'mythical',
        'legendary',
        'immortal',

    ];

    const optionsFour = [
        'blacksmith',
        'fisherman',
        'farmer',
        'guard',
        'lumberjack',
        'miner',
    ];

    const optionsFive = [
        'empty',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',
        'hero',

    ];


    const rarityOne = [
        25,
        25,
        23,
        10,
        10,
        7
    ]

    const rarityTwo = [
        0, 0.7
    ]

    const rarityThree = [
        30,
        50,
        20,
        15,
        10,
        5
    ]

    const rarityFour = [
        16.6,
        16.6,
        16.6,
        16.6,
        16.6,
        16.6,
    ]

    const rarityFive = [
        0, 3.86, 4.5, 6,1
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
} secondary={`${optionsOne[selectedIndex]} ${selectedIndex + 1}`}/>
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
    {`${option} ${index + 1}`}
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
    aria-label="when device is locked"
    onClick={handleClickListItemThree}
    >
    <ListItemText
        primary={<RarityItem text="Frame" rarity={rarityThree[selectedIndexThree]}/>
} secondary={optionsThree[selectedIndexThree]}/>
    </ListItem>
    </List>
    <Menu
    id="lock-menu"
    anchorEl={anchorElThree}
    keepMounted
    open={Boolean(anchorElThree)}
    onClose={handleCloseThree}
        >
        {optionsThree.map((option, index) => (
                <MenuItem
                    key={option}
            selected={index === selectedIndexThree}
    onClick={(event) => handleMenuItemClickThree(event, index)}
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
    aria-label="when device is locked"
    onClick={handleClickListItemFour}
    >
    <ListItemText
        primary={<RarityItem text="Job" rarity={rarityFour[selectedIndexFour]}/>
} secondary={optionsFour[selectedIndexFour]}/>
    </ListItem>
    </List>
    <Menu
    id="lock-menu"
    anchorEl={anchorElFour}
    keepMounted
    open={Boolean(anchorElFour)}
    onClose={handleCloseFour}
        >
        {optionsFour.map((option, index) => (
                <MenuItem
                    key={option}
            selected={index === selectedIndexFour}
    onClick={(event) => handleMenuItemClickFour(event, index)}
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
    aria-label="when device is locked"
    onClick={handleClickListItemFive}
    >
    <ListItemText
        primary={<RarityItem text="Common" rarity={selectedIndexFive > 0 ? selectedIndexFive > 80 ?
        rarityFive[1] : selectedIndexFive > 40 ?
            rarityFive[2] : rarityFive[3] : rarityFive[0]}/>
} secondary={`${selectedIndexFive > 0 ? optionsFive[1] : optionsFive[0]} ${selectedIndexFive > 0 ? selectedIndexFive + 20 : ""}`}/>
    </ListItem>
    </List>
    <Menu
    id="lock-menu"
    anchorEl={anchorElFive}
    keepMounted
    open={Boolean(anchorElFive)}
    onClose={handleCloseFive}
        >
        {optionsFive.map((option, index) => (
                <MenuItem
                    key={option}
            selected={index === selectedIndexFive}
    onClick={(event) => handleMenuItemClickFive(event, index)}
>
    {`${option} ${index > 0 ? index + 20 : ""}`}
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
        primary={<RarityItem text="Legendary" rarity={selectedIndexTwo > 0 ? rarityTwo[1] : rarityTwo[0]}/>
} secondary={`${selectedIndexTwo > 0 ? optionsTwo[1] : optionsTwo[0]} ${selectedIndexTwo > 0 ? selectedIndexTwo : ""}`}/>
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
    {`${option} ${index > 0 ? index : ""}`}
    </MenuItem>
))}
    </Menu>
    </Paper>
    </Grid>
    </Grid>
    </Grid>

    <Grid item md={6} sm={6} xs={12} className="image-container"
    style={{minHeight: 450}}>
    <img src={rarity[selectedIndexThree].default} alt="loading..." style={{
        position: 'absolute', top: 0, left: '10%', zIndex: 3
    }}/>
    <img src={back[selectedIndex].default} alt="loading..." style={{
        position: 'absolute', top: 0, left: '10%', zIndex: 1
    }}/>
    <img src={legendary[selectedIndexTwo].default} alt="loading..." style={{
        position: 'absolute', top: 0, left: '10%', zIndex: 2
    }}/>
    <img src={common[selectedIndexFive].default} alt="loading..." style={{
        position: 'absolute', top: 0, left: '10%', zIndex: 2
    }}/>
    <img src={job[selectedIndexFour].default} alt="loading..." style={{
        position: 'absolute', top: 0, left: '10%', zIndex: 4
    }}/>


    </Grid>


    </Grid>

);
};


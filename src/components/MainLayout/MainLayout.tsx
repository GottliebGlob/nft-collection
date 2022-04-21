import React from 'react';
import {useTheme} from "@material-ui/core";

interface Children {
    children: JSX.Element
}

export const MainLayout = (props: Children) => {
    const theme = useTheme()
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            minHeight: '100vh',
            width: '100%',
            backgroundColor: theme.palette.primary.light
        }}>
            {props.children}
        </div>
    );
};


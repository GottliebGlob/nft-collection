import React from 'react';

interface Children {
    children: JSX.Element
}

export const MainLayout = (props: Children) => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            minHeight: '100vh',
            width: '100%',
            backgroundColor: '#9cb9d6'
        }}>
            {props.children}
        </div>
    );
};


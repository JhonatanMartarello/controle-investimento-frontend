import React from 'react';

const UIMoeda = ({children}) => {
    return (
        <>
            {children.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
        </>
    )
}

export default UIMoeda;
import React from 'react';
import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import Homepage from '@components/Homepage';

const getLibrary = (provider, connector) => {
    return new Web3Provider(provider); // this will vary according to whether you use e.g. ethers or web3.js
};

function App() {
    return (
        <Web3ReactProvider getLibrary={getLibrary}>
            <Homepage />
        </Web3ReactProvider>
    );
}

export default App;

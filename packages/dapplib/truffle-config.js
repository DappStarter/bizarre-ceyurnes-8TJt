require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give envelope obscure top chaos note mirror quality install nature off trade'; 
let testAccounts = [
"0x1262c2d252cfb880c5835ce39b468e21312dc2d806cd2f3b3caef2f539322a03",
"0x3e08671730ebc11b83dd136a42935cd6dc5a2ef8d4b5c973ec8dd2207e9ee334",
"0xe4bf3a7bbb82d3cf5e039e63d6eab1c8caa4ceced2a2576f9b0a5643caaa3de9",
"0x6677c8c951cca648c34f6098b60a818bcb9271f77d63874ec3e75e7fe0a721d5",
"0x1305f5498ea48c24ed16ee3249b63163919bcf9ecae9c17857c1fb79b9cf97c9",
"0xf7edb86b693266489ef59877756c6f04c8be5b65d867ce90ea1a2aeb3790ca6b",
"0x3a5624f55da2fcf2fae15c330e109d104fd110353399a4fb070d1c79fe6110c4",
"0x65795b44a35b90bbc9784333a16dd8820340c8b95ced8b0ee39650bfb47458b7",
"0x6b41d297bc6d5714759550c1b7e13f83a4e7c657b3545402c4ab0b1da893b7d4",
"0xbee1f72ad01e060dc06dd361525e2e7ca82c99c620fcfa7cf0c1e2b35997cb70"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};



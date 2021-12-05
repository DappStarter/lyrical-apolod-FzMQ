require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey slide olympic short bitter birth magic assume hockey kite army gift'; 
let testAccounts = [
"0xa83b7f6f609d1e01fb5fca30d07abf60257bf9ce31f699cbafdd01adfd91393d",
"0xbf42fd4eae9b5c7723b0d40c3d0fa72cc1b69ee7cb4d306346cda732d13abb56",
"0xf0b01014b634013d9e495723d33d1d23cd8f8366bd2bb29e1500bb7c64d30575",
"0xc883a96390f8282c8e52bddc204c861122367537e0f5303a3efb94eaaaf5edbe",
"0x3f28af9ed7e6c35f1bc8850c932e200697f653a37636779f665690aaa354d902",
"0x25a6386b8e6b1fe0be67e0d5fbff093c9ebdd061e83942342f024e5d64a929ba",
"0x1a147cbb8541cf7b45ce0dbcf350935add4059abdbf39e8b9db602478b06d10f",
"0x83603b099a74ccaf1feac59afb4cd078686757f4fea9b29b6415a60d0785d343",
"0x71352bb2960945852a3eaf03410a11d079917f4817cf7a7f4b0724f8cb6d4515",
"0xe6c31086d6b22f6554efbc84ec017d25fcd4489aaae64a73c92acf7676a93d69"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


//https://eth-ropsten.alchemyapi.io/v2/uTKA7bCNKW-zK4fmt_IZGcUDClj1IQA0

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity:'0.8.0',
  networks: {
    ropsten: {
      url:'https://eth-ropsten.alchemyapi.io/v2/uTKA7bCNKW-zK4fmt_IZGcUDClj1IQA0',
      accounts: ['8c1f84a392df0fade3a6ba8d955940aaf29998946d45e630d226fa9d0b3cdd8c']
    }
  }
}
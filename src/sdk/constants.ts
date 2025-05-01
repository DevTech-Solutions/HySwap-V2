import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  CARDONA = 2911,
  APECHAIN = 33139
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

interface ChainAddresses {
  FACTORY_ADDRESS: string
  INIT_CODE_HASH: string
  ROUTER_ADDRESS: string
}

const CHAIN_ADDRESSES: { [chainId in ChainId]: ChainAddresses } = {
  [ChainId.CARDONA]: {
    FACTORY_ADDRESS: '0x4fCDD3fdbdd2A113aEA288Af1e626C82e6D910b7',
    INIT_CODE_HASH: '0xe6fcaca4abd911e6ac3b3b73da39066a14962d58bd2f52c3015393b0756402c9',
    ROUTER_ADDRESS: '0xE595e3344128BC092dFa1bF023Fc554b3187E404'
  },
  [ChainId.APECHAIN]: {
    FACTORY_ADDRESS: '0x950D111Eb6d7Db555bD8E2819Ca0411De1dea28b', // Replace with actual APECHAIN address
    INIT_CODE_HASH: '0xf3fd263a851d54cd21bdd6afc209cac1740248d5ccccb66003f40a6fd69e6eb0', // Replace with actual APECHAIN hash
    ROUTER_ADDRESS: '0x0A0e080923Bcc84B44A8026d5e8A716d70A1c0AE'  // Replace with actual APECHAIN address
  }
}

export const FACTORY_ADDRESS = (chainId: ChainId): string => CHAIN_ADDRESSES[chainId].FACTORY_ADDRESS
export const INIT_CODE_HASH = (chainId: ChainId): string => CHAIN_ADDRESSES[chainId].INIT_CODE_HASH
export const ROUTER_ADDRESS = (chainId: ChainId): string => CHAIN_ADDRESSES[chainId].ROUTER_ADDRESS

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}

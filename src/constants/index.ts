import { ChainId, JSBI, Percent, Token, WETH } from '@uniswap/sdk'
import { AbstractConnector } from '@web3-react/abstract-connector'

import { fortmatic, injected, portis, walletconnect, walletlink } from '../connectors'

export const ROUTER_ADDRESS = '0x374aad26604f07d01dfb4e74a0781cb51eed7b19'

// a list of tokens by chain
type ChainTokenList = {
  readonly [chainId in ChainId]: Token[]
}

export const ARB = new Token(ChainId.ZKEVMPOLYGON, '0xbf838e93082cc05b61e89c6792f338ece8590d9c', 18, 'ARB', 'ARB')
export const DAI = new Token(ChainId.ZKEVMPOLYGON, '0x67385c066c14e3f5fa5ca4c7755ae13883d09a18', 18, 'DAI', 'Dai Stablecoin')
export const GRT = new Token(ChainId.ZKEVMPOLYGON, '0x7422ab95742858e21b9f6299ff66b24fb2a478fd', 18, 'GRT', 'GRT')
export const LINK = new Token(ChainId.ZKEVMPOLYGON, '0xefb2408b7a3db3594a2ad179d2c08a6be1e1ae55', 18, 'LINK', 'LINK')
export const MKR = new Token(ChainId.ZKEVMPOLYGON, '0x7bbfc2e6e6fcadcad676a1585b669bdc80d43aeb', 18, 'MKR', 'Maker')
export const META = new Token(ChainId.ZKEVMPOLYGON, '0xe1986ced537437423837b4ef6210b51108ea76f1', 18, 'META', 'METALAMP')
export const TRX = new Token(ChainId.ZKEVMPOLYGON, '0xb89bffe2370512b63f613ca3fd5d5ad70538ce93', 18, 'TRX', 'TRX')
export const TUSD = new Token(ChainId.ZKEVMPOLYGON, '0x6cbec9d3123f9976f768634f4f87680524cc5101', 18, 'TUSD', 'TUSD')
export const USDC = new Token(ChainId.ZKEVMPOLYGON, '0xa40eb0638fa439e672f266886d8cdc6ded67751f', 18, 'USDC', 'USD//C')
export const USDT = new Token(ChainId.ZKEVMPOLYGON, '0xe751e20d336f7be90d14c84e987af4a712c48108', 18, 'USDT', 'Tether USD')

const WETH_ONLY: ChainTokenList = {
  [ChainId.ZKEVMPOLYGON]: [WETH[ChainId.ZKEVMPOLYGON]]
}

// used to construct intermediary pairs for trading
export const BASES_TO_CHECK_TRADES_AGAINST: ChainTokenList = {
  ...WETH_ONLY,
  [ChainId.ZKEVMPOLYGON]: [...WETH_ONLY[ChainId.ZKEVMPOLYGON], DAI, USDC, USDT, MKR]
}

/**
 * Some tokens can only be swapped via certain pairs, so we override the list of bases that are considered for these
 * tokens.
 */
export const CUSTOM_BASES: { [chainId in ChainId]?: { [tokenAddress: string]: Token[] } } = {}

// used for display in the default list when adding liquidity
export const SUGGESTED_BASES: ChainTokenList = {
  ...WETH_ONLY,
  [ChainId.ZKEVMPOLYGON]: [...WETH_ONLY[ChainId.ZKEVMPOLYGON], DAI, USDC, USDT]
}

// used to construct the list of all pairs we consider by default in the frontend
export const BASES_TO_TRACK_LIQUIDITY_FOR: ChainTokenList = {
  ...WETH_ONLY,
  [ChainId.ZKEVMPOLYGON]: [...WETH_ONLY[ChainId.ZKEVMPOLYGON], DAI, USDC, USDT]
}

export const PINNED_PAIRS: { readonly [chainId in ChainId]?: [Token, Token][] } = {
  [ChainId.ZKEVMPOLYGON]: [
    [USDC, USDT],
    [DAI, USDT]
  ]
}

export interface WalletInfo {
  connector?: AbstractConnector
  name: string
  iconName: string
  description: string
  href: string | null
  color: string
  primary?: true
  mobile?: true
  mobileOnly?: true
}

export const SUPPORTED_WALLETS: { [key: string]: WalletInfo } = {
  INJECTED: {
    connector: injected,
    name: 'Injected',
    iconName: 'arrow-right.svg',
    description: 'Injected web3 provider.',
    href: null,
    color: '#010101',
    primary: true
  },
  METAMASK: {
    connector: injected,
    name: 'MetaMask',
    iconName: 'metamask.png',
    description: 'Easy-to-use browser extension.',
    href: null,
    color: '#E8831D'
  },
  WALLET_CONNECT: {
    connector: walletconnect,
    name: 'WalletConnect',
    iconName: 'walletConnectIcon.svg',
    description: 'Connect to Trust Wallet, Rainbow Wallet and more...',
    href: null,
    color: '#4196FC',
    mobile: true
  },
  WALLET_LINK: {
    connector: walletlink,
    name: 'Coinbase Wallet',
    iconName: 'coinbaseWalletIcon.svg',
    description: 'Use Coinbase Wallet app on mobile device',
    href: null,
    color: '#315CF5'
  },
  COINBASE_LINK: {
    name: 'Open in Coinbase Wallet',
    iconName: 'coinbaseWalletIcon.svg',
    description: 'Open in Coinbase Wallet app.',
    href: 'https://go.cb-w.com/mtUDhEZPy1',
    color: '#315CF5',
    mobile: true,
    mobileOnly: true
  },
  FORTMATIC: {
    connector: fortmatic,
    name: 'Fortmatic',
    iconName: 'fortmaticIcon.png',
    description: 'Login using Fortmatic hosted wallet',
    href: null,
    color: '#6748FF',
    mobile: true
  },
  Portis: {
    connector: portis,
    name: 'Portis',
    iconName: 'portisIcon.png',
    description: 'Login using Portis hosted wallet',
    href: null,
    color: '#4A6C9B',
    mobile: true
  }
}

export const NetworkContextName = 'NETWORK'

// default allowed slippage, in bips
export const INITIAL_ALLOWED_SLIPPAGE = 50
// 20 minutes, denominated in seconds
export const DEFAULT_DEADLINE_FROM_NOW = 60 * 20

// one basis point
export const ONE_BIPS = new Percent(JSBI.BigInt(1), JSBI.BigInt(10000))
export const BIPS_BASE = JSBI.BigInt(10000)
// used for warning states
export const ALLOWED_PRICE_IMPACT_LOW: Percent = new Percent(JSBI.BigInt(100), BIPS_BASE) // 1%
export const ALLOWED_PRICE_IMPACT_MEDIUM: Percent = new Percent(JSBI.BigInt(300), BIPS_BASE) // 3%
export const ALLOWED_PRICE_IMPACT_HIGH: Percent = new Percent(JSBI.BigInt(500), BIPS_BASE) // 5%
// if the price slippage exceeds this number, force the user to type 'confirm' to execute
export const PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN: Percent = new Percent(JSBI.BigInt(1000), BIPS_BASE) // 10%
// for non expert mode disable swaps above this
export const BLOCKED_PRICE_IMPACT_NON_EXPERT: Percent = new Percent(JSBI.BigInt(1500), BIPS_BASE) // 15%

// used to ensure the user doesn't send so much ETH so they end up with <.01
export const MIN_ETH: JSBI = JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(16)) // .01 ETH
export const BETTER_TRADE_LINK_THRESHOLD = new Percent(JSBI.BigInt(75), JSBI.BigInt(10000))

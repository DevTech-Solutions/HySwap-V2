import { InjectedConnector } from '@web3-react/injected-connector'
import { NetworkConnector } from './NetworkConnector'
import { ChainId } from '../sdk'

const NETWORK_URLS: { [key in ChainId]: string } = {
  [ChainId.CARDONA]: process.env.REACT_APP_NETWORK_URL ?? '',
  [ChainId.APECHAIN]: process.env.REACT_APP_APECHAIN_URL ?? ''
}

// Default to CARDONA if not specified
export const NETWORK_CHAIN_ID: ChainId = parseInt(process.env.REACT_APP_CHAIN_ID ?? ChainId.CARDONA.toString())

if (Object.values(NETWORK_URLS).some(url => !url)) {
  throw new Error('Network URLs must be defined in environment')
}

export const network = new NetworkConnector({
  urls: NETWORK_URLS,
  defaultChainId: NETWORK_CHAIN_ID
})

export const injected = new InjectedConnector({
  supportedChainIds: [ChainId.CARDONA, ChainId.APECHAIN]
})

import { ChainId } from '../sdk'

// Chain-specific native token symbols
export const NATIVE_TOKEN_SYMBOL: { [chainId in ChainId]: string } = {
  [ChainId.CARDONA]: 'TOPIA',
  [ChainId.APECHAIN]: 'APE'
}

// Chain-specific native token names
export const NATIVE_TOKEN_NAME: { [chainId in ChainId]: string } = {
  [ChainId.CARDONA]: 'TOPIA',
  [ChainId.APECHAIN]: 'APECOIN'
}

// Chain network names
export const CHAIN_NAMES: { [chainId in ChainId]: string } = {
  [ChainId.CARDONA]: 'Hychain',
  [ChainId.APECHAIN]: 'Apechain'
}

// Chain-specific native currency logos
export const NATIVE_CURRENCY_LOGO: { [chainId in ChainId]: string } = {
  [ChainId.CARDONA]: 'topia-logo.svg',
  [ChainId.APECHAIN]: 'apecoin-logo.svg'
}

export const WRAPPED_NATIVE_SYMBOL: { [chainId in ChainId]: string } = {
  [ChainId.CARDONA]: 'WTOPIA',
  [ChainId.APECHAIN]: 'WAPE'
}

export const WRAPPED_NATIVE_NAME: { [chainId in ChainId]: string } = {
  [ChainId.CARDONA]: 'Wrapped TOPIA',
  [ChainId.APECHAIN]: 'Wrapped APE'
} 
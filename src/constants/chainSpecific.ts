import { ChainId } from '../sdk'

export const NATIVE_TOKEN_SYMBOL: { [chainId in ChainId]: string } = {
  [ChainId.CARDONA]: 'TOPIA',
  [ChainId.APECHAIN]: 'APE'
}

export const NATIVE_TOKEN_NAME: { [chainId in ChainId]: string } = {
  [ChainId.CARDONA]: 'TOPIA',
    [ChainId.APECHAIN]: 'APECOIN'
}

export const WRAPPED_NATIVE_SYMBOL: { [chainId in ChainId]: string } = {
  [ChainId.CARDONA]: 'WTOPIA',
  [ChainId.APECHAIN]: 'WAPE'
}

export const WRAPPED_NATIVE_NAME: { [chainId in ChainId]: string } = {
  [ChainId.CARDONA]: 'Wrapped TOPIA',
  [ChainId.APECHAIN]: 'Wrapped APE'
} 
import { Currency, ETHER, ChainId } from '../sdk'
import { NATIVE_TOKEN_SYMBOL, NATIVE_TOKEN_NAME } from '../constants/chainSpecific'

// Get the correct display symbol for the native currency based on the current chain
export function getNativeCurrencySymbol(chainId: ChainId = ChainId.CARDONA): string {
  return NATIVE_TOKEN_SYMBOL[chainId] || 'TOPIA'
}

// Get the correct display name for the native currency based on the current chain
export function getNativeCurrencyName(chainId: ChainId = ChainId.CARDONA): string {
  return NATIVE_TOKEN_NAME[chainId] || 'TOPIA'
}

// Check if a currency is the native currency (ETHER)
export function isNativeCurrency(currency?: Currency): boolean {
  return currency === ETHER
} 
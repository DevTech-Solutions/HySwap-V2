import { ChainId } from '../../sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.CARDONA]: '0x2979fE3CbcF7Dc370639E45E31ffBbd605d3662a'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }

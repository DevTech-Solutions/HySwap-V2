import { ChainId } from '../../sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.CARDONA]: '0x2979fE3CbcF7Dc370639E45E31ffBbd605d3662a',
  [ChainId.APECHAIN]: '0xC5c0C041ECeEe5B220d58457B7988986Cd79F74B'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }

import { ChainId } from '../../sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.ZKEVMPOLYGON]: '0x96CC77276A0dDF79c34850B99AaeA08C6AC19CB6',
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }

import React, { useMemo } from 'react'
import styled from 'styled-components'
import { Currency, ETHER, Token, ChainId } from '../../sdk'
import EthereumLogo from '../../assets/images/topia-logo.svg'
import ApeLogo from '../../assets/images/apecoin-logo.svg'
import Logo from '../Logo'
import { useActiveWeb3React } from '../../hooks'

const getTokenLogoURL = (address: string) => `images/suggested-tokens/${address}.png`

const StyledEthereumLogo = styled.img<{ size: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.075);
  border-radius: 24px;
`

const StyledLogo = styled(Logo)<{ size: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
`

export default function CurrencyLogo({
  currency,
  size = '24px',
  style
}: {
  currency?: Currency
  size?: string
  style?: React.CSSProperties
}) {
  const { chainId = ChainId.CARDONA } = useActiveWeb3React()
  
  const srcs: string[] = useMemo(() => {
    if (currency === ETHER) return []

    if (currency instanceof Token) {
      return [getTokenLogoURL(currency.address)]
    }
    return []
  }, [currency])

  if (currency === ETHER) {
    // Use chain-specific logo
    return <StyledEthereumLogo 
      src={chainId === ChainId.APECHAIN ? ApeLogo : EthereumLogo} 
      size={size} 
      style={style} 
    />
  }

  return <StyledLogo size={size} srcs={srcs} alt={`${currency?.symbol ?? 'token'} logo`} style={style} />
}

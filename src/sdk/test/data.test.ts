import { ChainId, WETH, Token, Fetcher } from '../'

// TODO: replace the provider in these tests
describe.skip('data', () => {
  it('Token', async () => {
    const token = await Fetcher.fetchTokenData(ChainId.ZKEVMPOLYGON, '0x67385c066c14e3f5fa5ca4c7755ae13883d09a18') // DAI
    expect(token.decimals).toEqual(18)
  })

  it('Pair', async () => {
    const token = new Token(ChainId.ZKEVMPOLYGON, '0x67385c066c14e3f5fa5ca4c7755ae13883d09a18', 18) // DAI
    const pair = await Fetcher.fetchPairData(WETH[ChainId.ZKEVMPOLYGON], token)
    expect(pair.liquidityToken.address).toEqual('0x52f7b0dA42bB5824148Ea1044aFE3A525Abc93eD')
  })
})

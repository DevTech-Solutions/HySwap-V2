import { parse } from 'qs'
import { Field } from './actions'
import { queryParametersToSwapState } from './hooks'

describe('hooks', () => {
  describe('#queryParametersToSwapState', () => {
    test('ETH to DAI', () => {
      expect(
        queryParametersToSwapState(
          parse(
            '?inputCurrency=ETH&outputCurrency=0x67385c066c14e3f5fa5ca4c7755ae13883d09a18&exactAmount=20.5&exactField=outPUT',
            { parseArrays: false, ignoreQueryPrefix: true }
          )
        )
      ).toEqual({
        [Field.OUTPUT]: { currencyId: '0x67385C066C14E3F5FA5Ca4C7755ae13883d09a18' },
        [Field.INPUT]: { currencyId: 'ETH' },
        typedValue: '20.5',
        independentField: Field.OUTPUT
      })
    })

    test('does not duplicate eth for invalid output token', () => {
      expect(
        queryParametersToSwapState(parse('?outputCurrency=invalid', { parseArrays: false, ignoreQueryPrefix: true }))
      ).toEqual({
        [Field.INPUT]: { currencyId: '' },
        [Field.OUTPUT]: { currencyId: 'ETH' },
        typedValue: '',
        independentField: Field.INPUT
      })
    })

    test('output ETH only', () => {
      expect(
        queryParametersToSwapState(
          parse('?outputCurrency=eth&exactAmount=20.5', { parseArrays: false, ignoreQueryPrefix: true })
        )
      ).toEqual({
        [Field.OUTPUT]: { currencyId: 'ETH' },
        [Field.INPUT]: { currencyId: '' },
        typedValue: '20.5',
        independentField: Field.INPUT
      })
    })
  })
})

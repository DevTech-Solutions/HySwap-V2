import { parseCallKey, toCallKey } from './actions'

describe('actions', () => {
  describe('#parseCallKey', () => {
    it('does not throw for invalid address', () => {
      expect(parseCallKey('0x-0x')).toEqual({ address: '0x', callData: '0x' })
    })
    it('does not throw for invalid calldata', () => {
      expect(parseCallKey('0x67385c066c14e3f5fa5ca4c7755ae13883d09a18-abc')).toEqual({
        address: '0x67385c066c14e3f5fa5ca4c7755ae13883d09a18',
        callData: 'abc'
      })
    })
    it('throws for invalid format', () => {
      expect(() => parseCallKey('abc')).toThrow('Invalid call key: abc')
    })
    it('throws for uppercase calldata', () => {
      expect(parseCallKey('0x67385c066c14e3f5fa5ca4c7755ae13883d09a18-0xabcD')).toEqual({
        address: '0x67385c066c14e3f5fa5ca4c7755ae13883d09a18',
        callData: '0xabcD'
      })
    })
    it('parses pieces into address', () => {
      expect(parseCallKey('0x67385c066c14e3f5fa5ca4c7755ae13883d09a18-0xabcd')).toEqual({
        address: '0x67385c066c14e3f5fa5ca4c7755ae13883d09a18',
        callData: '0xabcd'
      })
    })
  })

  describe('#toCallKey', () => {
    it('throws for invalid address', () => {
      expect(() => toCallKey({ callData: '0x', address: '0x' })).toThrow('Invalid address: 0x')
    })
    it('throws for invalid calldata', () => {
      expect(() =>
        toCallKey({
          address: '0x67385c066c14e3f5fa5ca4c7755ae13883d09a18',
          callData: 'abc'
        })
      ).toThrow('Invalid hex: abc')
    })
    it('throws for uppercase hex', () => {
      expect(() =>
        toCallKey({
          address: '0x67385c066c14e3f5fa5ca4c7755ae13883d09a18',
          callData: '0xabcD'
        })
      ).toThrow('Invalid hex: 0xabcD')
    })
    it('concatenates address to data', () => {
      expect(toCallKey({ address: '0x67385c066c14e3f5fa5ca4c7755ae13883d09a18', callData: '0xabcd' })).toEqual(
        '0x67385c066c14e3f5fa5ca4c7755ae13883d09a18-0xabcd'
      )
    })
  })
})

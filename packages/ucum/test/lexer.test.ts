import { describe, it, expect } from 'vitest'
import { Lexer, TokenType, tokenTypeToString } from '../src/lexer.js'

interface ExpectedToken {
  token: string
  type: TokenType
}

function collectTokens(source: string): ExpectedToken[] {
  const lex = new Lexer(source)
  const tokens: ExpectedToken[] = []
  while (!lex.finished()) {
    tokens.push({ token: lex.getToken(), type: lex.getType() })
    lex.consume()
  }
  return tokens
}

function assertTokens(source: string, expected: ExpectedToken[]) {
  const tokens = collectTokens(source)
  expect(tokens).toEqual(expected)
}

describe('Lexer', () => {
  it('tokenizes simple unit', () => {
    assertTokens('m', [{ token: 'm', type: TokenType.Symbol }])
  })

  it('tokenizes compound unit', () => {
    assertTokens('m/s', [
      { token: 'm', type: TokenType.Symbol },
      { token: '/', type: TokenType.Solidus },
      { token: 's', type: TokenType.Symbol },
    ])
  })

  it('tokenizes unit with exponent', () => {
    assertTokens('m2', [
      { token: 'm', type: TokenType.Symbol },
      { token: '2', type: TokenType.Number },
    ])
  })

  it('tokenizes negative exponent', () => {
    assertTokens('m-2', [
      { token: 'm', type: TokenType.Symbol },
      { token: '-2', type: TokenType.Number },
    ])
  })

  it('tokenizes annotation', () => {
    assertTokens('{score}', [{ token: '{score}', type: TokenType.Annotation }])
  })

  it('tokenizes bracketed unit', () => {
    assertTokens('[lb_av]', [{ token: '[lb_av]', type: TokenType.Symbol }])
  })

  it('tokenizes mixed with bracket', () => {
    assertTokens('cm[H2O]', [
      { token: 'cm', type: TokenType.Symbol },
      { token: '[H2O]', type: TokenType.Symbol },
    ])
  })

  it('tokenizes ten-star notation', () => {
    assertTokens('10*3/uL', [
      { token: '10*', type: TokenType.Symbol },
      { token: '3', type: TokenType.Number },
      { token: '/', type: TokenType.Solidus },
      { token: 'uL', type: TokenType.Symbol },
    ])
  })

  it('tokenizes kg.m/s2', () => {
    assertTokens('kg.m/s2', [
      { token: 'kg', type: TokenType.Symbol },
      { token: '.', type: TokenType.Period },
      { token: 'm', type: TokenType.Symbol },
      { token: '/', type: TokenType.Solidus },
      { token: 's', type: TokenType.Symbol },
      { token: '2', type: TokenType.Number },
    ])
  })

  it('tokenizes percent', () => {
    assertTokens('%', [{ token: '%', type: TokenType.Symbol }])
  })

  it('tokenizes parentheses', () => {
    assertTokens('(m)', [
      { token: '(', type: TokenType.Open },
      { token: 'm', type: TokenType.Symbol },
      { token: ')', type: TokenType.Close },
    ])
  })

  it('tokenizes leading solidus', () => {
    assertTokens('/m', [
      { token: '/', type: TokenType.Solidus },
      { token: 'm', type: TokenType.Symbol },
    ])
  })

  it('tokenizes mol/L', () => {
    assertTokens('mol/L', [
      { token: 'mol', type: TokenType.Symbol },
      { token: '/', type: TokenType.Solidus },
      { token: 'L', type: TokenType.Symbol },
    ])
  })

  it('tokenizes complex expression 4.[pi].10*-7.N/A2', () => {
    assertTokens('4.[pi].10*-7.N/A2', [
      { token: '4', type: TokenType.Number },
      { token: '.', type: TokenType.Period },
      { token: '[pi]', type: TokenType.Symbol },
      { token: '.', type: TokenType.Period },
      { token: '10*', type: TokenType.Symbol },
      { token: '-7', type: TokenType.Number },
      { token: '.', type: TokenType.Period },
      { token: 'N', type: TokenType.Symbol },
      { token: '/', type: TokenType.Solidus },
      { token: 'A', type: TokenType.Symbol },
      { token: '2', type: TokenType.Number },
    ])
  })

  it('tokenizes pure number', () => {
    assertTokens('123', [{ token: '123', type: TokenType.Number }])
  })

  it('tokenizes signed positive exponent', () => {
    assertTokens('m+3', [
      { token: 'm', type: TokenType.Symbol },
      { token: '+3', type: TokenType.Number },
    ])
  })

  it('tokenizes annotation after unit', () => {
    assertTokens('mg{total}', [
      { token: 'mg', type: TokenType.Symbol },
      { token: '{total}', type: TokenType.Annotation },
    ])
  })

  it('is immediately finished for empty string', () => {
    const lex = new Lexer('')
    expect(lex.finished()).toBe(true)
  })

  it('getTokenAsInt parses integer token', () => {
    const lex = new Lexer('42')
    expect(lex.getTokenAsInt()).toBe(42)
  })

  it('getTokenAsInt parses signed negative token', () => {
    const lex = new Lexer('m-3')
    lex.consume() // skip 'm'
    expect(lex.getTokenAsInt()).toBe(-3)
  })

  it('throws on unterminated annotation', () => {
    expect(() => new Lexer('{oops')).toThrow()
  })

  it('throws on unterminated bracket', () => {
    expect(() => new Lexer('[oops')).toThrow()
  })

  it('tokenizes nested parentheses', () => {
    assertTokens('((m))', [
      { token: '(', type: TokenType.Open },
      { token: '(', type: TokenType.Open },
      { token: 'm', type: TokenType.Symbol },
      { token: ')', type: TokenType.Close },
      { token: ')', type: TokenType.Close },
    ])
  })

  it('tokenizes Celsius', () => {
    assertTokens('Cel', [{ token: 'Cel', type: TokenType.Symbol }])
  })

  it("tokenizes square bracket unit [in_i'H2O]", () => {
    assertTokens("[in_i'H2O]", [{ token: "[in_i'H2O]", type: TokenType.Symbol }])
  })

  it('tokenizes mL', () => {
    assertTokens('mL', [{ token: 'mL', type: TokenType.Symbol }])
  })

  it('tokenizes percent with annotation', () => {
    assertTokens('%{vol}', [
      { token: '%', type: TokenType.Symbol },
      { token: '{vol}', type: TokenType.Annotation },
    ])
  })

  describe('tokenTypeToString', () => {
    it.each([
      [TokenType.None, 'none'],
      [TokenType.Number, 'number'],
      [TokenType.Symbol, 'symbol'],
      [TokenType.Solidus, 'solidus'],
      [TokenType.Period, 'period'],
      [TokenType.Open, 'open'],
      [TokenType.Close, 'close'],
      [TokenType.Annotation, 'annotation'],
      [99 as TokenType, 'unknown'],
    ])('TokenType %i → "%s"', (type, expected) => {
      expect(tokenTypeToString(type)).toBe(expected)
    })
  })

  it('is not finished before consuming, finished after consuming all', () => {
    const lex = new Lexer('m')
    expect(lex.finished()).toBe(false)
    lex.consume()
    expect(lex.finished()).toBe(true)
  })
})

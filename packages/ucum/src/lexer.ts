export const enum TokenType {
  None = 0,
  Number = 1,
  Symbol = 2,
  Solidus = 3,
  Period = 4,
  Open = 5,
  Close = 6,
  Annotation = 7,
}

export function tokenTypeToString(t: TokenType): string {
  switch (t) {
    case TokenType.None:
      return 'none';
    case TokenType.Number:
      return 'number';
    case TokenType.Symbol:
      return 'symbol';
    case TokenType.Solidus:
      return 'solidus';
    case TokenType.Period:
      return 'period';
    case TokenType.Open:
      return 'open';
    case TokenType.Close:
      return 'close';
    case TokenType.Annotation:
      return 'annotation';
    default:
      return 'unknown';
  }
}

function isDigit(ch: string): boolean {
  return ch >= '0' && ch <= '9';
}

function isSymbolChar(ch: string): boolean {
  const code = ch.charCodeAt(0);
  // Letters (basic ASCII + extended)
  if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) return true;
  // %, *, ^, ', ", _
  if (ch === '%' || ch === '*' || ch === '^' || ch === "'" || ch === '"' || ch === '_') return true;
  return false;
}

/**
 * Hand-written tokenizer for UCUM expressions.
 * Port of the Go lexer (which itself is a port of Java Lexer.java from FHIR/Ucum-java).
 */
export class Lexer {
  private readonly source: string;
  private index: number;
  private _token: string = '';
  private _type: TokenType = TokenType.None;

  constructor(source: string) {
    this.source = source;
    this.index = 0;
    this.consume();
  }

  /** Advance the lexer to the next token. */
  consume(): void {
    this._token = '';
    this._type = TokenType.None;

    if (this.index >= this.source.length) {
      return;
    }

    const ch = this.source[this.index]!;

    switch (ch) {
      case '/':
        this._token = '/';
        this._type = TokenType.Solidus;
        this.index++;
        return;
      case '.':
        this._token = '.';
        this._type = TokenType.Period;
        this.index++;
        return;
      case '(':
        this._token = '(';
        this._type = TokenType.Open;
        this.index++;
        return;
      case ')':
        this._token = ')';
        this._type = TokenType.Close;
        this.index++;
        return;
    }

    if (ch === '{') {
      this.readAnnotation();
      return;
    }

    if (ch === '+' || ch === '-') {
      this.readSignedNumber();
      return;
    }

    this.readGeneralToken();
  }

  private readAnnotation(): void {
    const start = this.index;
    this.index++; // skip opening {

    while (this.index < this.source.length) {
      const code = this.source.charCodeAt(this.index);
      if (this.source[this.index] === '}') {
        this.index++;
        this._token = this.source.slice(start, this.index);
        this._type = TokenType.Annotation;
        return;
      }
      if (code > 0x7e || code < 0x20) {
        throw new Error(`lexer error at position ${this.index}: invalid character in annotation`);
      }
      this.index++;
    }

    throw new Error(`lexer error at position ${start}: unterminated annotation`);
  }

  private readSignedNumber(): void {
    const start = this.index;
    this.index++; // skip sign

    if (this.index >= this.source.length || !isDigit(this.source[this.index]!)) {
      throw new Error(`lexer error at position ${start}: sign must be followed by a digit`);
    }

    while (this.index < this.source.length && isDigit(this.source[this.index]!)) {
      this.index++;
    }

    this._token = this.source.slice(start, this.index);
    this._type = TokenType.Number;
  }

  private readGeneralToken(): void {
    const start = this.index;
    let hasNonDigit = false;
    let inBracket = false;

    while (this.index < this.source.length) {
      const ch = this.source[this.index]!;

      if (inBracket) {
        if (ch === ']') {
          this.index++;
          inBracket = false;
          continue;
        }
        this.index++;
        continue;
      }

      if (ch === '[') {
        if (this.index > start) {
          break;
        }
        inBracket = true;
        hasNonDigit = true;
        this.index++;
        continue;
      }

      if (isDigit(ch)) {
        if (hasNonDigit) {
          break;
        }
        this.index++;
        continue;
      }

      if (isSymbolChar(ch)) {
        hasNonDigit = true;
        this.index++;
        continue;
      }

      break;
    }

    if (inBracket) {
      throw new Error(`lexer error at position ${start}: unterminated bracket`);
    }

    if (this.index === start) {
      throw new Error(
        `lexer error at position ${this.index}: unexpected character '${this.source[this.index]}'`,
      );
    }

    this._token = this.source.slice(start, this.index);
    this._type = hasNonDigit ? TokenType.Symbol : TokenType.Number;
  }

  getToken(): string {
    return this._token;
  }

  getType(): TokenType {
    return this._type;
  }

  finished(): boolean {
    return this.index >= this.source.length && this._type === TokenType.None;
  }

  getTokenAsInt(): number {
    const v = parseInt(this._token, 10);
    if (isNaN(v)) {
      throw new Error(`lexer error: token "${this._token}" is not a valid integer`);
    }
    return v;
  }
}

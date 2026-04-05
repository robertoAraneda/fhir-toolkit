export class CqlSyntaxError extends Error {
  readonly name = 'CqlSyntaxError' as const;
  readonly code = 'CQL-001' as const;
  readonly line?: number;
  readonly column?: number;

  constructor(message: string, line?: number, column?: number) {
    const location =
      line !== undefined && column !== undefined
        ? ` (line ${line}, col ${column})`
        : '';
    super(`[CQL-001]${location}: ${message}`);
    this.line = line;
    this.column = column;
  }
}

export class CqlEvalError extends Error {
  readonly name = 'CqlEvalError' as const;
  readonly code = 'CQL-101' as const;
  readonly definition?: string;

  constructor(message: string, definition?: string) {
    const prefix = definition ? `Definition '${definition}' failed: ` : '';
    super(`[CQL-101] ${prefix}${message}`);
    this.definition = definition;
  }
}

export class CqlTimeoutError extends Error {
  readonly name = 'CqlTimeoutError' as const;
  readonly code = 'CQL-201' as const;

  constructor(readonly timeoutMs: number) {
    super(`[CQL-201] evaluation exceeded timeout of ${timeoutMs}ms`);
  }
}

export class CqlTooCostlyError extends Error {
  readonly name = 'CqlTooCostlyError' as const;
  readonly code = 'CQL-202' as const;

  constructor(message: string) {
    super(`[CQL-202] ${message}`);
  }
}

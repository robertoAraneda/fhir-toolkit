export class CqlSyntaxError extends Error {
  readonly name = 'CqlSyntaxError' as const;
  constructor(
    message: string,
    readonly line?: number,
    readonly column?: number,
  ) {
    super(message);
  }
}

export class CqlEvalError extends Error {
  readonly name = 'CqlEvalError' as const;
  constructor(message: string) {
    super(message);
  }
}

export class CqlTimeoutError extends Error {
  readonly name = 'CqlTimeoutError' as const;
  constructor(readonly timeoutMs: number) {
    super(`evaluation exceeded timeout of ${timeoutMs}ms`);
  }
}

export class CqlTooCostlyError extends Error {
  readonly name = 'CqlTooCostlyError' as const;
  constructor(message: string) {
    super(message);
  }
}

export class NetworkError extends Error {
  private constructor(
    private readonly _error: Error,
    private readonly _message: string
  ) {
    super(_message);
  }

  get error(): Error {
    return this._error;
  }

  get message(): string {
    return this._message;
  }

  static fromError(error: any, message: string) {
    if (error.response) throw new Error('This error is not caused by network.');
    return new NetworkError(error, message);
  }
}

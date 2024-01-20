import {
  AxiosError as BaseAxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

export class AxiosError extends Error implements BaseAxiosError {
  private constructor(
    private readonly _message: string,
    private readonly _code: string | undefined,
    private readonly _config: InternalAxiosRequestConfig<any> | undefined,
    private readonly _isAxiosError: boolean,
    private readonly _request: any,
    private readonly _response: AxiosResponse<any> | undefined
  ) {
    super(_message);
  }

  get code(): string | undefined {
    return this._code;
  }

  get config(): InternalAxiosRequestConfig<any> | undefined {
    return this._config;
  }

  get isAxiosError(): boolean {
    return this._isAxiosError;
  }

  get request(): any {
    return this._request;
  }

  get response(): AxiosResponse<any> | undefined {
    return this._response;
  }

  get message(): string {
    return this._message;
  }

  static withMessage(error: BaseAxiosError, message: string) {
    return new AxiosError(
      message,
      error.code,
      error.config,
      error.isAxiosError,
      error.request,
      error.response
    );
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  toJSON(): object {
    return {};
  }
}

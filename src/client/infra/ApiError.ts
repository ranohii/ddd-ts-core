export class ApiError extends Error {
  static becauseTokenIsUnauthorized(message: string) {
    return new ApiError(message);
  }

  static becauseRequestIsInvalid(message: string) {
    return new ApiError(message);
  }

  static becauseInternalServerErrorOccurred(message: string) {
    return new ApiError(message);
  }

  static fromError(e: any) {
    let message: string;
    const res = e.response;
    if (res.data.detail) {
      message = res.data.detail;
    } else if (res.data.error_message) {
      message = res.data.error_message;
    } else if (res.data) {
      message = res.data;
    } else {
      message = e.message;
    }
    if (res.status === 400) return ApiError.becauseRequestIsInvalid(message);
    if (res.status === 401) return ApiError.becauseTokenIsUnauthorized(message);
    if (res.status === 500)
      return ApiError.becauseInternalServerErrorOccurred(message);
    return new ApiError(message);
  }
}

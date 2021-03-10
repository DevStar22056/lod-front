import { i18n } from '@/i18n';
import { routerAsync } from '@/app-module';
import Message from '@/shared/message/message';

const DEFAULT_ERROR_MESSAGE = i18n(
  'errors.defaultErrorMessage',
);

function selectErrorMessage(error) {
  if (
    error &&
    error.graphQLErrors &&
    error.graphQLErrors.length &&
    error.graphQLErrors[0].message
  ) {
    return error.graphQLErrors[0].message;
  }

  if (
    error &&
    error.networkError &&
    error.networkError.result &&
    error.networkError.result.errors &&
    error.networkError.result.errors.length &&
    error.networkError.result.errors[0].message
  ) {
    return error.networkError.result.errors[0].message;
  }

  return error.message || DEFAULT_ERROR_MESSAGE;
}

function selectErrorCode(error) {
  if (error && error.networkError) {
    if (
      error.networkError.result &&
      error.networkError.result.errors &&
      error.networkError.result.errors.length &&
      error.networkError.result.errors[0].code
    ) {
      return Number(
        error.networkError.result.errors[0].code,
      );
    }

    if (error.networkError.statusCode) {
      return Number(error.networkError.statusCode);
    }
  }

  if (
    error &&
    error.graphQLErrors &&
    error.graphQLErrors.length
  ) {
    return 400;
  }

  return 500;
}

export default class Errors {
  static handle(error) {
    if (process.env.NODE_ENV !== 'test') {
      console.error(selectErrorMessage(error));
      console.error(error);
    }

    if (selectErrorCode(error) === 403) {
      routerAsync().push('/403');
      return;
    }

    if (selectErrorCode(error) === 400) {
      Message.error(selectErrorMessage(error));
      return;
    }

    routerAsync().push('/500');
  }

  static errorCode(error) {
    return selectErrorCode(error);
  }

  static selectMessage(error) {
    return selectErrorMessage(error);
  }

  static showMessage(error) {
    Message.error(selectErrorMessage(error));
  }
}

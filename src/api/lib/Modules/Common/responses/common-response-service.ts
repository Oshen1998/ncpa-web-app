import { Response } from 'express';
import { RESPONSE_STATUS_CODES } from './common-status-codes';

export function successResponse(message: string, DATA: any, res: Response) {
  res.status(RESPONSE_STATUS_CODES.SUCCESS).json({
    STATUS: 'SUCCESS',
    MESSAGE: message,
    SUCCESS: true,
    DATA: DATA,
  });
}

export function failureResponse(message: string, res: Response) {
  res.status(RESPONSE_STATUS_CODES.INTERNAL_SERVER_ERROR).json({
    STATUS: 'FAILURE',
    MESSAGE: message,
  });
}

export function insufficientParameters(res: Response) {
  res.status(RESPONSE_STATUS_CODES.BAD_REQUEST).json({
    STATUS: 'FAILURE',
    MESSAGE: 'Insufficient parameters',
    DATA: {},
  });
}

export function duplicateDocuments(res: Response) {
  res.status(RESPONSE_STATUS_CODES.DUPLICATE).json({
    STATUS: 'FAILURE',
    MESSAGE: 'Duplicate Documents',
    SUCCESS: false,
    DATA: {},
  });
}

export function mongoError(err: any, res: Response) {
  res.status(RESPONSE_STATUS_CODES.INTERNAL_SERVER_ERROR).json({
    STATUS: 'FAILURE',
    MESSAGE: 'MongoDB error',
    DATA: err,
  });
}

export function notfoundDocument(res: Response) {
  res.status(RESPONSE_STATUS_CODES.INTERNAL_SERVER_ERROR).json({
    STATUS: 'FAILURE',
    MESSAGE: 'Not Data Found',
    SUCCESS: false,
  });
}

export function forbiddenError(res: Response, message: string) {
  res.status(RESPONSE_STATUS_CODES.FORBIDDEN).json({
    STATUS: 'FORBIDDEN',
    MESSAGE: message,
    SUCCESS: false,
  });
}

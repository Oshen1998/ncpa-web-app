import { Response } from 'express';
import { RESPONSE_STATUS_CODES } from './common-status-codes';

export function successResponse(message: string, DATA: any, res: Response) {
  res.status(RESPONSE_STATUS_CODES.SUCCESS).json({
    STATUS: 'SUCCESS',
    MESSAGE: message,
    SUCCESS: true,
    DATA,
  });
}

export function failureResponse(message: string, DATA: any, res: Response) {
  res.status(RESPONSE_STATUS_CODES.SUCCESS).json({
    STATUS: 'FAILURE',
    MESSAGE: message,
    DATA,
  });
}

export function insufficientParameters(res: Response) {
  res.status(RESPONSE_STATUS_CODES.BAD_REQUEST).json({
    STATUS: 'FAILURE',
    MESSAGE: 'Insufficient parameters',
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

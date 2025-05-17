/**
 * HTTP STATUS CODES - QUICK REFERENCE
 * Usage: Import this file for easy status code reference
 */
const { statusCodes, httpResponse } = require('./utils/httpStatusCodes');
const statusCodes = {
    // 1xx: Informational
    100: 'Continue',
    101: 'Switching Protocols',
  
    // 2xx: Success
    200: 'OK',
    201: 'Created',
    202: 'Accepted',
    204: 'No Content',
    206: 'Partial Content',
  
    // 3xx: Redirection
    301: 'Moved Permanently',
    302: 'Found (Temporary Redirect)',
    304: 'Not Modified',
    307: 'Temporary Redirect',
    308: 'Permanent Redirect',
  
    // 4xx: Client Errors
    400: 'Bad Request',
    401: 'Unauthorized',
    403: 'Forbidden',
    404: 'Not Found',
    405: 'Method Not Allowed',
    408: 'Request Timeout',
    409: 'Conflict',
    429: 'Too Many Requests',
  
    // 5xx: Server Errors
    500: 'Internal Server Error',
    501: 'Not Implemented',
    502: 'Bad Gateway',
    503: 'Service Unavailable',
    504: 'Gateway Timeout',
    507: 'Insufficient Storage',
  
    // Helper Methods
    isInformational: (code) => code >= 100 && code < 200,
    isSuccess: (code) => code >= 200 && code < 300,
    isRedirect: (code) => code >= 300 && code < 400,
    isClientError: (code) => code >= 400 && code < 500,
    isServerError: (code) => code >= 500 && code < 600,
  
    // Common REST Responses
    REST: {
      GET_SUCCESS: 200,
      POST_SUCCESS: 201,
      PUT_SUCCESS: 200,
      DELETE_SUCCESS: 204,
      NOT_FOUND: 404,
      BAD_REQUEST: 400,
      UNAUTHORIZED: 401,
      FORBIDDEN: 403,
      CONFLICT: 409,
      SERVER_ERROR: 500
    }
  };
  
  /**
   * Express.js Middleware for Standardized Responses
   */
  const httpResponse = (res, code, data = null) => {
    const message = statusCodes[code] || 'Unknown Status';
    const response = { status: code, message };
    
    if (data) response.data = data;
    if (statusCodes.isClientError(code) || statusCodes.isServerError(code)) {
      response.success = false;
    } else {
      response.success = true;
    }
  
    return res.status(code).json(response);
  };
  
  // Example usage:
  // httpResponse(res, 404, { error: 'User not found' });
  
  module.exports = { statusCodes, httpResponse };
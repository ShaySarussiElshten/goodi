import { Freeze } from './interfaces';

interface UserLanguageType {
  HEBREW: string;
  ENGLISH: string;
}
const userLanguage: UserLanguageType = {
  HEBREW: 'he',
  ENGLISH: 'en-US',
};
export const USER_LANGUAGE: Freeze<UserLanguageType> = userLanguage;

interface ProcessEnvType {
  PRODUCTION: string;
  DEVELOPMENT: string;
}

const processEnv: ProcessEnvType = {
  PRODUCTION: 'production',
  DEVELOPMENT: 'development',
};
export const PROCESS_ENV: Freeze<ProcessEnvType> = processEnv;

interface ApiResponseType {
  OK: number;
  BAD_REQUEST: number;
  UN_AUTHORIZED: number;
  FORBIDDEN: number;
  NOT_FOUND: number;
  NOT_ALLOWED: number;
  CONFLICT: number;
  ERROR: number;
  UN_SUPPORTED_MEDIA_TYPE: number;
  REQUEST_CANCELLED: string;
}
const apiResponses: ApiResponseType = {
  OK: 200,
  BAD_REQUEST: 400,
  UN_AUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  NOT_ALLOWED: 405,
  CONFLICT: 409,
  ERROR: 500,
  UN_SUPPORTED_MEDIA_TYPE: 415,
  REQUEST_CANCELLED: 'REQUEST_CANCELLED',
};

export const API_RESPONSES: Freeze<ApiResponseType> = apiResponses;

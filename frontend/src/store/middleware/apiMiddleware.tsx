import { API_RESPONSES } from '../../constants';


const apiResponseMiddleware = ({ dispatch }:any) => (next:any) => (action:any) => {
  if (action.isApiCall) {
    switch (action.status) {
      case API_RESPONSES.REQUEST_CANCELLED: {
        action.type += '_REQUEST_CANCELLED';
        break;
      }
      case API_RESPONSES.OK: {
        // next(action)
        console.log("hey the respone works and pass through api middleware");
        break;
      }
      case API_RESPONSES.UN_AUTHORIZED: {
        action.type = 'UN_AUTHORIZED';
        //next(logout());
        break;
      }
      case API_RESPONSES.CONFLICT:
      case API_RESPONSES.BAD_REQUEST:
      case API_RESPONSES.NOT_ALLOWED:
      case API_RESPONSES.FORBIDDEN:
      case API_RESPONSES.ERROR:
      case API_RESPONSES.UN_SUPPORTED_MEDIA_TYPE:
      case API_RESPONSES.NOT_FOUND: {
        action.type += '_ERROR';
        //dispatch(toggleSnackbarOpen(action?.payload?.errorKey));
        break;
      }
      default:
        break;
    }
  }
  next(action);
};

export default apiResponseMiddleware;

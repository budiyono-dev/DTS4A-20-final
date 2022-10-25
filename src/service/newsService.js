import { doGet, doGetUUID } from "../auth/news";
import { newsUrl, apiKey, newsUUID, topStoriesUrl } from "../constant/apiConstant";
import { pageLoading } from "../reducers/pageReducer";

// import { setTableLoading } from '../../../store/reducers/page.reducer'
// import {checkValidationToken} from '../../../utils/errorHandler'

export const getList = async (page, limit, dispatch, search, categories, language) => {
  let result = { list: undefined, initiate: undefined, ok: false };

  const url = `${newsUrl}api_token=${apiKey}`;
  const params = { page, limit, search, categories, language };
  dispatch(pageLoading(true));

  try {
    const response = await doGet(url, params)

    if (response) {
      dispatch(pageLoading(false))
      result.ok = true
      result.initiate = response.data.meta
      result.list = response.data.data


    }
  } catch (error) {
    console.log(error);
    dispatch(pageLoading(false))
    // checkValidationToken(error, token, refresh_token, dispatch)
    // waiting component toast
  }
  return result;
};

export const getUUID = async (uuid) => {
  let result = { response_success_mapping: null, response_error_mapping: null, list: {} };
  try {
    const url = `${newsUUID}${uuid}?api_token=${apiKey}`;
    const response = await doGetUUID(url);
    if (response) {
      result.response_success_mapping = response.status;
      result.list = response.data;
      return result;
    }
  } catch (error) {
    result.response_error_mapping = error.message;
    return result;
  }
};


export const getTopStories = async (page, search, categories) => {
  let result = { list: undefined, initiate: undefined, ok: false }

  try {
    let limit = 5;
    let language = 'en';
    const url = `${topStoriesUrl}api_token=${apiKey}`
    const params = { page, limit, search, categories, language }
    const response = await doGet(url, params)
    if (response) {
      result.ok = true
      result.initiate = response.data.meta
      result.list = response.data.data
    }
    return result;
  } catch (error) {
    return result
  }
}

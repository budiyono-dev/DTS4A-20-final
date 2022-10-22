import {doGet} from '../auth/news'
import { newsUrl, apiKey } from '../constant/apiConstant'


// import { setTableLoading } from '../../../store/reducers/page.reducer'
// import {checkValidationToken} from '../../../utils/errorHandler'

export const getList = async (page, limit, filter) => {
  let result = {list: undefined, initiate: undefined, ok: false}
  
  const url = `${newsUrl}api_token=${apiKey}`
  const params = {page, limit, filter}

//   dispatch(setTableLoading(true))
  try {
    const response = await doGet( url, params)
    
    if (response) {
      result.ok = true
      result.list = response.data.data
    console.log(response);
      
    }
  } catch (error) {
      console.log(error);
    // checkValidationToken(error, token, refresh_token, dispatch)
    // waiting component toast
  }
  return result
}

import {doGet} from '../auth/news'
import { newsUrl, apiKey } from '../constant/apiConstant'
import { pageLoading } from '../reducers/pageReducer'


// import { setTableLoading } from '../../../store/reducers/page.reducer'
// import {checkValidationToken} from '../../../utils/errorHandler'

export const getList = async (page, limit,dispatch, search) => {
  
  let result = {list: undefined, initiate: undefined, ok: false}
  
  const url = `${newsUrl}api_token=${apiKey}`
  const params = {page, limit, search}
  dispatch(pageLoading(true))


  try {
    const response = await doGet( url, params)
    
    if (response) {
      dispatch(pageLoading(false))
      result.ok = true
      result.initiate= response.data.meta
      result.list = response.data.data
    
      
    }
  } catch (error) {
      console.log(error);
      dispatch(pageLoading(false))

    // checkValidationToken(error, token, refresh_token, dispatch)
    // waiting component toast
  }
  return result
}

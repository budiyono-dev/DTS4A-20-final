

const INITIAL_STATE = {
    is_authenticated: false,

}

const auth = (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {

    case "AUTH":
      return { ...state, is_authenticated: payload}

    default: 
      return state
  }
}

export default auth
  
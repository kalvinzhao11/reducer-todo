export const initialState = {
    todo: {
        item: '',
        completed: false,
        id: 1
      },
    list: []
}

export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TASK":
            return {...state, todo: {item: action.payload, completed: false, id: new Date().getUTCMilliseconds() + Math.random()*1000}}
        case "ADD_TO_LIST":
            return {...state, list: [...state.list, action.payload]}
        case "TOGGLE_COMPLETE":
            return (
                {...state, list: state.list.map(item => {
                    if (item.id === action.payload) {
                        return {...item, completed: !item.completed}
                    } else {
                        return item
                    }
                })}
            )
        case 'REMOVE_COMPLETED':
            return {...state, list: state.list.filter(item => {
                return item.completed === false
            })}
        default:
            return state
    }
}

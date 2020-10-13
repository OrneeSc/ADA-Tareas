export const ACTION_ADD = "ADD"
export const ACTION_EDIT = "EDIT"

export const reducer = (state, action) => {
    switch (action.type) {
        case ACTION_ADD:
            return [...state, action.payload]
        case ACTION_EDIT:
            return state.map(user => {
                console.log('esto me da', user)
                if(user.userId === action.payload.id) {
                    user.name = action.payload.editName;
                    user.adress = action.payload.editAdress;
                    user.category = action.payload.editCategory
                    }
                return user
            })
        default:
            return state
    }
}
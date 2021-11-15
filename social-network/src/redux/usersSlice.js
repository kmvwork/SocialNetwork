import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    userLogged: false,
    currentUser: {
        uid: '',
        name: '',
        secondName: '',
        email: '',
        password: '',
    }
}

export const usersSlice = createSlice({
    name: 'users',
    initialState: initialState,
    reducers: {
        signIn: state => state.userLogged = true,
        signOut: state => state.userLogged = false,
    },
})

export const {signIn} = usersSlice.actions
export default usersSlice.reducer
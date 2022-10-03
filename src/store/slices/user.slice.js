import { createSlice } from '@reduxjs/toolkit';


export const userSlice = createSlice({
	name: 'user',
    initialState: "",
    reducers: {
        pokeUser: (state, action) => {
            return action.payload
        }
    }
})

export const { pokeUser } = userSlice.actions;

export default userSlice.reducer;
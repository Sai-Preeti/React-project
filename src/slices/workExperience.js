import { createSlice } from '@reduxjs/toolkit'
export const workExperience = createSlice({
    name: "work",
    initialState: {
        user1: null
    },
    reducers: {
        setWorkExperience: (state, action) => {
            console.log("setting state.user to :", action.payload)
            state.user1 = action.payload
        }
    }
})
export const { setWorkExperience } = workExperience.actions
export default workExperience.reducer
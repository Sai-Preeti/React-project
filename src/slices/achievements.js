import { createSlice } from '@reduxjs/toolkit'
export const achievements = createSlice({
    name: "basic",
    initialState: {
        user: null
    },
    reducers: {
        setAchievements: (state, action) => {
            console.log("sessting state.user to :", action.payload)
            state.user = action.payload
        }
    }
})
export const { setAchievements } = achievements.actions
export default achievements.reducer
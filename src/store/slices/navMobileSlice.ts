import { createSlice } from "@reduxjs/toolkit"

interface NavMobileState {
    showNav: boolean
}

const navMobileSlice = createSlice({
    name: "navMobile",
    initialState: {
        showNav: false,
    },
    reducers: {
        setShowNav: (state: NavMobileState, action: { payload: boolean}) => {
            state.showNav = action.payload
        }
    }
})

export default navMobileSlice.reducer
export const {
    setShowNav
} = navMobileSlice.actions
export const selectShowNav = (state: { navMobile: NavMobileState}) => state.navMobile.showNav
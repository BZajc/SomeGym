import { createSlice } from "@reduxjs/toolkit";

interface NavDesktopState {
  showNav: boolean;
}

const navDesktopSlice = createSlice({
  name: "navDesktop",
  initialState: {
    showNav: false,
  },
  reducers: {
    setShowNav: (state: NavDesktopState, action: { payload: boolean }) => {
      state.showNav = action.payload;
    },
  },
});

export default navDesktopSlice.reducer;
export const { setShowNav } = navDesktopSlice.actions;
export const selectShowNav = (state: { navDesktop: NavDesktopState}) => state.navDesktop.showNav
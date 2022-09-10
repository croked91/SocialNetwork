import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { dialogsReducer } from "./dialogsReducer";
import { profileReducer } from "./profileReducer";
import { sidebarReducer } from "./sidebarReducer";
import { usersReducer } from "./usersReducer";

export type ReduxStoreType = ReturnType<typeof reducers>

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    userPage: usersReducer
})

export const store = configureStore({
    reducer: reducers,
});
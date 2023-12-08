import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";


const persistConfig = {
    key: 'root',
    storage,
}


const rootReducer = combineReducers({
    user: userReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
    reducer: persistedReducer
})

const persistor = persistStore(store);


export { store, persistor };

// const store = configureStore({
//     reducer: {
//         user: userReducer
//     }
// });

// export default store;
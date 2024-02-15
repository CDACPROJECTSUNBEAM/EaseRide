import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers";
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import { thunk } from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
    key: "root",
    version: 1,
    storage
}

const persistedReducer = persistReducer(persistConfig, reducers);

let store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(logger, thunk))
);

export default store;


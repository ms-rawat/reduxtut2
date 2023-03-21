import { createStore } from "redux";
import Rootreducer from "./reducers";

const store = createStore(Rootreducer)

export default store;
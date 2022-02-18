import { configureStore } from "@reduxjs/toolkit";
import headerSlice from "./header";
 import mainSlice from "./main"
 import countSlice from "./count"
const store = configureStore({
  reducer: {
    header: headerSlice,
     main: mainSlice,
     count: countSlice,
     
},
});
export default store;

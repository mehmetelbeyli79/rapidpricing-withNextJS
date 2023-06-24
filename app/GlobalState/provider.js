"use client";
/* Önceden direkt olarak react içinde provide edebiliyorduk şimdi ise Next js en üstte server-side çalıştığından
mecburen use client ile çalışan bir provider oluşturduk.
*/
import { Provider } from "react-redux";
import {store} from "./store";
export function Providers({children}){
    return(
        <Provider store={store}>
            {children}
        </Provider>
    )
}
import React from "react";
import { wrapper } from "../redux/store"

const MyApp = ({Component, PageProps}) =>(
    <Component {...PageProps} />
)

export default wrapper.withRedux(MyApp);
import "../app/globals.css";
import store from "@/app/store";
import FixedMenu from "@/widget/fixedMenu";
import React from "react";
import { Provider } from "react-redux";

interface Props {
  Component: typeof React.Component,
  pageProps: object,
}

export default function App({Component, pageProps}: Props) {
	return <Provider store={store}>
		<Component {...pageProps}/>
		<FixedMenu />
	</Provider>
};
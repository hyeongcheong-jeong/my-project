import "@/app/globals.css";
import store from "@/app/store";
import React from "react";
import { Provider } from "react-redux";

interface Props {
  Component: typeof React.Component,
  pageProps: object,
}

export default function App({Component, pageProps}: Props) {
	return <Provider store={store}>
		<Component {...pageProps}/>
	</Provider>
};
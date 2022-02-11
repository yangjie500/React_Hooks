import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import App2 from './useReducer(complex)';
import AppContext from "./context/useContext";
import UseMultReducer from './UseMultReducer';
import ReducerAndContext from './useReducerContext/ReducerAndContext';
import UseReducerData from './UseReducerData';
import UseCallback from './useCallback/UseCallback';
import UseMemo from './useMemo/UseMemo';
import UseRef from './useRef/UseRef';
import UseRefTimer from './useRef/UseRefTimer';
import CustomInput from './customHook/CustomInput';

ReactDOM.render(
  <React.StrictMode>
    {/* <AppContext /> */}
    {/* <App2 /> */}
    {/* <UseMultReducer /> */}
    {/* <ReducerAndContext /> */}
    {/* <UseReducerData /> */}
    {/* <UseCallback /> */}
    {/* <UseMemo /> */}
    {/* <UseRef /> */}
    {/* <UseRefTimer /> */}
    <CustomInput />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MainLayout from "./components/MainLayout";
import MainPage from "./routes/MainPage";
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import { createTheme, ThemeProvider } from "@material-ui/core";

const theme = createTheme({
    palette: {
        primary: {
            light: '#bac76b',
            main: '#84b75a',
            dark: '#6ca042'
        },
    },
    overrides: {
        MuiButtonBase: {
            root: {
                justifyContent: 'flex-start',
            },
        },
        MuiButton: {
            root: {
                textTransform: undefined,
                padding: '12px 16px',
            },
            startIcon: {
                marginRight: 8,
            },
            endIcon: {
                marginLeft: 8,
            },
        },
    },
});


const withLayout = (Component: any) => (props :any) => (
    <MainLayout>
        <Component {...props} />
    </MainLayout>
);

const Mint = withLayout(() => <App />);
const Main = withLayout(() => <MainPage />);

ReactDOM.render(
      <ThemeProvider theme={theme}>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Main />}  />
              <Route path="mint" element={<Mint />} />
          </Routes>
      </BrowserRouter>
      </ThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

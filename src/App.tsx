import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Routes from './routes';
import GlobalStyles from './styles/global';

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
        <GlobalStyles />
        <Routes />
        <ToastContainer autoClose={3000} />
    </BrowserRouter>
  );
};

export default App;

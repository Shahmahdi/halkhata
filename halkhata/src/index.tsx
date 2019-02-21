import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import '../node_modules/tachyons/css/tachyons.min.css';
import 'semantic-ui-css/semantic.min.css';
import { Provider } from 'mobx-react';
import Store from './store/Stores';

const store = Store.create();

if (window) {
  // tslint:disable-next-line:no-any
  (window as any).store = store;
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider as ReduxProvider } from 'react-redux';
import { store, persistedStore } from './store';
import { appRouter } from './appRouter';
import './global.styles.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        <RouterProvider router={appRouter()} />
      </PersistGate>
    </ReduxProvider>
  </React.StrictMode>,
);

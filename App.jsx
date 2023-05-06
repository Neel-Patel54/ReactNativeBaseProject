import React, {useEffect} from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './src/redux/store';
import AppContainer from './src/AppContainer';
// import SplashScreen from 'react-native-splash-screen';

const App = () => {

  // useEffect(() => {
  //   SplashScreen.hide();
  // }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
          <AppContainer/>
      </PersistGate>
    </Provider >
  );
};

export default App;

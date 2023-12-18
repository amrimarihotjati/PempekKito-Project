// import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Provider, useSelector } from 'react-redux';
import store from './redux/store';
import Router from './router';
import FlashMessage from 'react-native-flash-message';
import { Loading } from './components';

const MainApp = () => {
  const { isLoading } = useSelector((state: any) => state.globalReducer)

  return (
    <NavigationContainer>
      <Router />
      <FlashMessage position="top" />
      {isLoading && <Loading />}
    </NavigationContainer>
  )
}

function App(): React.JSX.Element {

  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
}

export default App;

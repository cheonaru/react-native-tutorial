import React, {Component} from 'react';
import {View, Text} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// import {Provider} from 'react-redux';
// import {createStore} from 'redux';

// import MainView from './rncomponents/MainView';
// import SubView from './rncomponents/SubView';
// import rootReducer from './myredux/rootReducer';

// import Products from './Products';
// import FetchView from './exam/FetchView';
import SearchScreen from './screens/SearchScreen';
import MoviesListScreen from './screens/MoviesListScreen';
import MovieDetailScreen from './screens/MovieDetailScreen';
const Stack = createStackNavigator();
// const store = createStore(rootReducer);
// const App=()=>{
class App extends Component {
  render(){
    return (
      // <NavigationContainer>
      //   <Stack.Navigator>
      //     <Stack.Screen name="MainView" component={MainView} />
      //     <Stack.Screen name="SubView" component={SubView} />
      //   </Stack.Navigator>
      // </NavigationContainer>
      // <Provider store={store}>
      //   <Products />
      // </Provider>
      // <FetchView />
      // <SearchScreen />
      // <MoviesListScreen />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="SearchScreen" component={SearchScreen} />
          <Stack.Screen name="MoviesListScreen" component={MoviesListScreen} />
          <Stack.Screen name="MovieDetailScreen" component={MovieDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
  }
}

export default App;
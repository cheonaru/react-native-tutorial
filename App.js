import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View, Text } from 'react-native';

//서드파티이기 때문에 import를 통한 사용
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Products from './Products';

// import MyComponent from './MyComponent';
// import MyComponent from './myjsx/MyComponent';
// import MyStateComponent from './myjsx/MyStateComponent';
//import MyImageComponent from './rncomponent/MyImageComponent';
import MainView from './rncomponent/MainView';
import SubView from './rncomponent/SubView';
import rootReducer from './myredux/rootReducer';


// class App extends React.Component {
//   name = 'hahaha';
//   num = Math.ceil(Math.random()*100);
//   render(){
//     return (
//       <View>
//         {/* 코맨트를 넣을 수 있다.*/}
//       <View>
//         <Text>Hi~~~ Hello</Text>
//         <Text style={{backgroundColor:(this.num>50 ? 'red': 'cyan')}}>안녕하세요!</Text>
//         <Text>{this.num}</Text>
//       </View>
//       <View></View>
//       </View>
//     );
//   }
// }

// function App() {
//   return (
//     <View><Text>Function Style Hello!</Text></View>
//   )
// }

//const Stack = createStackNavigator();
const store = createStore(rootReducer);
class App extends Component{
  render(){
    return (
      // //<MyComponent name="hahajava">Hi Hello!</MyComponent>
      // // <MyStateComponent />
      // <NavigationContainer>
      //   <Stack.Navigator>
      //     <Stack.Screen name="MainView" component={MainView} />
      //     <Stack.Screen name="SubView" component={SubView} />
      //   </Stack.Navigator>
      // </NavigationContainer>
      // // <SubView />
      <Provider store={store}>
        <Products />
      </Provider>
    );
  }
}

export default App;
import 'react-native-gesture-handler';
import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {ThemeProvider} from 'styled-components';

import DetailView from './Detail';
import SearchView from './Search';
import FavoriView from './Favorite';
import HistoryView from './History';
import TabBar from '../components/tab-bar';
import {SafeAreaView} from 'react-native';
import Box from '../components/box';
import theme from '../utils/theme';

const Tab = createBottomTabNavigator();

const HomeStack = createStackNavigator();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box flex={1} as={SafeAreaView}>
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Search"
            tabBar={(props) => <TabBar {...props} />}>
            <Tab.Screen name="History" component={HistoryView} />
            <Tab.Screen name="Search" component={SearchStack} />
            <Tab.Screen name="Favori" component={FavoriView} />
          </Tab.Navigator>
        </NavigationContainer>
      </Box>
    </ThemeProvider>
  );
}

function SearchStack() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Search" component={SearchView} />
      <HomeStack.Screen name="Detail" component={DetailView} />
    </HomeStack.Navigator>
  );
}

export default App;

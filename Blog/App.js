import { StyleSheet } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/Screens/HomeScreen';
import { Provider as BlogProvider } from './src/context/BlogContext';
import TestView from './src/Screens/test';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <BlogProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            title: 'Blog',
          }}
        >
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'Home' }} // Optional: set a custom title for this screen
          />
          <Stack.Screen
            name="Test"
            component={TestView}
            options={{ title: 'Test' }} // Optional: set a custom title for this screen
          />
        </Stack.Navigator>
      </NavigationContainer>
    </BlogProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

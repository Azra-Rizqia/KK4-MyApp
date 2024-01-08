import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './components/pages/loginScreen';
import Register from './components/pages/registerScreen';
import Porto from './components/pages/portoScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MyApp">
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Porto" component={Porto} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
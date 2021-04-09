import 'react-native-gesture-handler';
import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer, RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  Navigator,
  RootParamList,
  Screen,
} from './navigations/RootStackNavigator';

type Props = {
  navigation: StackNavigationProp<RootParamList>;
  route: RouteProp<RootParamList, 'Tech'>;
};
function HomeScreen({navigation, route}: Props) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title={'Go back'}
        onPress={() => navigation.push('Tech')}></Button>
    </View>
  );
}

function SecondScreen({navigation, route}: Props) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Second Screen</Text>
      <Button
        title={'Go back'}
        onPress={() => navigation.push('ProductsScreen')}></Button>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Tech" component={SecondScreen} />
        <Screen name="ProductsScreen" component={HomeScreen} />
      </Navigator>
    </NavigationContainer>
  );
}

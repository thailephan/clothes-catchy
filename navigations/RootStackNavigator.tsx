import {createStackNavigator} from '@react-navigation/stack';

export type RootParamList = {
  BookList: {paramA: string};
  ProductsScreen: undefined;
  Tech: undefined;
};

const Root = createStackNavigator<RootParamList>();

export const {Navigator, Screen} = Root;

export default Root;

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ManageExpenses from './screens/ManageExpenses';
import RecentExpenses from './screens/RecentExpenses';
import AllExpenses from './screens/AllExpenses';
import {GlobalStyle} from './constants/style';
import {Ionicons} from '@expo/vector-icons';
import AddButton from './component/UI/AddButton';
import ExpenseContext from './store/Expense-Context';

const Stack = createNativeStackNavigator();
const BottonTabs = createBottomTabNavigator();

function ExpensesOverview() {
  return (
    <BottonTabs.Navigator screenOptions={({navigation})=>({headerStyle:{backgroundColor:GlobalStyle.colors.color1},
    headerTitleAlign:'center',
    headerTintColor:'white',
    tabBarStyle:{backgroundColor:GlobalStyle.colors.color1},
    tabBarActiveTintColor:'white',
    tabBarActiveBackgroundColor:GlobalStyle.colors.color2,
    tabBarInactiveTintColor:'white',
    headerRight:({tintColor})=><AddButton name='add' color={tintColor} size={24} 
    onPress={()=>{navigation.navigate('ManageExpenses')}}/>
  })}>
      <BottonTabs.Screen name="RecentExpenses" component={RecentExpenses} 
      options={{title:'Recent Expenses',
      tabBarLabel:'Recent',
      tabBarIcon:({color,size})=><Ionicons name='hourglass' color={color} size={size}/> }}/>
      <BottonTabs.Screen name="AllExpenses" component={AllExpenses} 
      options={{title:'All Expenses',
      tabBarLabel:'All',
      tabBarIcon:({color,size})=><Ionicons name='calendar' color={color} size={size}/> }}
      />
      
    </BottonTabs.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <ExpenseContext>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerStyle:{backgroundColor:GlobalStyle.colors.color1}, headerTintColor:'white'}}>
          <Stack.Screen name="ExpensesOverview" component={ExpensesOverview} options={{headerShown:false,}} />
          <Stack.Screen name="ManageExpenses" component={ManageExpenses} />

        </Stack.Navigator>
      </NavigationContainer>
      </ExpenseContext>
    </>
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

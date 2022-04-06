import {createStackNavigator} from "react-navigation";
import HomeScreen from "../view/HomeScreen";
import DetailScreen from "../view/DetailScreen";

const AppNavigator = createStackNavigator({
Home:{
    screen:HomeScreen,
    navigationOptions:{title:'Home'}
},
Details:{
    screen:DetailScreen,
    navigationOptions:{title:'Details'}
}
},
{
    initialRouteName:"Home"

})

export default AppNavigator;
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListScreenComponent from "./src/screens/ListScreen";
import ImagesListScreen from "./src/screens/ImagesListScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColorsScreen from "./src/screens/ColorsScreen";
import ColorManagementScreen from "./src/screens/ColorManagementScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreenComponent,
    Images: ImagesListScreen,
    Counter: CounterScreen,
    Colors: ColorsScreen,
    ColorManagement: ColorManagementScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);

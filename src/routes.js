import { createStackNavigator, createAppContainer } from 'react-navigation';

import LoginScreen from './pages/loginScreen';
import LoginMethod from './pages/loginScreen/LoginMethod';
import FaceRecognition from './pages/faceRecognition';
import WelcomeScreen from './pages/welcomeScreen';
import ActionScreen from './pages/actionScreen';
import MapScreen from './pages/mapScreen';
import ExamSelect from './pages/examSelect';
import DaySelect from './pages/daySelect';

const AppNavigator = createStackNavigator(
  {
    Login: LoginScreen,
    LoginMethod,
    FaceRecognition,
    Welcome: WelcomeScreen,
    Action: ActionScreen,
    Map: MapScreen,
    Exam: ExamSelect,
    Day: DaySelect,
  },
  {
    initialRouteName: 'Welcome',
    headerMode: 'none',
  },
);

export default createAppContainer(AppNavigator);

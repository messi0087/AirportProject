import {AppRegistry} from 'react-native';
import Main from './src/main/main';
import {name as appName} from './app.json';

console.ignoredYellowBox = ['Warning: BackAndroid is deprecated. Please use BackHandler instead.','source.uri should not be an empty string','Invalid props.style key'];

console.disableYellowBox = true;


AppRegistry.registerComponent(appName, () => Main);

/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Navigator from './src/Navigator'
import Feed from './src/screens/Feed'
import App from './src/app'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

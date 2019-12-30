/**
 * @format
 */

import { AppRegistry, YellowBox } from 'react-native';
import Index from '~/';
import { name as appName } from './app.json';

YellowBox.ignoreWarnings(['Require cycle:', 'Remote debugger']);

AppRegistry.registerComponent(appName, () => Index);

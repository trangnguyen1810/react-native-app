/**
 * @format
 */

import { AppRegistry } from 'react-native';
// import App from './App';
import { name as appName } from './app.json';
import PizzaTranslator from './app/components/PizzaTranslator';

AppRegistry.registerComponent(appName, () => PizzaTranslator);

import {
  Text,
  View,
} from 'react-native';
import { hello } from '../hello.js';
export function Hello({name}){
    // processing
    let sHello = hello(name);
    // output jsx to be displayed
    
    return(
        <View>
            <Text>hello({name?`"${name}"`:""}) returned {hello(name)}</Text>
        </View>
    );
}
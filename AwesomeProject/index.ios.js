/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image,
 TabBarIOS,
 NavigatorIOS
} from 'react-native';


class AwesomeProject extends Component {
  render() {

var movie = MOCKED_MOVIES_DATA[0];
    return (
      // <TabBarIOS>
      //   <TabBarIOS.Item title = "React Native1" select  = {true}>
      //   </TabBarIOS.Item>
      //
      //   <TabBarIOS.Item title = "React Native2" select  = {false}>
      //   </TabBarIOS.Item>
      //
      //   <TabBarIOS.Item title = "React Native3" select  = {false}>
      //    </TabBarIOS.Item>
      // </TabBarIOS>

      <View style={styles.container}>
        <Text style={styles.welcome}>
          React-Native 入门学习
        </Text>

        <Text>{movie.title}</Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Image source = {{uri:movie.poster.thumbnail}} />
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <View style = {styleAAAA.background}>
          <Text style = {styleAAAA.base,styleAAAA.active}>lalala</Text>
        </View>
       </View>
    );

  }
}



    var MOCKED_MOVIES_DATA = [
      {title:'标题',year:'2015',poster:{thumbnail:'http://i.imgur.com/UePbdph.jpg'}}
    ];

var styleAAAA = StyleSheet.create({
  base :{
    width:38,
    height:38,
  },
  background:{
    backgroundColor:'#666666',
  },
  active:{
    borderWidth:2,
    borderColor:'#00ff00',
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color :'red'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);

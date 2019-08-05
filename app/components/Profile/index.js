import React from 'react';
import { Button } from 'react-native';

class ProfileScreen extends React.Component {
    static navigationOptions = {
      title: 'Welcome',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <Button
          title="Go to Jane's home"
          onPress={() => navigate('Home', {name: 'Jane'})}
        />
      );
    }
  }
  export default ProfileScreen;
import {View, Text, Touchable, TouchableOpacity} from 'react-native';
import React from 'react';
import homeStyle from '../../style/homeComponentStyle';
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = ({route, navigation}) => {
  const {email, pass} = route.params;
  console.log(route);
  console.log(navigation);
  return (
    <View style={{flex: 1}}>
      <View style={homeStyle.view}>
        <Text style={homeStyle.text}>Home Screen</Text>
        <View style={[homeStyle.getText, homeStyle.getTextView]}>
          <Text style={[homeStyle.getText, homeStyle.getTextEmail]}>
            Email : {email}
          </Text>
          <Text style={[homeStyle.getText, homeStyle.getTextPass]}>
            Password : {pass}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => props.navigation.openDrawer}
          activeOpacity={0.7}
          style={homeStyle.button}>
          {console.log('nav-----------', navigation.openDrawer)}
          <Text>Open Drawer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// const Home = props => {
//   console.log(props.route.params);
//   const {email, pass} = props.route.params;
//   return (
//     <View style={homeStyle.view}>
//       <Text style={homeStyle.text}>Home Screen</Text>
//       <View style={[homeStyle.getText, homeStyle.getTextView]}>
//         <Text style={[homeStyle.getText, homeStyle.getTextEmail]}>
//           Email : {email}
//         </Text>
//         <Text style={[homeStyle.getText, homeStyle.getTextPass]}>
//           Password : {pass}
//         </Text>
//       </View>
//     </View>
//   );
// };

export default Home;

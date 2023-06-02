import {View, Text} from 'react-native';
import React from 'react';
import homeStyle from '../../style/homeComponentStyle';
import 'react-native-gesture-handler';
import DrawerNavigation from '../../navigationComponent/DrawerNavigation';

const Home = () => {
  return (
    <View style={{flex: 1}}>
      <DrawerNavigation />
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

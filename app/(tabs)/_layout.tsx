import { View, Text,Image } from 'react-native'
import {Tabs} from 'expo-router'
import Colors from '@/constants/Colors'
import { Octicons, Feather } from '@expo/vector-icons';
import profileIcon from '@/assets/images/profile-icon.png';
import { impactAsync, ImpactFeedbackStyle } from 'expo-haptics';

const Layout = () => {
  return (
 <Tabs screenOptions={{
  tabBarActiveTintColor: Colors.purple,
  tabBarInactiveTintColor: Colors.C250,
  headerShown: false,
  tabBarLabelStyle: {
     fontFamily: 'nun-semibold',
     fontSize: 12,},
     tabBarStyle:{
      paddingBottom: 10,
      paddingTop: 10,
      height: 65,
     }
  }}>
<Tabs.Screen
  name="index"
  options={{
    tabBarLabel: 'leçons',
    tabBarIcon: ({ color, size }) => <Octicons name="home" size={size} color={color} />
  }}
  listeners={() => ({
    tabPress: () => {
      impactAsync(ImpactFeedbackStyle.Light);
    }
  })}
/>
  <Tabs.Screen name="courses" options={{ 
    tabBarLabel: 'sommaire',
    tabBarIcon: ({color,size}) =>
    <Feather name="bookmark" size={size} color={color}/>
  }}
  listeners={() => ({
    tabPress: () => {
      impactAsync(ImpactFeedbackStyle.Light);
    }
  })}
  />
    <Tabs.Screen name="profile" options={{ 
    tabBarLabel: 'profil',
    tabBarIcon: ({color,size}) =>
    <Image
        source={profileIcon}
        style={{ width: size, height: size, tintColor: color }}
      />
    }}
    listeners={() => ({
      tabPress: () => {
        impactAsync(ImpactFeedbackStyle.Light);
      }
    })}/>
 </Tabs>
  )
}

export default Layout
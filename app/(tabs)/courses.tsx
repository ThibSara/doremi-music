import { View, Text, StyleSheet,Dimensions } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors'
import Summary from '@/components/Summary'


const Course = () => {
  return (
 <View>
    <View style={styles.container}>

      <Summary/>
      </View>
 </View>
  )
}


const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: Dimensions.get('window').height * 0.05,
  },
  heading: {
    paddingBottom: Dimensions.get('window').height * 0.02,
    borderBottomColor: Colors.C200,
    borderBottomWidth: 1,
  },
})

export default Course
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { supabase } from '../supabase';


export default function HomeScreen({ navigation }) {

  return (
    <View>
      <Text>Only authed users should see this screen!!!</Text>
    </View>
  )
}
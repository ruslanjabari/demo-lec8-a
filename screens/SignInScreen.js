import * as React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { supabase } from '../supabase';

export default function SignInScreen({ navigation }) {


  return (
    <View>
    <TextInput
        style={styles.textinput}
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
      />
      <TextInput
        style={styles.textinput}
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
      />

      <Button title="Register User" onPress={signUpUser}/>
      <Button title="Login User" onPress={loginUser}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textinput: {
    borderWidth: 1,
    margin: 10,
  }
});
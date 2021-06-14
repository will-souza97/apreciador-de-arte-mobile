import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useAuth } from '../../../contexts/auth';
import styles from './styles';

const Signin: React.FC = () => {
  const { signIn } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { navigate } = useNavigation();

  async function handleSubmit() {
    await signIn({ email, password });
  }

  function handleNavigationSignup() {
    navigate('SignUp');
  }

  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <Text>Email</Text>
        <TextInput
          autoCorrect={false}
          autoCapitalize="none"
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder="Informe seu e-mail"
          placeholderTextColor="#c1bccc"
        />
      </View>

      <View style={styles.input}>
        <Text>Password</Text>
        <TextInput
          autoCorrect={false}
          autoCapitalize="none"
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
          placeholder="Informe sua senha"
          placeholderTextColor="#c1bccc"
        />
      </View>

      <RectButton onPress={handleSubmit} style={styles.button}>
        <Text style={{ color: '#fff' }}>Entrar</Text>
      </RectButton>

      <TouchableOpacity onPress={handleNavigationSignup} style={styles.signup}>
        <Text style={{ color: '#fff' }}>Criar Conta</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Signin;

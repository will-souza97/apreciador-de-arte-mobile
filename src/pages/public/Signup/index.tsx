import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useState } from 'react';
import { Text, Linking, TextInput, View, TouchableOpacity } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useAuth } from '../../../contexts/auth';
import styles from './styles';

const Signup: React.FC = () => {
  const { signUp } = useAuth();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { navigate } = useNavigation();

  async function handleSubmit() {
    await signUp({ name, email, password });
  }

  function handleNavigationSigin() {
    navigate('SignIn');
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
        <Text>Nome</Text>
        <TextInput
          autoCorrect={false}
          autoCapitalize="none"
          value={name}
          onChangeText={(text) => setName(text)}
          placeholder="Informe seu nome"
          placeholderTextColor="#c1bccc"
        />
      </View>

      <View style={styles.input}>
        <Text>Password</Text>
        <TextInput
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
        <Text style={{ color: '#fff' }}>Realizar Cadastro</Text>
      </RectButton>

      <TouchableOpacity onPress={handleNavigationSigin} style={styles.signup}>
        <Text style={{ color: '#fff' }}>Fazer login em vez disso</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Signup;

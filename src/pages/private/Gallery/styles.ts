import Constants from 'expo-constants';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight + 20,
  },

  button: {
    borderRadius: 50,
  },

  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 10,
  },

  name: {
    alignItems: `center`,
    justifyContent: 'center',
    fontSize: 25,
  },

  posts: {
    flex: 1,
    width: '100%',
  },

  post: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 8,
    marginVertical: 10,
  },

  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 8,
  },
});

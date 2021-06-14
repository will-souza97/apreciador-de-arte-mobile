import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  content: {
    width: '100%',
  },

  comment: {
    backgroundColor: '#ccc',
    margin: 10,
    width: '90%',
    padding: 15,
    borderRadius: 5,
  },

  text: {
    color: '#333',
  },

  group: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  commentText: {
    width: '60%',
    padding: 10,
  },

  button: {
    backgroundColor: 'blue',
    padding: 10,
    margin: 10,
    width: '28%',
    alignItems: 'center',
    borderRadius: 8,
  },
});

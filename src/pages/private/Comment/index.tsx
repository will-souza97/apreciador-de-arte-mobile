import React, { useEffect, useState } from 'react';
import { ScrollView, Text, TextInput, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import api from '../../../service/api';
import styles from './styles';

const Comment = ({ route: { params } }: any) => {
  const { id } = params;

  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');

  useEffect(() => {
    async function loadComments(id: string) {
      const response = await api.get(`comments/${id}`);

      setComments(response.data);
    }

    loadComments(id);
  }, []);

  function handleSubmit(text: string) {
    setComments([...comments, { id: text, comment: text }]);
    setComment('');
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        {comments.map((item) => {
          return (
            <View key={item.id} style={styles.comment}>
              <Text style={styles.text}>{item.comment}</Text>
            </View>
          );
        })}
      </ScrollView>

      <View style={styles.group}>
        <View style={styles.commentText}>
          <TextInput
            returnKeyType="send"
            value={comment}
            onChangeText={(text) => setComment(text)}
            placeholder="Faça um comentario"
            placeholderTextColor="#c1bccc"
          />
        </View>

        <RectButton onPress={() => handleSubmit(comment)} style={styles.button}>
          <Text style={{ color: '#fff' }}>Comentar</Text>
        </RectButton>
      </View>
    </View>
  );
};

export default Comment;

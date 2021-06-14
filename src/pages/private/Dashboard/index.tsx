import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState, useCallback } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker';
import api, { baseURL } from '../../../service/api';
import styles from './styles';
import { useAuth } from '../../../contexts/auth';

interface Post {
  id: string;
  user_id: string;
  image_url: string;
  avatar_url: string;
  name: string;
  like: boolean;
}

const Dashboard: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [like, setLike] = useState(false);
  const { navigate } = useNavigation();

  const { user } = useAuth();

  useEffect(() => {
    async function loadPost() {
      const { data } = await api.get('posts/all');
      setPosts(data);
    }

    loadPost();
  }, []);

  function handleNavigationComment(id: string) {
    navigate('Comentarios', { id });
  }

  function handleLike(id: string) {
    api
      .put(`likes/${id}`)
      .then(() => setLike(!like))
      .catch(() => AsyncStorage.clear());
  }

  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    })();
  }, []);

  const pickImage = async (user: string) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    const data = new FormData();

    data.append('post', {
      fileName: result.uri,
      uri: result.uri,
      type: result.type,
    });

    await api.post('posts', data);
  };

  return (
    <>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 50,
        }}
      >
        {posts.map((post: Post) => (
          <View style={styles.post} key={post.id}>
            <View style={styles.header}>
              <Image
                style={styles.logo}
                source={{
                  uri: post.avatar_url
                    ? `${baseURL}/file/${post.avatar_url}`
                    : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pinclipart.com%2Fpicdir%2Fmiddle%2F157-1578186_user-profile-default-image-png-clipart.png&f=1&nofb=1',
                }}
              />
              <Text style={styles.name}>{post.name}</Text>
            </View>

            <View>
              <Image
                style={styles.content}
                source={{
                  uri: `${baseURL}/file/${post.image_url}`,
                }}
              />
            </View>

            <View style={styles.icons}>
              <BorderlessButton onPress={() => handleLike(post.id)}>
                {like ? (
                  <Ionicons name="heart" size={24} color="red" />
                ) : (
                  <Ionicons name="heart-outline" size={24} color="#999" />
                )}
              </BorderlessButton>

              <BorderlessButton
                style={styles.icon}
                onPress={() => handleNavigationComment(post.id)}
              >
                <Ionicons name="chatbubble-outline" size={24} color="#999" />
              </BorderlessButton>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.group}>
        <BorderlessButton
          style={styles.button}
          onPress={() => navigate('Galeria')}
        >
          <Ionicons name="images-outline" size={24} color="#fff" />
        </BorderlessButton>

        <BorderlessButton style={styles.button} onPress={() => pickImage(user)}>
          <Ionicons name="add-circle-outline" size={24} color="#fff" />
        </BorderlessButton>
      </View>
    </>
  );
};

export default Dashboard;

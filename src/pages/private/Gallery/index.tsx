import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useAuth } from '../../../contexts/auth';
import api, { baseURL } from '../../../service/api';
import styles from './styles';

interface Post {
  id: string;
  image_url: string;
}

const Dashboard: React.FC = () => {
  const { user, signOut } = useAuth();
  const [posts, setPost] = useState([]);

  useEffect(() => {
    async function loadPost() {
      const { data } = await api.get('posts/all');
      setPost(data);
    }

    loadPost();
  }, []);

  return (
    <>
      <BorderlessButton
        style={{ alignItems: 'flex-end', margin: 10 }}
        onPress={signOut}
      >
        <Ionicons name="ios-exit-outline" size={24} color="black" />
      </BorderlessButton>

      <View style={styles.container}>
        <BorderlessButton style={styles.button}>
          <Image
            style={styles.avatar}
            source={{
              uri: user.avatar
                ? `${baseURL}/file/${user.avatar}`
                : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pinclipart.com%2Fpicdir%2Fmiddle%2F157-1578186_user-profile-default-image-png-clipart.png&f=1&nofb=1',
            }}
          />
        </BorderlessButton>
        <Text style={styles.name}>{user.name}</Text>

        <ScrollView
          style={styles.posts}
          contentContainerStyle={{
            paddingHorizontal: 16,
            paddingBottom: 50,
          }}
        >
          {posts.map((post: Post) => (
            <View style={styles.post} key={post.id}>
              <Image
                style={styles.image}
                key={post.id}
                source={{
                  uri: `${baseURL}/file/${post.image_url}`,
                }}
              />
            </View>
          ))}
        </ScrollView>
      </View>
    </>
  );
};

export default Dashboard;

import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await supabase.from('posts').select('*');
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <main>
      <h2>Posts</h2>
      <div>
        {posts.map(post => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <img src={post.photo_url} alt={post.title} style={{ width: '100px' }} />
          </div>
        ))}
      </div>
    </main>
  );
};

export default PostList;

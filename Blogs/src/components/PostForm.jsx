import React, { useState } from 'react';
import { supabase } from '../supabaseClient';

const PostForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from('posts')
      .insert([{ title, description, photo_url: photoUrl }]);
    
    if (error) {
      console.error('Error adding post:', error);
    } else {
      setTitle('');
      setDescription('');
      setPhotoUrl('');
    }
  };

  return (
    <main>
      <h2>Agregar Nuevo Post</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Título:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </label>
        <label>
          Descripción:
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
        </label>
        <label>
          Foto URL:
          <input type="text" value={photoUrl} onChange={(e) => setPhotoUrl(e.target.value)} required />
        </label>
        <button type="submit">Guardar</button>
      </form>
    </main>
  );
};

export default PostForm;

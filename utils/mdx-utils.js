import { api } from '../services/api'

export const getPosts = async () => {
    const {data} = await api.get('/posts'); 

    if(data){
        return data;
    }

    return []
}

export const getPostBySlug = async (slug) => {
    try {
      const { data } = await api.get(`/posts?slug=eq.${slug}`);
      return data[0]; // Assuming you want the first matching post
    } catch (error) {
      console.error('Error fetching post:', error);
      return null;
    }
};
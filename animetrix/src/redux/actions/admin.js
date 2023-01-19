import { server } from '../store';
import axios from 'axios';

export const createAnime = formData => async dispatch => {
  try {
    dispatch({ type: 'createAnimeRequest' });

    const { data } = await axios.post(`${server}/createanime`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      withCredentials: true,
    });

    dispatch({ type: 'createAnimeSuccess', payload: data.message });
  } catch (error) {
    dispatch({
      type: 'createAnimeFail',
      payload: error.response.data.message,
    });
  }
};


export const deleteAnime = (id) => async dispatch => {
  try {
    dispatch({ type: 'deleteAnimeRequest' });

    const { data } = await axios.delete(`${server}/anime/${id}`, {
      withCredentials: true,
    });

    dispatch({ type: 'deleteAnimeSuccess', payload: data.message });
  } catch (error) {
    dispatch({
      type: 'deleteAnimeFail',
      payload: error.response.data.message,
    });
  }
};

export const addEpisode = (id,formData) => async dispatch => {
  try {
    dispatch({ type: 'addEpisodeRequest' });

    const { data } = await axios.post(`${server}/anime/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      withCredentials: true,
    });

    dispatch({ type: 'addEpisodeSuccess', payload: data.message });
  } catch (error) {
    dispatch({
      type: 'addEpisodeFail',
      payload: error.response.data.message,
    });
  }
};

export const deleteEpisode = (animeId, episodeId) => async dispatch => {
  try {
    dispatch({ type: 'deleteEpisodeRequest' });

    const { data } = await axios.delete(`${server}/episode?animeId=${animeId}&episodeId=${episodeId}`,
    
    {

      withCredentials: true,
    });

    dispatch({ type: 'deleteEpisodeSuccess', payload: data.message });
  } catch (error) {
    dispatch({
      type: 'deleteEpisodeFail',
      payload: error.response.data.message,
    });
  }
};
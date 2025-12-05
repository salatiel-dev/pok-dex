import axios from 'axios';

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
});

export const getPokemons = async (limit = 20, offset = 0) => {
  try {
    const response = await api.get(`/pokemon?limit=${limit}&offset=${offset}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching pokemons:', error);
    throw error;
  }
};

export const getPokemonDetail = async (idOrName) => {
  try {
    const response = await api.get(`/pokemon/${idOrName}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching pokemon detail:', error);
    throw error;
  }
};

export const getAbilityDetail = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching ability detail:', error);
    throw error;
  }
};


// Base URL for Jikan API
const BASE_URL = 'https://api.jikan.moe/v4';

// Get full anime details by ID
export const getFullAnime = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/anime/${id}/full`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error('Error fetching anime details:', error);
        throw error;
    }
};

// Get top anime list
export const getTopAnime = async (page = 1, limit = 10) => {
    try {
        const response = await fetch(`${BASE_URL}/top/anime?page=${page}&limit=${limit}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error('Error fetching top anime:', error);
        throw error;
    }
};

// Search anime
export const searchAnime = async (query, page = 1, limit = 10) => {
    try {
        const response = await fetch(`${BASE_URL}/anime?q=${encodeURIComponent(query)}&page=${page}&limit=${limit}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error('Error searching anime:', error);
        throw error;
    }
};
import axios from 'axios';

export const projectsUrl = 'https://637254d8025414c6370cd9df.mockapi.io/api/projects';

export const getProjects = async () => {
    const { data } = await axios.get(projectsUrl);

    return data;
};
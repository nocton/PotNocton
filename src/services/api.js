import axios from 'axios';

// Api com baseURL
const api = axios.create({
    baseURL: "https://api.github.com/"
});

// Listar de projetos do nocton
async function get_nocton_projects(){
    const response = await api.get('/orgs/nocton/repos');
    const { data } = response;
    const formated_projects = data.map(project => {
        return({
            "name": project.name,
            "url": project.html_url,
            "description": project.description
        })
    })
    return formated_projects;
}

export { get_nocton_projects };
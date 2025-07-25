import { useEffect, useState } from "react";

const ReposList = () => {
    const [repos, setRepos] = useState([]);

    useEffect(() =>{
        fetch('https://api.github.com/users/BrayanFranklin8/repos')
        .then(res => res.json())
        .then(resJson =>{
            setRepos(resJson)
        })
    },[]);


    return(
        <ul>
            {repos.map(respositorio =>(
                <li key={respositorio.id}>
                    <b>Nome: {respositorio.name}</b>
                    <b>Linguagem: {respositorio.language}</b>
                    <a target="_blank" href={respositorio.html_url}>Visitar no GitHub</a>

                </li>
            ))}
            <li>Repositorio</li>
        </ul>
    )
}

export default ReposList;
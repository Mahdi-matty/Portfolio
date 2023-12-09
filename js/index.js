// fetch ("/api.github.com")
// import { Octokit } from "https://cdn.skypack.dev/octokit";
// import { Octokit } from "../node_modules/@octokit/core/dist-types/index";
// import { Octokit } from "@octokit/core";
// import {Octokit} from "https://unpkg.com/@octokit";
import { Octokit } from "https://esm.sh/@octokit/core";


const octokit = new Octokit({
  auth: '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'
})

document.querySelector("#fetchApi").addEventListener("click", async  ()=> {
    try {
      const response = await octokit.request('GET /users/:username/repos', {
        headers: {
          'X-GitHub-Api-Version': '2022-11-28',
        },
        username: 'Mahdi-matty',
      });
      const repositories = response.data;
      const repositryData = document.querySelector("#repositoryDataUl");
      // repositryData . innerHTML = "";
      for (const repostiry of repositories){
        const repoLi = document.createElement("li");
        const repositortTag = document.createElement("a");
        repositortTag.href = repostiry.html_url;
        repositortTag.textContent = repostiry.name;
        repoLi.appendChild(repositortTag);
        repositryData.appendChild(repoLi);
      }
      console.log('Received response:', repositories);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
})
;
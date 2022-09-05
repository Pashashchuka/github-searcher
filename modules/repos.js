export const returnRepos = (data) => {
  const reposEl = document.querySelector('.repos');
  data.forEach(repo => {
    const repoEl = document.createElement('a');
    repoEl.classList.add('rep');
    repoEl.href = repo.html_url;
    repoEl.innerText = repo.name;
    repoEl.target = '_blank';
    reposEl.appendChild(repoEl);
  });
}
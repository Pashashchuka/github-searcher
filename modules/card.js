const card = document.querySelector(".card");

export const createUserCard = (user) => {
  const cardHTML = `
      <div class="block">
              <img class="avatar" src="${user.avatar_url}" alt="${user.name}" />
          <div class="info">
              <h2 class = "title">${user.name}</h2>
              <p class = "subtitle">${user.bio}</p>
              <ul class="followers">
                  <li class = "li">${user.followers}<strong class = "strong">Followers</strong></li>
                  <li class = "li">${user.following}<strong class = "strong">Following</strong></li>
                  <li class = "li">${user.public_repos}<strong class = "strong">Repos</strong></li>
              </ul>
              <div class="repos"></div>
          </div>
      </div>
  `;
  card.innerHTML = cardHTML;
};

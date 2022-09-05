import { APIURL } from "./constants.js";
import { createUserCard } from "./card.js";
import { returnRepos } from "./repos.js";

const input = document.querySelector(".input");

const getUser = async (name) => {
  const resp = await fetch(APIURL + name);
  const user = await resp.json();
  createUserCard(user);
  getRepos(name);
};

getUser("PashaShchuka");

input.addEventListener("keypress", (e) => {
  const name = e.target.value;
  if (e.key === "Enter") {
    getUser(name);
  }
});

const getRepos = async (name) => {
  const url = APIURL + name + "/repos";
  const res = await fetch(url);
  const data = await res.json();
  returnRepos(data);
};



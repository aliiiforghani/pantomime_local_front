import http from "./httpService";

export function getCategory() {
  return http.get("/category/all").then(({ data }) => data.data);
}

export function getHardship() {
  return http.get("/hardship/all").then(({ data }) => data.data);
}

export function getRandomSentence(data) {
  return http.post("/sentence/random", data).then(({ data }) => data.data.result);
}

export function getAllSentence(data) {
  return http
    .post("/sentence/all", data)
    .then(({ data }) => data.data);
}

export function addCategory() {
  return http.get("/cateogry/add").then(({ data }) => data.data);
}

export function addHardship(data) {
  return http.patch("/hardship/add", data).then(({ data }) => data.data);
}


export function addSentenceByAdmin() {
  return http.get("/sentence/admin/add").then(({ data }) => data.data);
}

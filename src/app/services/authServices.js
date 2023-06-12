import http from "./httpService";

export function register(data) {
  return http.post("/user/register", data).then(({ data }) => data.data);
}

export function login(data) {
  return http.post("/user/login", data).then(({ data }) => data.data);
}

export function completeProfile(data) {
  return http
    .post("/user/complete-profile", data)
    .then(({ data }) => data.data);
}

export function getUserProfile() {
  return http.get("/").then(({ data }) => data.data);
}

export function updateProfile(data) {
  return http.patch("/user/update", data).then(({ data }) => data.data);
}

export function logout() {
  return http.post("/user/logout");
}

// admin related fetchs :

export function getAllUsers() {
  return http.get("/admin/user/list").then(({ data }) => data.data);
}

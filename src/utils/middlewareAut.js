import { toStringCookies } from "./toStringCookies";

export default async function middlewareAuth(req) {

  const { data } = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/`, {
    method: "GET",
    credentials: "include",
    headers: {
      Cookie: toStringCookies(req.cookies),
    },
  })
    .then((res) => res.json())
    

  const { user } = data || {};
  return user;
}

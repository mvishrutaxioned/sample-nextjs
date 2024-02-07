// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export async function getPost() {
  return await fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => json);
}

export async function sendPost(data: { title: string, body: string, userId: number}) {
  return await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
  .then((response) => response.json())
  .then((json) => json);
}

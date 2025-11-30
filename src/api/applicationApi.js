export const applicationsCreatedByPromise = (email, accessToken) => {
  return fetch(
    `https://career-code-server-phi-five.vercel.app/applications?email=${email}`,
    {
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    }
  ).then((res) => res.json());
};

export const loginFetch = async (
  URL: string,
  userObj: {
    email: string;
    password: string;
  }
) => {
  const apiRes = await fetch(URL, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(userObj), // body data type must match "Content-Type" header
  });

  console.log("res", apiRes);

  if (apiRes.status == 401 && apiRes.statusText == "Unauthorized") {
    alert('User credentials is not valid')
  }
    const returnRes = await apiRes.json();

  return { data: returnRes, status: apiRes.status };
};

export const getMethodFetch = async (URL: string, token: string) => {
  const getFetchApi = await fetch(URL, {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
  });

  const resFetch = await getFetchApi.json();

  return resFetch;
};

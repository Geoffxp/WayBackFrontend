const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "http://localhost:5000";

/**
 * Defines the default headers for these functions to work with `json-server`
 */
const headers = new Headers();
headers.append("Content-Type", "application/json");

/**
 * Fetch `json` from the specified URL and handle error status codes and ignore `AbortError`s
 *
 * This function is NOT exported because it is not needed outside of this file.
 *
 * @param url
 *  the url for the requst.
 * @param options
 *  any options for fetch
 * @param onCancel
 *  value to return if fetch call is aborted. Default value is undefined.
 * @returns {Promise<Error|any>}
 *  a promise that resolves to the `json` data or an error.
 *  If the response is not in the 200 - 399 range the promise is rejected.
 */
const fetchJson = async (url, options, onCancel) => {
  try {
    const response = await fetch(url, options);

    if (response.status === 204) {
      return null;
    }
    try {
      const payload = await response.json();
      if (payload.error) {
        return Promise.reject({ message: payload.error });
      }
      return payload.data;
    } catch {

    }

  } catch (error) {
    if (error.name !== "AbortError") {
      console.error(error.stack);
      throw error;
    }
    return Promise.resolve(onCancel);
  }
}

export const readUser = async (user) => {
  const url = `${API_BASE_URL}/users`
  const options = {
    method: "PUT",
    headers,
    body: JSON.stringify({
      data: {
        username: user.username,
        password: user.password,
        session: user.session
      }
    })
  };

  return await fetchJson(url, options, []);
}

export const createUser = async (user) => {
  const url = `${API_BASE_URL}/users`;
  const options = {
    method: "POST",
    headers,
    body: JSON.stringify({
      data: {
        username: user.username,
        password: user.password,
        session: user.session
      }
    }),
  };


  return await fetchJson(url, options, []);
}

export const getGamer = async (token) => {
  const url = `${API_BASE_URL}/users?token=${token}`;
  return await fetchJson(url, { headers }, []);
}

export const getImage = async (id) => {
  const url = `${API_BASE_URL}/images/${id}`;
  const newHeaders = new Headers({ "Content-Type": "image/png", "Content-Disposition": "inline" });
  return await fetch(url, { newHeaders }, []);
}

export const getGames = async () => {
  const url = `${API_BASE_URL}/games`;
  return await fetchJson(url, { headers }, []);
}

export const getGame = async (id) => {
  const url = `${API_BASE_URL}/games/${id}`;
  return await fetchJson(url, { headers }, []);
}
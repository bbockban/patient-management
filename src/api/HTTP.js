const HTTP_FETCH = async (endpoint) => {
  const headers = {
    Accept: 'application/json',
  };

  const response = await fetch(endpoint, {
    redirect: 'manual',
    headers,
  });

  const req = await response?.json();

  if (!response.ok) {
    throw ({
      response: {
        data: {
          redirect: req.redirect,
          error: req.error,
        }
      }
    });
  }

  return req;
};

export default HTTP_FETCH;
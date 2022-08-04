import authApi from "./api.config";

export const getUsers = async () => {
  const  response = await authApi.get('/users', {
    params: {
      count: 6
    }
  });
  return response;
}

export const getUser = async (id) => {
  const response = await authApi.get(`/users${id}`)
  return response;
}

export const getToken = async () => {
  const response = await authApi.get('/token')
  return response;
}

export const getPosition = async () => {
  const response = await authApi.get('/positions')
  return response;
}

export const createUser = async (user) => {
  const response = await authApi.post('/users', user)
  return response;
}


//=================================================================

export const getNextUsers = async (params) => {
  const  response = await authApi.get('/users?' + params);
  return response;
}
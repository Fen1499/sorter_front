const baseURL = 'http://localhost:8080/v1'

class BaseAPI {

  constructor() {
    //Empty
  }

  
  fetchSomething(path, method, body) {
    let abortController = new AbortController()
    setTimeout(() => abortController.abort, 2000)
    let config = {
      signal: abortController.signal,
      method: method,
      body: body
    }

    let url = baseURL + path
    return fetch(url, config) //Assim eu não tenho acesso explicito ao response, seria bom ter
      .then(response => response.json())
    //TODO: .catch(...)
  }

}

export { BaseAPI, baseURL };

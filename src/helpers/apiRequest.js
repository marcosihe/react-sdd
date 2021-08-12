const responseStatus = 200;

const apiRequest = async(setState, URL) => {
    try {
      const response = await fetch(URL);
      console.log(response);
      if (response.status === responseStatus) {
        setState( await response.json() );
      }
    } catch (error) {
      console.log(error);
    }
  }

  export { apiRequest }
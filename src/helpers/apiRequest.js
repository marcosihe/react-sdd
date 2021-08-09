const responseStatus = 200;
const URL = process.env.REACT_APP_API_URL;

const apiRequest = async(setState) => {
    try {
      const response = await fetch(URL);
      if (response.status === responseStatus) {
        setState( await response.json() );
      }
    } catch (error) {
      console.log(error);
    }
  }

  export { apiRequest }
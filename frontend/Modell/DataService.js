export default class DataService {
  constructor() {
    axios.defaults.baseURL = "http://localhost:8000/api/";
  }

  getData(vegpont, callback) {
    axios
      .get(vegpont)
      .then(function (response) {
        console.log(response.data);
        callback(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  postData(vegpont, adat) {
    axios
      .post(vegpont, adat)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  putData(vegpont, id, adat) {
    axios
      .put(vegpont + "/" + id, adat)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteData(vegpont, id) {
    axios
      .delete(vegpont + "/" + id)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

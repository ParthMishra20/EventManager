import axios from 'axios';

class ApiConnection {
  constructor() {
    // this.baseUrl = 'http://localhost:3250';
    this.baseUrl = 'https://doux-event.debdevcs.org';
    this.apiUrl = `${this.baseUrl}/api`;
    this.axios = axios.create({
      baseURL: this.apiUrl,
    });
  }


  /*async get(endpoint) {
    return this.axios.get(endpoint, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
  }
  async put(endpoint, data) {
    return this.axios.put(endpoint, data, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
  }

  async delete(endpoint) {
    return this.axios.delete(endpoint, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
  }
  async post(endpoint, data) {
    return this.axios.post(endpoint, data, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
  }

  async formDataPost(endpoint, data) {
    return this.axios.post(endpoint, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
  }

}*/}

export default ApiConnection;
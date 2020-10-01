import axios from "axios";

const REQUEST_TIMEOUT_STATUS = 408;

function RequestException(message, status) {
  this.name = "RequestException";
  this.message = message;
  this.status = status;
}

export const GET = (url, headers, params) => {
  return axios
    .get(url, {
      headers,
      params,
    })
    .catch((err) => {
      if (err && err.response && err.response.data) {
        throw new RequestException(
          err.response.data.detail,
          err.response.status
        );
      } else {
        throw new RequestException("Network error.", REQUEST_TIMEOUT_STATUS);
      }
    });
};

export const PUT = (url, data) => {
  return axios.put(url, data).catch((err) => {
    if (err && err.response && err.response.data) {
      throw new RequestException(
        err.response.data.Message,
        err.response.status
      );
    } else {
      throw new RequestException("Network error.", REQUEST_TIMEOUT_STATUS);
    }
  });
};

export const POST = (url, data, headers) => {
  return axios.post(url, data).catch((err) => {
    if (err && err.response && err.response.data) {
      throw new RequestException(
        err.response.data.Message,
        err.response.status
      );
    } else {
      throw new RequestException("Network error.", REQUEST_TIMEOUT_STATUS);
    }
  });
};

export const DELETE = (url, headers) => {
  return axios
    .delete(url, {
      ...headers,
    })
    .catch((err) => {
      if (err && err.response && err.response.data) {
        throw new RequestException(
          err.response.data.Message,
          err.response.status
        );
      } else {
        throw new RequestException("Network error.", REQUEST_TIMEOUT_STATUS);
      }
    });
};

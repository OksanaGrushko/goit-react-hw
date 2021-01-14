// eslint-disable-next-line import/no-anonymous-default-export
export default {
  baseURL: "https://pixabay.com/api/",
  apiKey: "18172537-3926a404f6aac535e082de079",
  perPage: 12,

  getItems(query, page) {
    return fetch(
      `https://pixabay.com/api/?q=${query}&page=${page}&key=${this.apiKey}&image_type=photo&orientation=horizontal&per_page=${this.perPage}`
    )
      .then((response) => response.json())
      .then((data) => data.hits);
  },
};

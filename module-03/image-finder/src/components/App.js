import React, { Component } from "react";
import Layout from "./Layout/Layout";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import Loader from "./Loader/Loader";
import Modal from "./Modal/Modal";
import Button from "./Button/Button";

import pixabayApi from "../services/pixabayApi";

import "./styles.css";

export default class App extends Component {
  state = {
    images: [],
    page: 1,
    loading: false,
    searchImgUrl: "",
    error: null,
    selectImgUrl: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchImgUrl;
    const nextQuery = this.state.searchImgUrl;
    if (prevQuery !== nextQuery) {
      this.fetchImage();
    }
  }

  fetchImage = () => {
    const { searchImgUrl, page } = this.state;
    this.setState({ loading: true });
    pixabayApi
      .getItems(searchImgUrl, page)
      .then((images) =>
        this.setState((prevState) => ({
          images: [...prevState.images, ...images],
          page: prevState.page + 1,
        }))
      )
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  handlerSearchFormSubmit = (query) => {
    this.setState({ searchImgUrl: query, page: 1, images: [] });
  };

  onGalleryImageClick = (e) => {
    this.setState({ selectImgUrl: e.target.dataset.large_img_url });
  };

  closeModal = () => {
    this.setState({ selectImgUrl: null });
  };

  onScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  render() {
    const { error, loading, images, selectImgUrl } = this.state;
    return (
      <Layout>
        <Searchbar onSubmit={this.handlerSearchFormSubmit} />
        <div>
          {error && <p>Whoops, something went wrong: ${error.message}</p>}
          {images.length > 0 && (
            <ImageGallery
              images={images}
              onImgClick={this.onGalleryImageClick}
            />
          )}
          {loading && <Loader />}
          {images.length > 0 && !loading && (
            <Button
              type="button"
              onClick={this.fetchImage}
              onScroll={this.onScroll}
            />
          )}
        </div>
        <div>
          {selectImgUrl && (
            <Modal selectImgUrl={selectImgUrl} onClose={this.closeModal} />
          )}
        </div>
      </Layout>
    );
  }
}

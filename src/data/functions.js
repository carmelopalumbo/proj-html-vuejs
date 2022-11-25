const getPathImage = (imageName) => {
    return new URL(`../assets/img/${imageName}.svg`, import.meta.url).href;
  }

export { getPathImage }
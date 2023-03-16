const getImageUrl = (url) => {
  if (process.env.NODE_ENV === "development") {
    return `http://127.0.0.1:1337${url}`;
  } else {
    return url;
  }
};
export { getImageUrl };

import { requestInstance } from "./config";

export const getPosts = async () => {
  try {
    const response = await requestInstance.get(
      "/posts/?populate=*&sort[0]=publishedAt%3Adesc"
    );
    const data = await response.data;
    return data.data;
  } catch (e) {
    console.log(e);
  }
};
export const getPost = async (slug) => {
  try {
    const response = await requestInstance.get(
      `/posts/?filters[Slug][$eq]=${slug}&populate=%2A`
    );
    const data = await response.data;
    return data.data;
  } catch (e) {
    console.log(e);
  }
};

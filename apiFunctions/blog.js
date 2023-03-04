import { requestInstance } from "./config";

export const getPosts = async () => {
  try {
    const response = await requestInstance.get(
      "posts/?populate=*&sort[0]=publishedAt%3Adesc"
    );
    const data = await response.data;
    return data;
  } catch (e) {
    console.log(e);
  }
};

import { requestInstance } from "./config";

export const getBooks = async () => {
  try {
    const response = await requestInstance.get(
      "books/?populate=*&sort[0]=publishedAt%3Adesc"
    );
    const data = await response.data;
    return data;
  } catch (e) {
    console.log();
  }
};

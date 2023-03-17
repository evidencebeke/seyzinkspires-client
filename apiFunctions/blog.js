import { requestInstance } from "./config";

export const getPosts = async () => {
  try {
    const response = await requestInstance.get(
      "/posts/?populate=*&sort[0]=publishedAt%3Adesc"
    );
    if (response.data) {
      let articles = [];
      const { data } = response.data;
      if (data && data.length > 0) {
        articles = data;
      }
      return articles;
    }
    return [];
  } catch (e) {
    return null;
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
    return null;
  }
};
// export const getArticle = async (slug) => {
//   try {
//     const response = await requestInstance.get(
//       `/articles?filters[slug][$eq]=${slug}&populate=%2A`
//     );
//     return response.data;
//   } catch {
//     return null;
//   }
// };

// export const getAllArticles = async () => {
//   try {
//     const url = "/articles/?populate=*&sort[0]=publishedAt%3Adesc";
//     const response = await requestInstance.get(url);
//     console.log(response)
//     if (response.data) {
//       let articles = [];
//       const { data } = await response.data;
//       if (data && data.length > 0) {
//         articles = data;
//       }
//       return articles;
//     }
//     return [];
//   } catch (error) {
//     return null;
//   }
// };

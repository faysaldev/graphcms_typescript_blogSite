import { ApolloClient, InMemoryCache } from "@apollo/client";
const client = new ApolloClient({
  uri: "https://api-ap-south-1.hygraph.com/v2/cl5p89zht21pi01ug4upedtsz/master",
  cache: new InMemoryCache(),
});

export default client;

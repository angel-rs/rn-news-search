import { View } from "react-native";
import { ArticlesList } from "../components/ArticlesList";
import { SearchBar } from "../components/Searchbar";

export const SearchPage = () => {
  const data = [
    {
      source: {
        id: null,
        name: "9to5Mac",
      },
      author: "Chance Miller",
      title: "USB-C iPhone 15: The latest news and what to expect",
      description:
        "A USB-C iPhone may have once seemed impossible, but the latest rumors suggest it’s actually coming sooner than you may think. Amid regulatory pushback and limitations of the Lightning connector, the iPhone 15 and iPhone 15 Pro are expected to switch to USB-C …",
      url: "https://9to5mac.com/2023/02/23/usb-c-iphone-15-2/",
      urlToImage:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/02/iphone-15-pro-front.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2023-02-24T00:16:00Z",
      content:
        "A USB-C iPhone may have once seemed impossible, but the latest rumors suggest it’s actually coming sooner than you may think. Amid regulatory pushback and limitations of the Lightning connector, the … [+4476 chars]",
    },
    {
      source: {
        id: null,
        name: "9to5Mac",
      },
      author: "Filipe Espósito",
      title:
        "Netflix cuts subscription prices in multiple countries following new password sharing rules",
      description:
        "Netflix recently expanded its new policy that aims to prevent users from sharing their passwords with others in an attempt to increase the company’s revenue. However, as the news has left many users upset, the company is now cutting the prices of its subscrip…",
      url: "https://9to5mac.com/2023/02/23/netflix-cuts-prices-in-multiple-countries/",
      urlToImage:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/08/netflix.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2023-02-24T00:06:53Z",
      content:
        "Netflix recently expanded its new policy that aims to prevent users from sharing their passwords with others in an attempt to increase the companys revenue. However, as the news has left many users u… [+2788 chars]",
    },
  ];
  return (
    <View>
      <SearchBar
        placeholder="Search local news..."
        onChangeText={console.log}
      />

      <ArticlesList data={data} />
    </View>
  );
};

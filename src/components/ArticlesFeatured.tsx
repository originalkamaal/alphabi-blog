import { Image } from "@chakra-ui/image";
import { Flex, Grid, GridItem } from "@chakra-ui/layout";
import React from "react";

const ArticleFeatured = () => {
  const featured = [
    {
      image:
        "https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/h104-696x464.jpg",
      cat: "fashion",
      title: "Sample Title for First Article from Featured Articles",
      author: "Kamaal Khan",
      published_on: 1674298614,
    },
    {
      image:
        "https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/28-696x368.jpg",
      cat: "fashion",
      title: "Sample Title for First Article from Featured Articles",
      author: "Kamaal Khan",
      published_on: 1674298614,
    },
    {
      image:
        "https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/54-1-696x405.jpg",
      cat: "fashion",
      title: "Sample Title for First Article from Featured Articles",
      author: "Kamaal Khan",
      published_on: 1674298614,
    },
    {
      image:
        "https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/43-2-696x464.jpg",
      cat: "fashion",
      title: "Sample Title for First Article from Featured Articles",
      author: "Kamaal Khan",
      published_on: 1674298614,
    },
  ];
  return (
    <>
      <Grid
        gap={1}
        h="500px"
        rounded="md"
        w="full"
        templateRows="repeat(10, 1fr)"
        templateColumns="repeat(4, 1fr)"
      >
        {featured.map((item, i) => (
          <GridItem
            key={i}
            rowSpan={i == 0 ? 10 : i == 1 ? 6 : i > 1 ? 4 : 4}
            colSpan={i == 0 ? 2 : i == 1 ? 2 : i > 1 ? 1 : 1}
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundImage={`url('${item.image}')`}
          ></GridItem>
        ))}
      </Grid>
    </>
  );
};

export default ArticleFeatured;

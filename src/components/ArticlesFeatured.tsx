import { Image } from "@chakra-ui/image";
import { Text, Flex, Grid, GridItem, VStack } from "@chakra-ui/layout";
import Link from "next/link";
import React from "react";
import LabelCatagory from "./LabelCatagory";

const ArticleFeatured = () => {
  console.log(new Date().getTime());
  const featured = [
    {
      image:
        "https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/h104-696x464.jpg",
      cat: "fashion",
      title: "Sample Title for First Article from Featured Articles",
      author: "Kamaal Khan",
      published_on: 1674301254359,
      link: "#",
    },
    {
      image:
        "https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/28-696x368.jpg",
      cat: "fashion",
      title: "Sample Title for First Article from Featured Articles",
      author: "Kamaal Khan",
      published_on: 1674301254359,
      link: "#",
    },
    {
      image:
        "https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/54-1-696x405.jpg",
      cat: "fashion",
      title: "Sample Title for First Article from Featured Articles",
      author: "Kamaal Khan",
      published_on: 1674301254359,
      link: "#",
    },
    {
      image:
        "https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/43-2-696x464.jpg",
      cat: "fashion",
      title: "Sample Title for First Article from Featured Articles",
      author: "Kamaal Khan",
      published_on: 1674301254359,
      link: "#",
    },
  ];
  return (
    <>
      <Grid
        gap={2}
        h="500px"
        rounded="md"
        w="full"
        templateRows="repeat(10, 1fr)"
        templateColumns="repeat(4, 1fr)"
      >
        {featured.map((item, i) => (
          <GridItem
            _hover={{
              filter: "brightness(0.7)",
              transitionDuration: "0.3s",
              transitionTimingFunction: "ease-in-ease-out",
            }}
            key={i}
            rowSpan={i == 0 ? 10 : i == 1 ? 6 : i > 1 ? 4 : 4}
            colSpan={i == 0 ? 2 : i == 1 ? 2 : i > 1 ? 1 : 1}
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundImage={`url('${item.image}')`}
          >
            <Link href={item.link}>
              <Flex
                justify="end"
                w={i > 1 ? "100%" : "75%"}
                h="full"
                p={5}
                direction="column"
                _hover={{
                  paddingBottom: 10,
                  opacity: 1,
                  transitionDuration: "0.3s",
                  transitionTimingFunction: "ease-in-ease-out",
                }}
                opacity={0.9}
              >
                <LabelCatagory label={item.cat} />
                <Text
                  fontSize={
                    i == 0 ? "3xl" : i == 1 ? "2xl" : i > 1 ? "md" : "md"
                  }
                  color="white"
                  fontWeight="bold"
                >
                  {item.title}
                </Text>
                {i <= 1 && (
                  <Text fontSize="x-small" color="white" fontWeight="medium">
                    {item.author} - {new Date(item.published_on).toDateString()}
                  </Text>
                )}
              </Flex>
            </Link>
          </GridItem>
        ))}
      </Grid>
    </>
  );
};

export default ArticleFeatured;

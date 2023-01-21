import { Image } from "@chakra-ui/image";
import { Flex, Grid, GridItem } from "@chakra-ui/layout";
import React from "react";

const ArticleFeatured = () => {
  return (
    <>
      <Grid
        gap={1}
        h="500px"
        rounded="md"
        w="full"
        templateRows="repeat(10, 1fr)"
        templateColumns="repeat(8, 1fr)"
      >
        <GridItem
          rowSpan={10}
          colSpan={4}
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundImage="url('https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/h104-696x464.jpg')"
        ></GridItem>
        <GridItem
          rowSpan={6}
          colSpan={4}
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundImage="url('https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/28-696x368.jpg')"
        ></GridItem>
        <GridItem
          rowSpan={4}
          colSpan={2}
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundImage="url('https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/54-1-696x405.jpg')"
        ></GridItem>
        <GridItem
          rowSpan={4}
          colSpan={2}
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundImage="url('https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/43-2-696x464.jpg')"
        ></GridItem>
      </Grid>
    </>
  );
};

export default ArticleFeatured;

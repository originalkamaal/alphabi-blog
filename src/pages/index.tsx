import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import BaseLayout from "@/layouts/base";
import ArticlesHorizontal from "@/components/ArticlesHorizontal";
import ArticlesFeatured from "@/components/ArticlesFeatured";
import { Box, Flex, VStack, Show, Text } from "@chakra-ui/react";
import SidebarOne from "@/components/SidebarOne";
import ArticlesBannerCarousel from "@/components/ArticlesBannerCarousel";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <BaseLayout>
      <VStack w="full">
        <ArticlesBannerCarousel />
        <Flex align="top">
          <Box flex="4" ml={2} rounded="md">
            <ArticlesFeatured />
            <ArticlesHorizontal />
          </Box>
          <Box flex={{ base: "0", md: "1" }} px={2} rounded="md">
            <Show above="md">
              <SidebarOne />
            </Show>
          </Box>
        </Flex>
      </VStack>
    </BaseLayout>
  );
}

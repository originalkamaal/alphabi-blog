import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import BaseLayout from "@/layouts/base";
import ArticlesHorizontal from "@/components/ArticlesHorizontal";
import ArticlesFeatured from "@/components/ArticlesFeatured";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <BaseLayout>
      <ArticlesFeatured />
      <ArticlesHorizontal />
    </BaseLayout>
  );
}

import Head from "next/head";
import { useRouter } from "next/router";
import { env } from "process";

type Props = {
  title: string;
};

export default function HeadWithOGP({ title }: Props) {
  const router = useRouter();
  const baseUrl = env.NODE_ENV === "production"
    ? "https://password-generator-nine-blond.vercel.app"
    : "http://localhost:3000";
  return (
    <Head>
      <title>{title}</title>
      <meta name="theme-color" content="#bbdefb" />
      <meta property="og:title" content={title} />
      <meta property="og:url" content={baseUrl + router.asPath} />
      <meta
        property="og:image"
        content="https://raw.githubusercontent.com/yu-ko-ba/password-generator/main/public/favicon.ico"
      />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content="@yu_ko_ba" />
    </Head>
  );
}

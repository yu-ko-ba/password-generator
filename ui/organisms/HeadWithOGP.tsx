import Head from "next/head"
import { useRouter } from "next/router"

type Props = {
  title: string
}

export default function HeadWithOGP({ title }: Props) {
  const r = useRouter()
  console.log(r)
  return (
    <Head>
      <title>{title}</title>
      <meta name="theme-color" content="#bbdefb" />
      <meta property="og:title" content={title} />
      <meta property="og:url" content={r.domainLocales?.join("")} />
    </Head>
  )
}

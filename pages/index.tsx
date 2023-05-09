import { Layout, Text, Code, Page, Link } from '@vercel/examples-ui'
import Post from '@/components/post'
import TomatoPrices from '@/components/tomatoPrices'
import Head from 'next/head'

export default function Home({ data }: { data: any }) {
  return (
    <Page>
      <Head>
      </Head>
      <section className="flex flex-col gap-6">
        <Text variant="h1">Precio del tomate en Coto</Text>
        <Text>
          Este ejemplo muestra el precio del kilo de tomate en el coto
        </Text>
      </section>
      <section className="grid gap-6 mt-10 pt-10 border-t border-gray-300">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-6">
            <div className="flex justify-between items-center">
              <Post />
              <TomatoPrices />
            </div>
          </div>
        </div>
      </section>
    </Page>
  )
}

Home.Layout = Layout

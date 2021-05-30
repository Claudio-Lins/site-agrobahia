import Head from 'next/head'
import SlideDestaque from "../components/home/destaque/SlideDestaque";
import TextDestaque from "../components/home/destaque/TextDestaque";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <div className=" relative">
          <SlideDestaque />
        </div>
        <div className="absolute top-0 flex w-full h-screen bg-black bg-opacity-50 items-center justify-center">
          <TextDestaque/>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
       
          Powered by{'Claudio Lins'}
          
      </footer>
    </div>
  )
}

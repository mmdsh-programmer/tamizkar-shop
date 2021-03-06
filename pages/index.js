import Head from "next/head";
import Card from "components/Card";

export default function Home() {
  return (
    <>
      <Head>
        <title>فروشگاه تمیزکار | صفحه اصلی</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen pt-24 md:pt-0 pb-4 md:pb-0 px-4 md:px-0">
        <section className="min-h-screen">
          <div className="container max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:place-items-center lg:gap-8 gap-4 md:min-h-screen md:px-4">
            <Card
              image="/images/card-image.webp"
              title={"قطعات یدکی"}
              href={"/"}
            />
            <Card
              image="/images/card-image-2.webp"
              title={"فروش یاتاقان"}
              href={"/"}
            />
            <Card
              image="/images/card-image-3.webp"
              title={"مکانیک سیار"}
              href={"/"}
            />
          </div>
        </section>
      </main>
    </>
  );
}

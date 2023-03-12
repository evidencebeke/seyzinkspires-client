import Markdown from "markdown-to-jsx";
import Head from "next/head";
import Image from "next/image";
import React from "react";

const index = () => {
  return (
    <>
      <Head>
        <title>Blog article</title>
        <meta name="description" content="Blog Article description" />
      </Head>
      <div className="space-y-10 my-10">
        <div className="text-center">
          <h1 className="text-2xl md:4xl mx-5 md:mx-[20%] font-bold ">
            A few words about this blog platform, Ghost and how this site was
            made
          </h1>
          <p className="text-lg">
            Why GhostieD (and Figma) instgead of Medium, WordPress or other
            options
          </p>
        </div>
        <div className="bg-primary h-80">
          <Image
            alt="Post Image"
            className=" h-full object-cover w-full"
            src={"/assets/seyz2.jpg"}
            width={250}
            height={150}
          />
        </div>

        <div className="flex space-x-3 items-center mx-5 md:mx-[20%]">
          <div className="w-10 h-10 rounded-full">
            <Image
              alt="Poster Image"
              className="h-full object-cover rounded-full w-full"
              src={"/assets/seyz2.jpg"}
              width={250}
              height={150}
            />
          </div>
          <div>
            <h6 className="capitalize">mika matikainen</h6>
            <p>4 hours ago</p>
          </div>
        </div>
        <div className="mx-5 md:mx-[20%] text-justify text-lg leading-relaxed tracking-wide">
          Body goes here Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Minima consequuntur repudiandae aspernatur distinctio ut hic
          odit delectus consequatur tempora consectetur? Consequuntur enim
          dolorem dignissimos itaque sit nostrum facilis ex, placeat nulla natus
          impedit aspernatur sint, officia quo autem obcaecati quasi nam, neque
          consequatur iste! Sint, quos! Architecto mollitia soluta dolore ea
          maxime placeat voluptas in beatae, iusto sed doloribus, impedit
          repellat explicabo! Perspiciatis possimus quia quis ab alias veritatis
          dolorum error hic itaque! Veritatis dolorum minima eius asperiores
          iusto vitae, sequi perspiciatis, dolore, labore minus eum doloribus
          possimus explicabo? Aliquid quibusdam recusandae nemo est et dolores
          excepturi, aut necessitatibus id rerum voluptates repellat laborum
          quas fugit labore odio? Dicta animi vel laborum quam ullam magnam
          eaque, et voluptatibus a neque aspernatur adipisci commodi iste
          voluptatem! Voluptatibus aspernatur qui doloremque vitae, animi
          asperiores facere saepe maiores at illo itaque dicta ipsum excepturi
          porro deserunt dignissimos, accusantium et eos. Eveniet, blanditiis
          excepturi est sunt, consectetur repellat quis porro hic saepe omnis at
          beatae non, ipsum illum sapiente qui nulla culpa rem possimus quod.
          Mollitia rem adipisci non eaque ullam. Rem esse in expedita doloribus,
          quo placeat hic nostrum quia iusto distinctio quod neque soluta
          laboriosam recusandae nisi, ea similique architecto? Corporis.
          {/* <Markdown
            options={{
              overrides: {
                img: {
                  props: {
                    className: "w-full",
                  },
                },
              },
            }}
          >
            {article.body}
          </Markdown> */}
        </div>
      </div>
    </>
  );
};

export default index;

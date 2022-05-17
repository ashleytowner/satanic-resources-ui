import { useRouter } from "next/dist/client/router";
import { useGetResourceQuery } from "../../src/generated/graphql";
import ResourceImage from "../../components/ResourceImage";
import Tag from "../../components/Tag";
import ReactMarkdown from 'react-markdown';
import Head from 'next/head';
import Flag from "../../components/Flag";

function Resource() {
  const router = useRouter();
  const resourceId = String(router.query.resourceId);
  const { data } = useGetResourceQuery({
    variables: {
      id: resourceId,
    },
  });
  if (!data?.resource) {
      return null;
  }
  const { title, description, image, links, metadata, flag, tags } = data?.resource;
  return (
    <div className="
                    m-auto 
                    my-8 
                    w-11/12 
                    max-w-screen-xl
                    flex
                    flex-col
                    gap-4 
                    md:grid
                    md:grid-cols-2 
                    md:grid-rows-2 
                    lg:grid-cols-4 
                    lg:grid-rows-2 
      ">
      <Head>
        <title>{title || ''} | {process.env.NEXT_PUBLIC_SITENAME}</title>
        <meta property="og:title" content={title} />
        <meta property="og:image" content={image?.url} />
        <meta property="og:type" content="Website" />
      </Head>
      <main className="card p-0 grid md:col-span-2 lg:col-span-3 lg:row-span-2 grid-rows-2">
        <ResourceImage src={image?.url} />
        <div className="m-8">
          <h1 className="font-bold text-3xl">{title || ""}</h1>
          { flag ? <Flag type={flag.type} details={flag.details} /> : null}
          <ReactMarkdown>{description || ''}</ReactMarkdown>
        </div>
      </main>
      <div className="card">
        {links?.length ? <h2 className="font-bold text-2xl">Links</h2> : null}
        <ul>
          {links?.map((link) => (
            <li key={link?.url}>
              <a href={String(link?.url)}>{link?.label}</a>
            </li>
          ))}
        </ul>
        {metadata?.length ? <h2 className="font-bold text-2xl">More Info</h2> : null}
        <ul>
          {metadata?.map((meta => (
            <li key={meta?.title}>
              <span className="font-bold">{meta?.title}</span> {meta?.value}
            </li>
          )))}
        </ul>
      </div>
      <div className="card">
        <h2 className="font-bold text-2xl">Tags</h2>
        <div>
          {tags ?
            tags.map(
              (tag) => tag && <Tag key={tag.id} id={tag.id} name={tag.name} />
            ): null}
        </div>
      </div>
    </div>
  );
}

export default Resource;

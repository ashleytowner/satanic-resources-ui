import { NextPage } from "next";
import { useState } from "react";
import ResourceCard from "../components/ResourceCard";
import Head from 'next/head';
import Search from "../components/Search";
import { useGetResourcesQuery } from "../src/generated/graphql";

const Resources: NextPage = () => {
  const [search, setSearch] = useState('');
  const { data } = useGetResourcesQuery({
    variables: {
      search: search
    }
  });

  const handleSearch = (query: string) => {
    setSearch(query);
  }
  return (
    <div>
      <Head>
        <title>{process.env.NEXT_PUBLIC_SITENAME}</title>
      </Head>
      <Search onSearch={handleSearch}/>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-11/12 m-auto my-8">
        {data?.resources?.map(resource => {
          return (<ResourceCard resource={resource} key={resource?.id} />)
        }) || null}
      </div>
    </div>
  )
}

export default Resources;

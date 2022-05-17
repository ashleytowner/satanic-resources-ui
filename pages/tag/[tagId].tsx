import { useRouter } from "next/dist/client/router";
import ResourceCard from "../../components/ResourceCard";
import { Resource, useGetTagQuery } from "../../src/generated/graphql";

function Tag() {
  const router = useRouter();
  const tagId = String(router.query.tagId);
  const { data } = useGetTagQuery({
    variables: {
      id: tagId,
    },
  });

  return (
    <div>
      <h1 className="w-11/12 m-auto">{data?.tag?.name ? `# ${data.tag.name}` : ""}</h1>
      <p className="w-11/12 m-auto my-2">{data?.tag?.description}</p>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-11/12 m-auto my-8">
        {data?.tag?.resources &&
          (data.tag.resources as Resource[]).map((resource) => {
            return <ResourceCard key={resource.id} resource={resource} />;
          }
        )}
      </div>
    </div>
  );
}

export default Tag;

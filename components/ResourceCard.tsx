import { KeyboardEventHandler, MouseEventHandler } from "react";
import { GetResourcesQuery } from "../src/generated/graphql";
import truncate from "../util/truncate";
import ResourceImage from "./ResourceImage";
import Link from "next/link";

const navigate = (url: string) => {
  window.location.href = url;
};

function ResourceCard(props: {
  resource: Exclude<GetResourcesQuery["resources"], null | undefined>[number];
}) {
  const { resource } = props;

  if (!resource) {
    return null;
  }

  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    navigate(`/resource/${resource.id}`);
  };

  const handleKeydown: KeyboardEventHandler<HTMLButtonElement> = (e) => {
    if (e.key === "Enter") {
      handleClick(undefined as any);
    }
  };

  return (
    <Link passHref={false} href={`/resource/${resource.id}`}>
      <a className="no-underline text grid">
        <div
          className={`card p-0 grid ${
            resource.image?.url ? "grid-rows-2" : "grid-rows-1 items-center"
          } h-70 gap-6 hover:bg-l2 hover:cursor-pointer`}
        >
          {resource.image?.url && (
            <ResourceImage priority src={resource.image?.url} />
          )}
          <div
            className={`flex m-4 ${
              !resource.image?.url ? "h-3/6" : ""
            } flex-col justify-items-center`}
          >
            <h2 className="text-xl font-bold text-center">{resource.title}</h2>
            <div className="bg-acc box m-auto">
              {resource.resourceFormat?.name}
            </div>
            <p>{truncate(resource.description, 100)}</p>
          </div>
        </div>
      </a>
    </Link>
  );
}

export default ResourceCard;

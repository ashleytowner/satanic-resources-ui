interface TagProps {
  name: string;
  id: string;
}

function Tag(props: TagProps) {
  return <div><a href={`/tag/${props.id}`}>#{props.name}</a></div>;
}

export default Tag;

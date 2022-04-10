import Progress from "./Progress";

export default function ListItem() {
  return (
    <li>
      <div className="list-item-detail">
        <span>Icon</span>
        <span>File Name</span>
      </div>
      <div className="list-item-progress">
        <Progress />
        {/* <progress /> */}
      </div>
    </li>
  );
}

import '../styles/tags.css'

export default function Tags(props) {
  return (
    <div className="tag">
      <p className="tag-content">{props.content}</p>
    </div>
  );
}


type Props = {
  title: string;
  body: string;
}
function Card({title, body}: Props) {
  return (
    <div className='card'>
        <div className='card-title'>{title}</div>
        <p className='card-body'>{body}</p>
    </div>
  )
}

export default Card
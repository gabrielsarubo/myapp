import './index.css'

const QuestionCardListItem = ({ title, desc, iconUri }) => {
  return (
    <div className='QuestionCardListItem'>
      <div className="icon-container">{iconUri}</div>
      <div className="main-container">
        <div className='h5 title'>{title}</div>
        <div className='text-muted desc'>{desc}</div>
      </div>
    </div>
  )
}
 
export default QuestionCardListItem

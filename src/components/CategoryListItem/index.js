import './index.css'

const CategoryListItem = ({ title, desc, iconUri }) => {
  return (
    <div className='CategoryListItem'>
      <div className="icon-container">{iconUri}</div>
      <div className="main-container">
        <div className='h5 title'>{title}</div>
        <div className='text-muted desc'>{desc}</div>
      </div>
    </div>
  )
}
 
export default CategoryListItem

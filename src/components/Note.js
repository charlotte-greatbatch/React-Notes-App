import { MdDeleteForever } from 'react-icons/md'

const Note = () => {
  return (
    <div className="note">
      <span>Hello this is our first note</span>
      <div className="note-footer">
        <small>/8/18/2022</small>
        <MdDeleteForever className="delete-icon" size="1.3em" />
      </div>
    </div>
  )
}

export default Note

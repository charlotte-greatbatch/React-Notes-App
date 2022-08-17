import { useState } from 'react'
import { nanoid } from 'nanoid'
import NotesList from './components/NotesList'

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: 'Test text',
      date: '18/08/2022',
    },
    {
      id: nanoid(),
      text: 'second test',
      date: '18/04/2022',
    },
    {
      id: nanoid(),
      text: 'third test',
      date: '18/09/2022',
    },
  ])

  const addNote = (text) => {
    const date = new Date()
    const newNote = {
      id: nanoid,
      text: text,
      date: date.toLocaleDateString(),
    }
    const newNotes = [...notes, newNote]
    setNotes(newNotes)
  }

  return (
    <div className="container">
      <NotesList notes={notes} handleAddNote={addNote} />
    </div>
  )
}

export default App

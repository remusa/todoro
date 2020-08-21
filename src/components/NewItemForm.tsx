import React, { useState } from 'react'
import { NewItemButton, NewItemFormContainer, NewItemInput } from './shared/Shared'

interface NewItemFormProps {
  onAdd(text: string): void
}

const NewItemForm = ({ onAdd }: React.PropsWithChildren<NewItemFormProps>) => {
  const [text, setText] = useState('')

  return (
    <NewItemFormContainer>
      <NewItemInput value={text} onChange={e => setText(e.target.value)}>
        Create
      </NewItemInput>

      <NewItemButton onClick={() => onAdd(text)}>Create</NewItemButton>
    </NewItemFormContainer>
  )
}

export default NewItemForm

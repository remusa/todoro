import React, { useState } from 'react'
import { useFocus } from '~utils/useFocus'
import { NewItemInput } from './NewItemInput'
import { NewItemFormContainer } from './NewItemFormContainer'
import { NewItemButton } from './NewItemButton'

interface NewItemFormProps {
  onAdd(text: string): void
}

const NewItemForm = ({ onAdd }: NewItemFormProps) => {
  const [text, setText] = useState('')
  const inputRef = useFocus()

  return (
    <NewItemFormContainer>
      <NewItemInput inputRef={inputRef} value={text} onChange={e => setText(e.target.value)} />

      <NewItemButton onClick={() => onAdd(text)}>Create</NewItemButton>
    </NewItemFormContainer>
  )
}

export default NewItemForm

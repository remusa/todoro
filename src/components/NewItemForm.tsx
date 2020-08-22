import React, { useState } from 'react'
import { useFocus } from '~utils/useFocus'
import { NewItemInput } from './shared/NewItemInput'
import { NewItemFormContainer } from './shared/NewItemFormContainer'
import { NewItemButton } from './shared/NewItemButton'

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

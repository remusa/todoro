import React, { useState } from 'react'
import NewItemForm from './NewItemForm'
import { AddItemButton } from './shared/Shared'

interface AddNewItemProps {
  onAdd(text: string): void
  toggleButtonText: string
  dark?: boolean
}

const AddNewItem = (props: React.PropsWithChildren<AddNewItemProps>) => {
  const { onAdd, toggleButtonText, dark } = props
  const [showForm, setShowForm] = useState(false)

  if (showForm) {
    return (
      <NewItemForm
        onAdd={text => {
          onAdd(text)
          setShowForm(false)
        }}
      />
    )
  }

  return <AddItemButton onClick={() => setShowForm(true)} value={toggleButtonText} dark />
}

export default AddNewItem

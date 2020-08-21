import React, { useState } from 'react'
import NewItemForm from './NewItemForm'

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

  return <button onClick={() => setShowForm(true)}>{toggleButtonText}</button>
}

export default AddNewItem

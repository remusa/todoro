import React from 'react'

interface Props {
  children: React.ReactNode
}

const PageError = ({ children }: Props) => (
  <div>
    <div>{children}</div>
  </div>
)

export default PageError

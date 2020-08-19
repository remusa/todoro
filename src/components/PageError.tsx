import React from 'react'
import Layout from './Layout'

interface Props {
  children: React.ReactNode
}

const PageError = ({ children }: Props) => (
  <Layout>
    <div>{children}</div>
  </Layout>
)

export default PageError

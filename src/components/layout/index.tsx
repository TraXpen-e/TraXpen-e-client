import React from 'react'
import { LayoutProps, AntdLayout } from '@pankod/refine'

require('./style.less')

export const Layout: React.FC<LayoutProps> = ({ children, Header }) => {
  return (
    <>
      <AntdLayout style={{ minHeight: '100vh' }}>
        <Header />
        <AntdLayout className='inner'>
          <AntdLayout.Content>
            {children}
            <h1>Hello world</h1>
          </AntdLayout.Content>
        </AntdLayout>
      </AntdLayout>
    </>
  )
}

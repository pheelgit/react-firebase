import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom'

import { Shoppage } from 'components/Shoppage/Shoppage'
import { TodoPage } from 'components/Todopage/Todopage'
import { TestPage } from 'components/TestPage/TestPage'
// import { Notfoundpage } from "components/notfoundpage/Notfoundpage";

export const AppRouter = () => {
  const AppRouter = useRoutes([
    { path: '/', element: <TodoPage />, index: 'index' },
    { path: 'shoplist/*', element: <Shoppage /> },
    { path: 'test/', element: <TestPage /> },
    // { path: "*", element: <Notfoundpage /> },
  ])
  return AppRouter
}

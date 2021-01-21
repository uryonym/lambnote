import React, { useEffect } from 'react'
import { Sidebar } from 'components/Sidebar'
import { Editor } from 'features/editor/Editor'
import { LoginForm } from 'features/users/LoginForm'

import * as authService from 'lib/graph/AuthService'
import { useDispatch } from 'react-redux'
import { fetchUserData } from 'features/users/userSlice'
import { fetchLambNotebookData } from 'features/notes/noteSlice'

const App: React.FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    if (authService.isAuth()) {
      dispatch(fetchUserData())
      dispatch(fetchLambNotebookData())
    }
  }, [dispatch])

  if (authService.isAuth()) {
    return (
      <div className="wrapper">
        <Sidebar />
        <Editor />
      </div>
    )
  } else {
    return <LoginForm />
  }
}

export default App

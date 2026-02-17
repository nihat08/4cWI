import React from 'react'
import { Auth } from './components/auth'

type Props = {}

export default function FirebaseApp({}: Props) {
  return (
    <div className="firebase-app">
      <Auth />
    </div>
  )
}
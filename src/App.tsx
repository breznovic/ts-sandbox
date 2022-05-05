import React, { useState } from 'react'
import './App.css'
import AddToList from './components/AddToList'
import List from './components/List'

export interface IState {
  people: {
    name: string
    age: number
    url: string
    note?: string
  }[]
}

function App() {

  const [people, setPeople] = useState<IState['people']>([
    {
      name: 'Igor Voronin',
      url: 'https://pp.userapi.com/c620027/v620027891/fde4/5LYJY1C26o4.jpg',
      age: 28,
      note: 'Like to eat fruits'
    },
    {
      name: 'Pavel Jabliak',
      url: 'https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80',
      age: 31,
      note: 'Buy a new car'
    },
    {
      name: 'Alex Abramov',
      url: 'https://pwpvp.net/forum/attachments/50422.jpg',
      age: 25,
      note: 'Like Jelen beer'
    }
  ])

  return (
    <div className='App'>
      <h1>
        People invited to my party
      </h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  )
}

export default App

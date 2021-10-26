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
      url: 'https://lh3.googleusercontent.com/proxy/VdM5TF-3md0Q4rE2ozTfeJjI0WHYnpUxIxhMAZuBlgwLdmHg9QseZ2LNGQ73zjv-TN4fgyYF3jGkr9wOKE2bxRaCC-ws9z8',
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

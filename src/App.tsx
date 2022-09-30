import { useQueries, useQuery } from '@tanstack/react-query'
import React from 'react'

import { Line } from './Line'
import { westTailLine } from './lines'

export const App = () => {
  return (
    <div className="App">
      <Line config={westTailLine} />
    </div>
  )
}

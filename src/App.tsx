import { EAL } from './containers/EAL'
import { Header } from './containers/Header'
import { TCL } from './containers/TCL'
import { TML } from './containers/TML'
import { TWL } from './containers/TWL'

export const App = () => {
  return (
    <>
      <Header />
      <TML />
      <EAL />
      <TCL />
      <TWL disabled />
    </>
  )
}

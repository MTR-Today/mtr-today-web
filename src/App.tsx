import { AEL } from './containers/AEL'
import { EAL } from './containers/EAL'
import { Header } from './containers/Header'
import { TCL } from './containers/TCL'
import { TKL } from './containers/TKL'
import { TML } from './containers/TML'
import { TWL } from './containers/TWL'

export const App = () => {
  return (
    <>
      <Header />
      <TML />
      <EAL />
      <TCL />
      <TKL />
      <AEL />
      <TWL disabled />
    </>
  )
}

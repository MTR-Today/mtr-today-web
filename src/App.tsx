import { AEL } from './containers/AEL'
import { DRL } from './containers/DRL'
import { EAL } from './containers/EAL'
import { Header } from './containers/Header'
import { ISL } from './containers/ISL'
import { KTL } from './containers/KTL'
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
      <KTL disabled />
      <TWL disabled />
      <ISL disabled />
      <DRL disabled />
    </>
  )
}

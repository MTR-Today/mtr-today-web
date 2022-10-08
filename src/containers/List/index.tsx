import React from 'react'
import { AEL } from './AEL'
import { DRL } from './DRL'
import { EAL } from './EAL'
import { ISL } from './ISL'
import { KTL } from './KTL'
import { SIL } from './SIL'
import { TCL } from './TCL'
import { TKL } from './TKL'
import { TML } from './TML'
import { TWL } from './TWL'

export const List = () => {
  return (
    <>
      <TML />
      <EAL />
      <TCL />
      <TKL />
      <AEL />
      <KTL disabled />
      <TWL disabled />
      <ISL disabled />
      <SIL disabled />
      <DRL disabled />
    </>
  )
}

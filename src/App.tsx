import React, { useState } from 'react';
import './App.css';
import { Acardion } from './components/Acardion/Acardion';
import { Raiting, RatingValueType } from './components/Rating/Rating';
import { OnOff } from './components/OnOff/OnOff';
import { AcardionUncontroled } from './components/AcardionUncotroled/AcardionUncontroled';
import { RatingUncontroled } from './components/RatingUncontroled/RatingUncontroled';
import { OnOffControl } from './components/OnOffControl/OnOffControl';

const App = () => {

  const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
  const [acardionCollapsed, setAcardionCollapsed] = useState<boolean>(false)
  const [switchOn, setSwitchOn] = useState<boolean>(false)

  return (
    <div className="App">
      {/* <OnOff />
      <OnOff />
      <OnOff /> */}
      <OnOff onChange={setSwitchOn}/>{switchOn.toString()}
      <OnOffControl on={switchOn} onChange={setSwitchOn} />
      <AppTitle />
      Article 1
      <Raiting value={ratingValue} onClick={setRatingValue} />
      <Acardion
        title={'Acardion title1'}
        collapsed={acardionCollapsed}
        onChange={() => { setAcardionCollapsed(!acardionCollapsed) }} />
      {/* <Acardion title={'Acardion title2'} collapsed={acardionCollapsed}/>  */}
      Article 2

      {/* <Raiting value={ratingValue} onClick={setRatingValue}/> */}


      {/* <AcardionUncontroled title='UncotroledAcardion' />
      <RatingUncontroled />
      <AcardionUncontroled title='UncotroledAcardionSecond' />
      <RatingUncontroled /> */}

    </div>
  );
}



function AppTitle() {
  return (
    <div>This is App component</div>
  )
}



export default App;

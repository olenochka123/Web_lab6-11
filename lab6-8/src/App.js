import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

import Header from './components/header'
import Footer from './components/footer'
import CatalogPage from './components/catalog-page'
import HomePage from './components/home-page'
import EquipPage from './components/equip-page'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage itemsList={equip} />
        </Route>
        <Route path="/catalog">
          <CatalogPage itemsList={equip} />
        </Route>
        <Route path="/equip/:id">
          <EquipPage itemsList={equip} />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

const equip = [
  {
      header: 'Leonardo Hotel City Center ',
      id: 1,
      price: 2400,
      country: 'Ukraine',
      type: 'Hotel',
      text: ' | Kurenivska street 5/7,Kyiv ',
      img: 'https://www.leonardo-hotels.ru/octopus/Upload/images/Pages/rcdbllhhecc01mai18800x600.jpg'
  },
  {
      header: 'Villa Summer Sunset ',
      id: 2,
      price: 21000,
      country: 'Spain',
      type: 'Villa',
      text: ' | Extramuros 74,Madrid',
      img: 'https://cf.bstatic.com/images/hotel/max500/163/163300408.jpg'
  },
  {
      header: 'The Mitrosteliana Villa',
      id: 3,
      price: 1200,
      country: 'Italy',
      type: 'Villa',
      text: ' | Via del Mascherone 132,Cagliari',
      img: 'https://s7d2.scene7.com/is/image/ritzcarlton/50475785-SKY%20VILLA%20GAZEBO?$XlargeViewport100pct$'
  },
  {
      header: 'Apartments for Rent in Modena',
      id: 4,
      price: 3200,
      country: 'Italy',
      type: 'Apartments',
      text: ' | Piazza Bovio 135,Modena',
      img: 'https://rentpath-res.cloudinary.com/w_336,h_280,t_rp,cs_tinysrgb,fl_force_strip,c_fill/e_unsharp_mask:50,q_auto/8d613dd137b6ca443622ce9b29eba1ff'
  },
  {
      header: 'Villa Majica Isparrena',
      id: 5,
      price: 12000,
      country: 'Turkey',
      type: 'Villa',
      text: ' | AĞIR SAN.BÖL.8.S N 11,Merkez',
      img: 'https://cf.bstatic.com/images/hotel/max1024x768/120/120882420.jpg'
  },
  {
      header: 'Accomodation in Eastin Hotel',
      id: 6,
      price: 3800,
      country: 'Egypt',
      type: 'Hotel',
      text: ' | 91 Gesr El Suez St., Cairo',
      img: 'https://cdn.galaxy.tf/unit-media/tc-default/uploads/images/room_photo/001/579/602/dlx3-standard.jpg'
  },
  {
      header: 'Lyric Hotel Rome Opera',
      id: 7,
      price: 2200,
      country: 'Italy',
      type: 'Hotel',
      text: ' | Via Palermo 145, Rome',
      img: 'https://lyrichotelparis.com/_novaimg/4530572-1400586_0_26_3500_2251_1400_900.rc.jpg'
  }
]

export default App;

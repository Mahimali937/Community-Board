import './App.css';
import Card from './components/Card.jsx';

const App = () => {

  return (
    <div className="App">
    <header>
    <h1 class='heading'>Coffee Shops in NYC</h1>
    </header>
    <div className='Card-Container'>
    <Card
    name='787 Coffee'
    image='./src/assets/787Coffee.jpg'
    link='https://www.google.com/maps/place/787+Coffee/@40.7143457,-73.9516162,17z/data=!3m1!4b1!4m6!3m5!1s0x89c2598d2cd1eaf5:0x3f949b06b7941592!8m2!3d40.7143457!4d-73.9490413!16s%2Fg%2F11t0t3wb16?entry=ttu'
    />
    <Card
    name='Culture Espresso'
    image='./src/assets/CultureEspresso.jpg'
    link='https://www.google.com/maps/place/Culture+Espresso/@40.7550658,-73.9921635,17z/data=!3m1!4b1!4m6!3m5!1s0x89c259ad2205b58b:0x16c5512da2cb5046!8m2!3d40.7550658!4d-73.9921635!16s%2Fg%2F11c6lcy8vg?entry=ttu'
    />
    <Card
    name='Saltwater Coffee'
    image='./src/assets/SaltwaterCoffee.jpg'
    link='https://www.google.com/maps/place/Saltwater+Coffee/@40.7303073,-73.9865375,17z/data=!3m1!4b1!4m6!3m5!1s0x89c2590729c0cfed:0xaecc1e88c214b7a0!8m2!3d40.7303033!4d-73.9839626!16s%2Fg%2F11fxzqgz3n?entry=ttu'
    />
    <Card
    name='Bird & Branch'
    image='./src/assets/Bird&Branch.jpg'
    link='https://www.google.com/maps/place/Bird+%26+Branch/@40.7603366,-73.9908687,16z/data=!3m1!4b1!4m6!3m5!1s0x89c25853c46c584d:0x2be347662f0035e!8m2!3d40.7603366!4d-73.9908687!16s%2Fg%2F11hbtg2w_k?entry=ttu'
    />
    <Card
    name='Think Coffee'
    image='./src/assets/ThinkCoffee.jpg'
    link='https://www.google.com/maps/place/Think+Coffee/@40.728342,-73.9978609,17z/data=!3m1!4b1!4m6!3m5!1s0x89c259851852abd5:0xd439f8da9b71229b!8m2!3d40.728338!4d-73.995286!16s%2Fg%2F1td1fb3d?entry=ttu'
    />
    <Card
    name='Everyman Espresso'
    image='./src/assets/EverymanEspresso.jpg'
    link='https://www.google.com/maps/place/Everyman+Espresso/@40.732717,-73.9909004,17z/data=!3m1!4b1!4m6!3m5!1s0x89c2599ecf15a58d:0xfc78d19c97d68454!8m2!3d40.732713!4d-73.9883255!16s%2Fg%2F1thxrk9k?entry=ttu'
    />
    <Card
    name='Gregorys Coffee'
    image='./src/assets/GregorysCoffee.jpg'
    link='https://www.google.com/maps/place/Gregorys+Coffee/@40.7558298,-73.9852111,17z/data=!3m1!4b1!4m6!3m5!1s0x89c258ffefd5bec5:0xf78eae228a7408b1!8m2!3d40.7558258!4d-73.9826362!16s%2Fg%2F1tj3l_gt?entry=ttu'
    />
    <Card
    name='St Kilda Coffee'
    image='./src/assets/StKildaCoffee.jpg'
    link='https://www.google.com/maps/place/St+Kilda+Coffee/@40.7590278,-73.9928346,17z/data=!3m1!4b1!4m6!3m5!1s0x89c2585398cb1ecd:0x1c444f8aa8477495!8m2!3d40.7590238!4d-73.9902597!16s%2Fg%2F11c2091lqr?entry=ttu'
    />
    <Card
    name='Ground Support Cafe'
    image='./src/assets/GroundSupportCafe.jpg'
    link='https://www.google.com/maps/place/Ground+Support+Cafe/@40.7242943,-74.0045359,17z/data=!3m2!4b1!5s0x89c2598c15000da5:0xa3103f49b753a26b!4m6!3m5!1s0x89c2598c15907921:0x194df40b518f1187!8m2!3d40.7242903!4d-74.001961!16s%2Fg%2F1tgdpgnh?entry=ttu'
    />
    <Card
    name='Black Press Coffee'
    image='./src/assets/BlackPressCoffee.jpg'
    link='https://www.google.com/maps/place/Black+Press+Coffee/@40.778007,-73.9812033,17z/data=!3m1!4b1!4m6!3m5!1s0x89c2592f9909fc55:0x9185189d380a814e!8m2!3d40.778003!4d-73.9786284!16s%2Fg%2F11fj7gtczr?entry=ttu'
    />
    </div>
    </div>
  );
};

export default App;
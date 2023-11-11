import './App.css';
import Search from './Navbar/Search'
// import logo from './logo.svg'

const myStyle={
  backgroundImage: 
"url('https://wallpapertag.com/wallpaper/full/4/d/7/317105-gorgerous-food-background-2990x1918-for-mobile-hd.jpg')",
  height:'100vh',
  // marginTop:'-70px',
  fontSize:'25px',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};
function App() {
  return (
    <div style = {myStyle}>
      {/* <img src={logo} className='App-Logo' alt='logo'></img> */}
      <Search></Search>
      {/* <button>Simple Button</button> */}
      {/* <StyledButton>Styled Button</StyledButton> */}
    </div>
  );
}

export default App;

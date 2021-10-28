import '../style.css';
import './AddedListToast';


const Body = ({ inputValue, setInputValue, buttonClick }) => {

  return (
    <body>
    <div className="container">
      <div className="header">
        <img
          src="https://cdn.sanity.io/images/9kdepi1d/production/65c832d202a503b15d99e628f4313782f3ef50db-300x62.png"
          className="mb-1"
          alt=""
        />
        <h2>Yapılacaklar Listesi</h2>
        <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} type="text" id="task" placeholder="Bugün ne yapacaksın?" />
        <span onClick={buttonClick} id="liveToastBtn" className="button"
          >Ekle</span
        >
      </div>
    </div>
  </body>
  );
}

export default Body;
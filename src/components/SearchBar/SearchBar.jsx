import style from './SearchBar.module.css';
import imageLogo from '../../image/logoNav.png'; // ruta actualizada

export default function SearchBar(props) {

   const handleEnter = (event) => {
      if (event.key === 'Enter') {
         props.onSearch();
      }      
   }

   return (
      <div className={style.containerSearch}>
      <img 
         src={imageLogo} 
          alt="logo rick and morty" 
          className={style.logo} 
      />

   
      <div className={style.containerInput}>
      <input
         type="search"
         placeholder="Search..."
         className={style.input}
         onKeyUp={handleEnter}
      />   
      <button
         onClick={props.onSearch}
         className={style.button}
      >
      </button>
      </div>
      </div>
            
   
   ); 
}

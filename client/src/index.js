import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { 
    faSearch,
    faSeedling,
    faHeart,
    faBlog,
    faSignInAlt,
    faUserPlus 
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faSearch, //FormBtn
  faSeedling, //NavLinks
  faHeart, //NavLinks
  faBlog, //NavLinks
  faSignInAlt, //NavLinks
  faUserPlus //NavLinks
);

ReactDOM.render(<App />, document.getElementById('root'));

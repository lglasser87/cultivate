import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { library } from '@fortawesome/fontawesome-svg-core';
import { 
    faSearch,
    faSeedling,
    faHeart,
    faBlog,
    faSignInAlt,
    faUserPlus,
    faTrashAlt 
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faSearch, //FormBtn
  faSeedling, //NavLinks
  faHeart, //NavLinks
  faBlog, //NavLinks
  faSignInAlt, //NavLinks
  faUserPlus, //NavLinks
  faTrashAlt //DeleteBtn
);

ReactDOM.render(<App />, document.getElementById('root'));

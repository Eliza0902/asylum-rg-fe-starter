import FormButton from './FormButton';
import FormInput from './FormInput';
import List from './List';
import LoadingComponent from './LoadingComponent';
import Button from './Button';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { BrowserRouter as Router } from 'react-router-dom';
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';

import './index.css';

ReactDOM.render(
  <Router>
    <Auth0ProviderWithHistory>
      <App />
    </Auth0ProviderWithHistory>
  </Router>,
  document.getElementById('root')
);
// notice we're building out a 'package' of reusables here and exporting them as an object of component properties.
// to use this, simply `import {foo, bar, baz} from '<path-to-this-directory>/ReusableComponents';`
export { FormButton, FormInput, List, LoadingComponent, Button };

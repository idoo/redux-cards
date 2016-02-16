import React from 'react';
import {Provider} from 'react-redux';
import configureStore from '../store/configure_store';
import Cards from '../containers/cards_container';
import {renderDevTools} from '../utils/dev_tools';

const store = configureStore();

export default React.createClass({
  render() {
    return (
      <div>

        {/* <Home /> is your app entry point */}
        <Provider store={store}>
          <Cards />
        </Provider>

        {/* only renders when running in DEV mode */
          renderDevTools(store)
        }
      </div>
    );
  }
});

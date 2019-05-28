import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import { FormattedMessage } from 'react-intl';
import UserDetail from './UserDetail';
// import actions from '../actions/index.js';

// class App extends Component {
//
//   render()

const User = (props) => {
  return (
    <div>
      <h1>
        {/* 如果不定义变量，只是用来显示json中对应的数据，直接把key放到id就可以显示了 */}
        <FormattedMessage id="intl.hello" />
        {/* <FormattedMessage id="intl.name" /> */}
        {/* 如果id对应的值存在变量，可以在values中去设置 */}
        <FormattedMessage id="intl.name" values={{ name: 'Tom', age: 14 }} />

        {/* defaultMessage 在id找不到对应的值时生效，否则显示id对应的值
        <FormattedMessage id="intl.namea" defaultMessage="Lily" /> */}
        {/* <FormattedMessage
          id="intl.name"
          description="Greeting to welcome the user to the app"
          defaultMessage="Hello, {name}!"
          values={{
            name: 'Eric',
          }}
        /> */}
      </h1>
      <UserDetail />
    </div>
  );
};
export default User;

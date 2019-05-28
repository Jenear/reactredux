import React from 'react';

import { FormattedMessage, FormattedDate } from 'react-intl';

const UserDetail = (props) => {
  return (
    <div>
      <FormattedMessage id="intl.hello" />
      <p style={{ color: 'red' }}>我是通过tagName把下面的标签改为p标签</p>
      <FormattedMessage
        id="intl.name"
        values={{ name: 'Lily', age: 18 }}
        tagName="p"
      />
      <div>
        <FormattedDate value={new Date(1558575314000)} />
      </div>
    </div>
  );
};
export default UserDetail;

# React 做国际化 实现多语言：推荐使用 react-intl

这个库提供了 React 组件和 Api 两种方式来格式化日期、数字和字符串等

## 组件用法

- 安装：npm install react-intl -S
- 添加引用：import {IntlProvider, addLocaleData} from 'react-intl';
- 添加 locale 配置文件：

```
zh-CN.js

const zh_CN = {
     'intl.hello': "你好",
     'intl.name': '我的名字是 {name}'
  }
export default zh_CN;
```

```
en-US.js
const en_US = {
     'intl.hello': "hello",
     'intl.name': 'my name is {name}'
 }
 export default en_US;
```

- 使用 IntlProvider

```这个组件用于设置 i18n 的上下文，它将包装应用程序的根组件，以便整个应用程序将配置在 i18n 的上下文中.
最主要的两个配置项是： loacle 当前的语言环境 messages 当前语言的内容。
我们要动态切换语言，需要动态改这两个配置。

import zhCN from './locale/zh.js';    //导入 i18n 配置文件
import enUS from './locale/en.js';

addLocaleData([...en, ...zh]);

export default class Root extends Component {
    static propTypes = {
        store: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    }

    render() {
        const { store , history } = this.props;
        return (
            <IntlProvider locale='zh' messages={zhCN}>
                <Provider store={store}>
                    <Router history={history}>
                    </Router>
                </Provider>
            </IntlProvider>
        )
    }
}
```

- 使用 FormattedMessage

```
<FormattedMessage
    id="intl.name"
    values={{name: <b>{name}</b>}}
/>
```

import './styles/index.scss';

import React, {FC} from 'react';
import ReactDOM from 'react-dom';
import Main from './screens/Main';

const App: FC = () => (
	<React.StrictMode>
		<Main />
	</React.StrictMode>
);

ReactDOM.render(<App />, document.getElementById('root'));

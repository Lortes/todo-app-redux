import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'; // Asegúrate de importar Provider
import store from './store'; // Importa tu almacén de Redux
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}> {/* Envuelve tu aplicación con Provider y pasa el almacén */}
			<App />
		</Provider>
	</React.StrictMode>,
)

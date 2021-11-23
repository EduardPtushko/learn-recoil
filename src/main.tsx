import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import './index.css'
import Canvas from './Canvas'

ReactDOM.render(
	<React.StrictMode>
		<RecoilRoot>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Canvas />} />
				</Routes>
			</BrowserRouter>
		</RecoilRoot>
	</React.StrictMode>,
	document.getElementById('root'),
)

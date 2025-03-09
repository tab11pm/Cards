import Dashboard from './components/Dashboard';
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from 'react-router-dom';
import Finalize from './components/Finalize';
import Results from './components/Results';
function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<Dashboard />} />
					<Route path="/finalize/:id" element={<Finalize />} />
					<Route path="/results/:id" element={<Results />} />
					<Route path="*" element={<Navigate to="/" replace />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;

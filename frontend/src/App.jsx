import React, { useContext } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Nav from './components/nav'
import CompletedPage from './pages/Completed/index'
import UpcomingPage from './pages/Upcoming'
import { ModalContext } from './context/ModalContext'
import NewDeadline from './components/modals/admin/newDeadline'
import UserViewDeadline from './components/modals/user/userViewDeadline/userView'
import EditDeadline from './components/modals/admin/editDeadline/editDeadline'
import AdminView from './components/modals/admin/viewDeadline/adminView'
import AdminViewOther from './components/modals/admin/adminViewOther'

import './styles/index.css'
import './styles/scroll.css'
import 'react-activity/dist/Spinner.css'

const App = () => {
	const { modalData } = useContext(ModalContext)

	return (
		<BrowserRouter>
			{modalData.modalShow && modalData.modalType === 'adminCreate' && (
				<NewDeadline />
			)}
			{modalData.modalShow && modalData.modalType === 'userView' && (
				<UserViewDeadline {...modalData.modalData} />
			)}
			{modalData.modalShow && modalData.modalType === 'adminView' && (
				<AdminView {...modalData.modalData} />
			)}
			{modalData.modalShow && modalData.modalType === 'adminEdit' && (
				<EditDeadline details={{ ...modalData.modalData }} />
			)}
			{modalData.modalShow && modalData.modalType === 'adminViewOther' && (
				<AdminViewOther details={{ ...modalData.modalData }} />
			)}
			<nav className="p-5 ">
				<Nav />
			</nav>
			<main className="p-5 ">
				<Switch>
					<Route path="/" exact>
						<UpcomingPage />
					</Route>
					<Route path="/completed">
						<CompletedPage />
					</Route>
				</Switch>
			</main>
		</BrowserRouter>
	)
}

export default App

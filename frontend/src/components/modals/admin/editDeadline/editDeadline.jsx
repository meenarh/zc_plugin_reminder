import React, { useState, useContext } from 'react'
import ColTitleDes from '../../component/columnTitleDes'
import TextField from '../../component/textField'
import DatePicker from '../../component/datePicker2'
import RadioButton from '../../component/radioButton/radioButton'
import Priority from '../../component/priority'
import ModalBase from '../../modalBase/index'
import ModalButton from '../../component/button'
import { ModalContext } from '../../../../context/ModalContext'

// prop value format= {
// 	title: 'fuck',
// 	description: 'locuebcif efifhbvsfdi srivfbskbvdib  ivab',
// 	start: '2021-11-03',
// 	due: '2021-11-09',
// 	radio: 'high',
//  assignTo: "#marketing"
// }
const EditDeadline = ({ details }) => {
	const { modalData, setModalData } = useContext(ModalContext)
	const closeModal = () => setModalData({ ...modalData, modalShow: false })

	let data = {
		description: details.description,
		title: details.title,
		start: details.start,
		due: details.due,
		assignTo: details.assignTo,
		radio: details.radio,
	} //should receive initial data from props

	const [radio, setRadio] = useState(data.radio)

	return (
		<ModalBase title="Edit Deadline">
			<div className="flex flex-col gap-y-6">
				<ColTitleDes
					title="Title"
					writeUp={
						<TextField
							placeholder="Deadline Title"
							value={data.title}
							onChange={(value) => {
								data = { ...data, title: value }
							}}
						/>
					}
					alignStretch
				/>

				<ColTitleDes
					title="Description"
					writeUp={
						<TextField
							placeholder="Deadline Description"
							value={data.description}
							onChange={(value) => {
								data = { ...data, description: value }
							}}
						/>
					}
					alignStretch
				/>

				<div className="flex flex-col gap-y-6 w-full md:gap-x-12 md:flex-row">
					<ColTitleDes
						space
						title="Start date"
						writeUp={
							<DatePicker
								value={data.start}
								onChange={(value) => {
									data = { ...data, start: value }
								}}
							/>
						}
						alignStretch
					/>
					<ColTitleDes
						space
						title="Due date:"
						writeUp={
							<DatePicker
								value={data.due}
								onChange={(value) => {
									data = { ...data, due: value }
								}}
							/>
						}
						alignStretch
					/>
				</div>
				<ColTitleDes
					title="Assign to"
					writeUp={
						<TextField
							placeholder="E.g. #channelName"
							value={data.assignTo}
							onChange={(value) => {
								data = { ...data, assignTo: value }
							}}
						/>
					}
					alignStretch
				/>
				<div className="flex flex-col gap-y-3">
					<p className="text-sm leading-none">select priority</p>
					<RadioButton
						id="low"
						selected={radio}
						label={<Priority status="low" />}
						onChange={() => {
							data.radio = 'low'
							setRadio('low')
						}}
					/>
					<RadioButton
						id="medium"
						selected={radio}
						label={<Priority status="medium" />}
						onChange={() => {
							data.radio = 'medium'
							setRadio('medium')
						}}
					/>
					<RadioButton
						id="high"
						selected={radio}
						label={<Priority status="high" />}
						onChange={() => {
							data.radio = 'high'
							setRadio('high')
						}}
					/>
				</div>
				<ModalButton
					actionName="Update"
					actionFunc={() => {}}
					cancelFunc={closeModal}
				/>
			</div>
		</ModalBase>
	)
}

export default EditDeadline

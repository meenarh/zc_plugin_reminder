import axios from 'axios'
import env from '@config/environment'

const { getDevBaseUrl, ORG_ID, PLUGIN_ID } = env

export default function makeDb() {
	// functions go here
	const BASE_URL = `${getDevBaseUrl()}/data`
	const readBaseUrl = `${BASE_URL}/read`
	const writeBaseUrl = `${BASE_URL}/write`

	async function findAll(collectionName) {
		/**
		 * sample of details used
		 * PLUGIN_ID zc_reminder
		 * ORG_ID darwin_organization
		 */
		try {
			const res = await axios.get(
				`${readBaseUrl}/${PLUGIN_ID}/${collectionName}/${ORG_ID}`
			)
			return res.data
		} catch (err) {
			return err.response.data
		}
	}
	return Object.freeze({ findAll })
}

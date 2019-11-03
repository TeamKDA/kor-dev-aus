const BASE_URL = 'https://kdapi.cfapps.io'
const AUTH_KEY = btoa('teamkda:AMaJ9xpQC9qD6scR')

const headers = new Headers()
headers.set('Authorization', `Basic ${AUTH_KEY}`)

export const getRsvp = async ({ campaignId, emailId }) => {
    const url = `${BASE_URL}/api/v1/rsvps/${campaignId}/${emailId}`
    debugger
    const response = await fetch(url, { 
        method: 'GET',
        headers
    })
    return await response.json()
}

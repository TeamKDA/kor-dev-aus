const BASE_URL = 'https://kdapi.cfapps.io'
const AUTH_KEY = 'dGVhbWtkYTpBTWFKOXhwUUM5cUQ2c2NS'

const headers = { 'Authorization': `Basic ${AUTH_KEY}` }

export const getRsvp = async ({ campaignId, emailId }) => {
    const url = `${BASE_URL}/api/v1/rsvps/${campaignId}/${emailId}`
    const response = await fetch(url, { 
        method: 'GET',
        headers
    })
    return await response.json()
}

export const register = async ({ campaignId, emailId }) => {
    const url = `${BASE_URL}/api/v1/rsvps/${campaignId}/${emailId}`
    const response = await fetch(url, { 
        method: 'PUT',
        headers,
        body: JSON.stringify({ rsvpYn: true })
    })
    return await response.json()
}

export const cancel = async ({ campaignId, emailId }) => {
    const url = `${BASE_URL}/api/v1/rsvps/${campaignId}/${emailId}`
    const response = await fetch(url, { 
        method: 'PUT',
        headers,
        body: JSON.stringify({ rsvpYn: false })
    })
    return await response.json()
}

import client from './api'

const getPeople = async () => {

    const res = await client.get('/people');
    return res.data
}

export default getPeople
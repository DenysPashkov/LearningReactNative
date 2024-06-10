import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer HYukNV0D5N9jFMDJYPZ9PBYkzIsUDMih345e-LvG0IRi_yOJ7ny-ibVUn70PuydZZtVFi9XFpGYnL8XsMPX9yD9Vlw-oLY-QXHCo72yKLliFfNYJEuiDOh0BTpZZZnYx'
    }
})
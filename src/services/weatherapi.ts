import axios from 'axios';

export const weatherSearchApiHandler = async (city: string) => {

    const options = {
        method: 'GET',
        url: `https://open-weather13.p.rapidapi.com/city/${city}/EN`,
        headers: {
            'x-rapidapi-key': 'a3580aa4aamsh1615d4563815f52p14867fjsnb4ada19b583d',
            'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        if (response.data.cod === "404") {
            response.data['city'] = city
        }
        return response.data

    } catch (error) {
        console.error(error);
        return { cod: "404", city }
    }
}
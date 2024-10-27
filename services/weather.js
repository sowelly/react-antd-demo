const fetch = require('node-fetch');
const API_KEY = 'c2b8c1f678bc3e1a5df1a5a8ad5364ab'


const getWeather = async (city) => {
    const retries = 3
    for (let i = 1; i <= retries; i++) {
        try {
            console.log('Preparing to fetch weather for city:', city); // 添加日志
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
            const res = await response.json();
            console.log('response:', res); // 添加日志
            return res
        } catch (error) {
            if (i < retries) {
                console.error(`连接失败，原因:${error.message},正在尝试重连第${retries + 1}次`);
                // if (error.response) {
                //     console.error('Response data:', error.response.data);
                // } else if (error.request) {
                //     console.error('No response received:', error.request);
                // }
            }
            throw error; // 将错误抛出，以便调用者处理
        }
    }
};
module.exports = {getWeather}
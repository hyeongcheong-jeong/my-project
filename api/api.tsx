import axios from "axios";

export const client = axios.create({
  baseURL: 'http://localhost:3001'
});

export const cream = axios.create({
  baseURL: 'http://api4adc.cafe24app.com'
})
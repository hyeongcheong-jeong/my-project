import axios from "axios";

export const client = axios.create({
  baseURL: 'http://localhost:3001'
});

export const api = axios.create({
  baseURL: '',
  withCredentials: true,
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
  }
})

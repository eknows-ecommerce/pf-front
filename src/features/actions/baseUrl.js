const baseUrl =
    process.env.NODE_ENV === "production"
        ? 'https://ebooks-back.herokuapp.com'
        : 'http://localhost:8000'

export default baseUrl
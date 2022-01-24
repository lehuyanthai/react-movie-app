const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '75f98c6928cfd08dc76b886a145073b0',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;
import axios from 'axios'

export default axios.create({
    baseURL : ' http://82ccb57f7d46.ngrok.io'
})
//link expira a cada 8hrs 
//rodar ngrok http 3000
// 3000 === porta em q esta rodando 

//3 terminais necessarios para rodar o app: 
//no track: npm start c o expo
//ngrok http 3000
//no track-server: npm run dev
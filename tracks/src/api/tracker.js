import axios from 'axios'

export default axios.create({
    baseURL : 'http://c5d4e1b86d3f.ngrok.io'
})
//link expira a cada 8hrs 
//rodar ngrok http 3000
// 3000 === porta em q esta rodando 
//caso de erro no dev conferir listas de IP adicionadas no mongodb e o link correspondente na pasta index.js(no track-server/scr)

//3 terminais necessarios para rodar o app: 
//no track: npm start c o expo
//ngrok http 3000
//no track-server: npm run dev
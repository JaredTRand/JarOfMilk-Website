const PORT = 8000
//const axios = require('axios')
//const cheerio = require('cheerio')
const express = require('express')
require('dotenv').config();

const app = express()

app.get('/api/getDream/:dream', async(req, res) => {
    const reqDream = req.params.dream
    //console.log(reqDream)
    try{
        let dreamInter = await get_dream(reqDream)
        res.header('Access-Control-Allow-Origin', '*');
        res.send({result: dreamInter})
    } catch(e){
        console.log(e)
        res.sendStatus(500)
    }
})



async function get_dream(inputText){
    const { Configuration, OpenAIApi } = require("openai");
    
    const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    inputText = "What do you think the interpretation of my dream is?   "+inputText

    const completion = await openai.createCompletion({
        model: "text-davinci-003",
        //model: "text-curie-001",
        prompt: inputText, 
        max_tokens: 256,
        n: 1,
        top_p: .5,
        });
    //console.log(completion.data.choices[0].text);
    return completion.data.choices[0].text
}


app.listen(PORT,  () => console.log('Server running on PORT '+PORT))
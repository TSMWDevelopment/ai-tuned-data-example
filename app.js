require('dotenv').config()

const express = require('express')
const bodyParser = require('express')
const app = express()
const OpenAI = require('openai')

// Our embeddings
const coreEmbed = require('./embeddings/core-embed')
const gptThreeFiveEmbed = require('./embeddings/gpt3.5-fine-tuned-data') // GPT3.5 embed data
const gptFourEmbed = require('./embeddings/gpt4-fine-tuned-data') // GPT4 embed data

app.use(bodyParser.json())

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

const generateFromEmbed = async (embedding, input) => {
    // running using chat GPT 3.5
    var result = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo-1106',
        response_format: {
            type: 'json_object', // We want the output to be JSON
        },
        max_tokens: 4096,
        messages: [
            ...embedding, // embed the embedding passed in
            {
                role: 'user',
                content: JSON.stringify(input), // add our input
            },
        ],
    });
    const response = result.choices[0].message.content; // get the first choice's content

    if (!response) throw new Error('ChatGPT returned an empty response.');
    return JSON.parse(response); // parse as JSON and return
}

app.post('/petpicker/GPT3.5', async (req, res) => {
    const petSuggestion = req.body
    const embed = [...coreEmbed, ...gptThreeFiveEmbed]
    const gptResponse = await generateFromEmbed(embed, petSuggestion)
    res.json(gptResponse).end();

})

app.post('/petpicker/GPT4', async (req, res) => {
    const petSuggestion = req.body
    const embed = [...coreEmbed, ...gptFourEmbed]
    const gptResponse = await generateFromEmbed(embed, petSuggestion)
    res.json(gptResponse).end();
})

app.listen(process.env.PORT, () => {
    console.log(`Application is running on port ${process.env.PORT}`)
    console.log(coreEmbed[0])
})
require('dotenv').config()
const { Configuration, OpenAIApi } = require("openai")

const model = 'gpt-3.5-turbo'
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

async function getCompletion(prompt) {
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{role: "user", content: prompt}],
  });
  console.log(completion.data.choices[0].message);
}

const prompt = 'Generate a list of three made-up portuguese book titles along with their \
authors and genres. Provide them in JSON format with the following keys? book_id, title, author, genre.'
getCompletion(prompt)
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message: "OpenAI API key not configured, please follow instructions in README.md",
      }
    });
    return;
  }

  const prayer = req.body.prayer || '';
  const name = req.body.name || '';
  if (prayer.trim().length === 0) {
    res.status(400).json({
      error: {
        message: "Please fill in the prayer input",
      }
    });
    return;
  }
  if (name.trim().length === 0) {
    res.status(400).json({
      error: {
        message: "Please enter your name",
      }
    });
    return;
  }

  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generatePrompt(name, prayer),
      temperature: 0.6,
      max_tokens: 164,
    });
    res.status(200).json({ result: completion.data.choices[0].text });
  } catch(error) {
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: 'An error occurred during your request.',
        }
      });
    }
  }
}

function generatePrompt(name, prayer) {
  return `In less than 120 words, please say an encouraging and helpful prayer for the name ${name} with this prompt using gender neutral language ending with "In Jesus' Name, Amen.":
 ${prayer}. Make sure to clear any previous text.`;
}

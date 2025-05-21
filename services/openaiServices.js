export const generateLearningPlan = async (apiKey, learningGoal, language = "English") => {
    if (!apiKey) {
        throw new Error("API key is required");
    }

    if (!learningGoal) {
        throw new Error("Learning goal is required");
    }

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo-1106",
            messages: [
                {
                    role: "user",
                    content: `Generate a structured 12-week learning plan in JSON format to achieve the goal: '${learningGoal}'.
                      Each week should be an    const learningPlan = parsedData.learningPlan || parsedData;
    return Array.isArray(learningPlan) ? learningPlan : [];
  };object with: week (number), topic (string), tasks (array of 2-4 tasks),
                      and resources (array of links or names). Return only a clean JSON array, and do so in ${language}.`
                }
            ],
            max_tokens: 1500,
            response_format: {type: "json_object"}
        })
    });

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`API Error (${response.status}): ${errorText}`);
    }

    const data = await response.json();

    // Parse the content string as JSON
    const content = data.choices[0].message.content;
    const parsedData = JSON.parse(content);
}
// Check if we have a learningPlan property or if the response is already an array
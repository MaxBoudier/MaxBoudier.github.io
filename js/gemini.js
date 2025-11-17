import { allContent } from './content.js';

// IMPORTANT: The API Key is left empty. It should be provided by the execution environment.
const apiKey = ""; 
const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;

/**
 * Fetches a response from the Gemini API.
 * @param {string} userQuery - The user's question.
 * @param {string} lang - The current language ('fr' or 'en').
 * @returns {Promise<string>} The AI's response text.
 */
export async function getAiResponse(userQuery, lang) {
    const { systemPrompt, llmContext, chatError } = allContent[lang];

    const prompt = `
--- CV CONTEXT (Single source of truth) ---
${llmContext}
--- END CONTEXT ---

Recruiter's question: "${userQuery}"

Your answer (based *only* on the CV context above):`;

    const payload = {
        contents: [{ parts: [{ text: prompt }] }],
        systemInstruction: {
            parts: [{ text: systemPrompt }]
        },
        generationConfig: {
            temperature: 0.5,
            topK: 40,
            topP: 0.95,
        }
    };

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            const errorBody = await response.text();
            console.error(`API Error: ${response.statusText}`, errorBody);
            throw new Error(`API error: ${response.statusText}`);
        }

        const result = await response.json();
        const candidate = result.candidates?.[0];

        if (candidate && candidate.content?.parts?.[0]?.text) {
            return candidate.content.parts[0].text;
        } else {
            console.error("Invalid API response structure:", result);
            throw new Error("Invalid API response structure");
        }
    } catch (error) {
        console.error("Failed to fetch from Gemini API:", error);
        return chatError; // Return a user-friendly error message from content
    }
}

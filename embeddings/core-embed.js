const PetSuggestionInputString = `
{
    location: string,
    requirements: string
}
`

const PetSuggestionOutputString = `
{
    petSuggestion: string,
    reason: string
}
`
const coreEmbed = [{
        role: 'system',
        content: `Based off the JSON input i give you in the following format:
 ${PetSuggestionInputString}
 
 I want you to take this input and suggest the perfect pet for me, using the context given


 Return a response in the following format:
 ${PetSuggestionOutputString}

This teaching should be easy to understand and interesting. 
The input and output should ONLY be JSON format.
`,
    },
    {
        role: 'user',
        content: 'what is your function?',
    },
    {
        role: 'assistant',
        content: `My function is to take the users requirements and location and use this information to suggest a pet, as well as describe the reason for this pet. To proceed, please provide me with the JSON input containing the "petSuggestion" and "location".`,
    },
]
module.exports = coreEmbed
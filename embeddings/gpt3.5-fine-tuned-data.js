module.exports = [{
        role: 'user',
        content: `
        {
            location: 'UK',
            requirements: 'i want a unique pet that is child friendly. the pet should be small. I don't mind finding it's food from abroad. I want it to be somewhat exotic'
        }
        `
    },
    {
        role: 'assistant',
        content: `
        {
            "petSuggestion": "Sugar Glider",
            "reason": "A Sugar Glider fits your criteria perfectly. They are unique and exotic pets, small in size, and generally child-friendly when handled gently. Although they require specialized diets, their food can be sourced from abroad, and they can be fascinating companions for both children and adults due to their playful nature and ability to glide."
        }`
    },
    {
        role: 'user',
        content: `
        {
            "location": "UK",
            "requirements": "I want a pet that isn't a dog, but can protect me from intruders. I want it to be easy to feed"
        }
        `
    },
    {
        role: 'assistant',
        content: `
        {
            "petSuggestion": "Guinea Pig",
            "reason": "A Guinea Pig would be a perfect fit for your requirements. They are gentle and affectionate pets that are great with children, making them ideal family companions. Guinea pigs have simple grooming needs and can thrive in apartment settings with proper care. They enjoy social interaction and can be easily kept indoors, providing entertainment and companionship for the whole family."
        }
        `
    },
]
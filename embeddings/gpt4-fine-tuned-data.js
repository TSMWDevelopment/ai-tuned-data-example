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
            "petSuggestion": "Pygmy Hedgehog",
            "reason": "A Pygmy Hedgehog would be a perfect fit for your requirements. They are unique and considered exotic pets in the UK, small in size, and can be child-friendly when handled properly. Their diet, primarily consisting of insects, can be sourced internationally if needed. Additionally, they have a quiet nature, making them suitable for indoor living."
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
            "petSuggestion": "Maine Coon Cat",
            "reason": "While no pet can fully replace the protective instincts of a dog, a Maine Coon Cat is a large, robust breed that is known for its loyalty and can be quite territorial. They are known to be one of the larger cat breeds, which might deter intruders simply by their size. They are also easy to feed, adapting well to a standard diet of high-quality cat food. Their presence, size, and alertness can provide a sense of security."
        }
        `
    },
]
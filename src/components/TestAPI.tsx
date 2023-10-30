
const api = "https://jsonplaceholder.typicode.com/users"

async function fetchNames() {
    const response = await fetch(api)
    
    if (!response.ok) {
        throw new Error("Failed to fetch names")
    }
    return response.json()
}

export default async function TestAPI() {
    const data = await fetchNames()

    return (
        <div className="text-white">
            {data.map((apiName: { phone: string }) => (
                <>
                    <p>{apiName.phone}</p>
                </>
            ))}
        </div>
    )
}
'use server'

export const VerifyEmail = async (token: any) => {
    try {
        const result = await fetch('http://localhost:8000/api/users/verify', {
            method: 'PATCH',
            headers: {
                'Cookie': `session=${token}`
            }
        })
        const data = await result.json()
        return data
    } catch (error) {
        console.log(error)
    }
} 
const envs = {
    apiUrl: process.env.NEXT_PUBLIC_API_URL,
}

const requiredEnvs = [
    "NEXT_PUBLIC_API_URL",
]

for(const env of requiredEnvs) {
    if(!envs[env as keyof typeof envs]) {
        throw new Error(`Missing required environment variable: ${env}`);
    }
}

export default envs;
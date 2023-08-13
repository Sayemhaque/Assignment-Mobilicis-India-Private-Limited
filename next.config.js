/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects: async () => {
        return[
            {
               source:"/",
               destination:"/registation",
               permanent:false
            }
        ]
    }
}

module.exports = nextConfig

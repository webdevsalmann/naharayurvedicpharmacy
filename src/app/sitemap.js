import { siteConfig } from "@/lib/data/metadatas"

const baseUrl = siteConfig.baseUrl

export default function sitemap() {
    return [
        {
            url: baseUrl,
        },
    ]
}

export const siteConfig = {
    name: "Nahar Ayurvedic Pharmacy",
    title: "Ayurvedic solution",
    description: "One stop for ayurvedic solution",
    url: "https://naharayurvedicpharmacy.vercel.app",
    baseUrl: "https://naharayurvedicpharmacy.vercel.app",
    ogImage: "https://naharayurvedicpharmacy.vercel.app/og.png",
    links: {
        twitter: "https://twitter.com/username",
        instagram: "https://instagram.com/username",
    },
    owner: "Nahar Ayurvedic Pharmacy"
}

// ===================================================
// // Main Pages
// ===================================================
export const siteMd = {
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`,
    },
    metadataBase: new URL(siteConfig.url),
    description: siteConfig.description,
    keywords: [
        "Keywords 1",
        "Keywords 2",
    ],
    authors: [
        {
            name: siteConfig.owner,
            url: siteConfig.url,
        },
    ],
    creator: "name",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: siteConfig.url,
        title: siteConfig.name,
        description: siteConfig.description,
        siteName: siteConfig.name,
        images: [
            {
                url: siteConfig.ogImage,
                width: 1200,
                height: 630,
                alt: siteConfig.name,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: siteConfig.name,
        description: siteConfig.description,
        images: [siteConfig.ogImage],
        creator: "@username",
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png",
    },
    manifest:"/manifest.json"
}
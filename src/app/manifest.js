export const dynamic = "force-static"

export default function manifest() {
  return {
    name: "watson-and-barnard",
    short_name: "starter",
    start_url: "/",
    display: "standalone",
    background_color: "#663399",
    theme_color: "#663399",
    icons: [
      {
        src: "/images/bitmap.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}

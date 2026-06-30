export const dynamic = "force-static"

export default function manifest() {
  return {
    name: "Watson & Barnard Land Surveyors & Engineers",
    short_name: "W&B Surveys",
    start_url: "/",
    display: "standalone",
    background_color: "#f6f7fa",
    theme_color: "#34594c",
    icons: [
      {
        src: "/images/bitmap.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}

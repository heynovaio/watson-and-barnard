// Central content for the About team sections and the per-service detail pages.
// Replace the placeholder strings here as real copy comes in — the components
// read everything from this file, so pages don't need to be touched again.

import topographic from "@/public/images/topographic-survey.jpg"
import construction from "@/public/images/construction-surveys.jpg"
import strata from "@/public/images/strata-surveys.jpg"
import drone from "@/public/images/uav-drone-surveys.jpg"
import laser from "@/public/images/laser-scanning.jpg"

// ---------------------------------------------------------------------------
// ABOUT — team members
// ---------------------------------------------------------------------------
// Each member: { name, position, credentials?, image?, href? }
// Omit `image` to fall back to the placeholder in the component.

export const team = {
  leadership: {
    heading: "Our Leadership Team",
    subtitle: "",
    members: [
      { name: "John Doe", position: "Position", credentials: "Credentials | University Degree" },
      { name: "John Doe", position: "Position", credentials: "Credentials | University Degree" },
      { name: "John Doe", position: "Position", credentials: "Credentials | University Degree" },
      { name: "John Doe", position: "Position", credentials: "Credentials | University Degree" },
    ],
  },
  technical: {
    heading: "Our Technical Team",
    subtitle: "",
    members: Array.from({ length: 6 }, () => ({
      name: "John Doe",
      position: "Position",
      credentials: "Credentials | University Degree",
    })),
  },
  field: {
    heading: "Our Field Team",
    subtitle: "",
    members: Array.from({ length: 5 }, () => ({
      name: "John Doe",
      position: "Position",
      credentials: "Credentials | University Degree",
    })),
  },
}

// ---------------------------------------------------------------------------
// SERVICES — per-page detail content
// ---------------------------------------------------------------------------
// Keyed by route slug. Each entry is spread directly into <ServiceDetail />.
//   title, intro, overview, overviewIcon?, detailImg?,
//   details: [{ title, body }],
//   applications: { intro, items: [string] },
//   projects: { intro, items: [{ name, body, image? }] }

export const services = {
  topographic: {
    title: "Topographic Survey",
    intro: "",
    overview: "",
    detailImg: topographic,
    details: [
      { title: "Detail 1", body: "" },
      { title: "Detail 2", body: "" },
      { title: "Detail 3", body: "" },
    ],
    applications: {
      intro: "",
      items: [
        "Example of use 1",
        "Example of use 2",
        "Example of use 3",
        "Example of use 4",
        "Example of use 5",
        "Example of use 6",
        "Example of use 7",
      ],
    },
    projects: {
      intro: "",
      items: [
        { name: "Project Name", body: "" },
        { name: "Project Name", body: "" },
        { name: "Project Name", body: "" },
      ],
    },
  },

  construction: {
    title: "Construction Survey",
    intro: "",
    overview: "",
    detailImg: construction,
    details: [
      { title: "Detail 1", body: "" },
      { title: "Detail 2", body: "" },
      { title: "Detail 3", body: "" },
    ],
    applications: { intro: "", items: [] },
    projects: { intro: "", items: [] },
  },

  drone: {
    title: "UAV Drone Surveys",
    intro: "",
    overview: "",
    detailImg: drone,
    details: [
      { title: "Detail 1", body: "" },
      { title: "Detail 2", body: "" },
      { title: "Detail 3", body: "" },
    ],
    applications: { intro: "", items: [] },
    projects: { intro: "", items: [] },
  },

  strata: {
    title: "Strata Surveys and Air Space Plans",
    intro: "",
    overview: "",
    detailImg: strata,
    details: [
      { title: "Detail 1", body: "" },
      { title: "Detail 2", body: "" },
      { title: "Detail 3", body: "" },
    ],
    applications: { intro: "", items: [] },
    projects: { intro: "", items: [] },
  },

  laser: {
    title: "High Definition Laser Scanning",
    intro: "",
    overview: "",
    detailImg: laser,
    details: [
      { title: "Detail 1", body: "" },
      { title: "Detail 2", body: "" },
      { title: "Detail 3", body: "" },
    ],
    applications: { intro: "", items: [] },
    projects: { intro: "", items: [] },
  },
}
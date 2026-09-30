import type { Project } from "../types";
import { WORKDAY_EVERYWHERE_URL } from "./links";
import fluidTruckWebDemo from "../Assets/Videos/Fluid-Truck-Web.mp4";
import fvipDemo from "../Assets/Videos/FVIP-Demo.mp4";
import fluidTruckAppDemo from "../Assets/Videos/Fluid-Truck-App.mp4";
import unionDemo from "../Assets/Videos/Union-Demo.mp4";
import crvaDemo from "../Assets/Videos/CRVA-Demo.mp4";
import pepsiDemo from "../Assets/Videos/Pepsi-Demo.mp4";
import lunchRandomizerDemo from "../Assets/Videos/ranGen.mp4";
import weatherDashboardDemo from "../Assets/Videos/Weather-Dashboard-Demo.mp4";

export const workdayProjects: readonly Project[] = [
  {
    name: "Actionable Approvals in Slack & Teams",
    link: WORKDAY_EVERYWHERE_URL,
    desc: "Led the epic that lets managers approve or deny Workday business processes, like time off and job requisitions, "
      + "right from their Slack and Microsoft Teams notifications. I ran the spike, built an end-to-end proof of concept "
      + "across our TypeScript platform and Workday's Java backend, authored the design doc, and delivered the shared "
      + "foundation and full implementation for both apps.",
    tech: "TypeScript, Node.js, AWS Lambda, DynamoDB, Slack Block Kit, Adaptive Cards, Java",
  },
  {
    name: "Workday for Microsoft 365 Copilot",
    link: WORKDAY_EVERYWHERE_URL,
    desc: "Core engineer on Workday's Microsoft 365 Copilot agent from early access through general availability, including its "
      + "move from a Declarative Agent to a Custom Engine Agent. Built Entra SSO authentication, the agent's DynamoDB tables "
      + "and AWS CDK infrastructure, connect and disconnect flows, human-in-the-loop approvals, and the routing that let "
      + "Copilot share one bot with Microsoft Teams.",
    tech: "TypeScript, Microsoft 365 Copilot, Bot Framework, Microsoft Entra ID, AWS CDK, DynamoDB",
  },
  {
    name: "Workday for Microsoft Teams & Notifications",
    link: WORKDAY_EVERYWHERE_URL,
    desc: "Owned the Company Holidays and Coworker Lookup epics end to end, from a React holiday calendar to a GraphQL data layer "
      + "backed by Workday queries. On notifications, fixed customer-reported duplicates across the stack, added per-user "
      + "rate limiting, and made sure each person gets messages in their own language.",
    tech: "React, RTK Query, GraphQL (Apollo), TypeScript, Java, AWS (Lambda, DynamoDB, S3, CloudFront)",
  },
];

export const fluidTruckProjects: readonly Project[] = [
  { name: "Rental Platform (Web App)", link: "https://www.fluidtruck.com", media: { type: "video", src: fluidTruckWebDemo } },
  { name: "FVIP Platform", link: "https://fvip.fluidtruck.com/", media: { type: "video", src: fvipDemo } },
  {
    name: "Rental Platform (Mobile App)",
    link: "https://apps.apple.com/us/app/fluid-truck/id1114189236",
    media: { type: "video", src: fluidTruckAppDemo },
  },
];

export const unionProjects: readonly Project[] = [
  { name: "Union.co", link: "https://www.union.co", media: { type: "video", src: unionDemo } },
  { name: "CRVA", link: "https://www.charlottesgotalot.com/", media: { type: "video", src: crvaDemo } },
  { name: "Pepsi Born in the Carolinas", link: "https://www.pepsiborninthecarolinas.com/", media: { type: "video", src: pepsiDemo } },
];

export const personalProjects: readonly Project[] = [
  {
    name: "Lunch Randomizer",
    link: "https://danielgerrald.github.io/Lunch-Randomizer/",
    media: { type: "video", src: lunchRandomizerDemo },
    repoLink: "https://github.com/DanielGerrald/Lunch-Randomizer",
    desc: "It's 1:00pm, you just finished a hard project at work, and you're starving. You and your buddy stare at each other "
      + "because it's hard to agree on a place, especially when you've already eaten at most of the spots near the office. "
      + "Say hello to your new best friend for picking where to eat lunch!",
    tech: "Materialize CSS, Zomato's API, Google Maps API, jQuery, HTML, CSS, JavaScript",
  },
  {
    name: "Weather Dashboard",
    link: "https://jordant111596.github.io/Weather-Dashboard",
    media: { type: "video", src: weatherDashboardDemo },
    repoLink: "https://github.com/JordanT111596/Weather-Dashboard",
    desc: "Search for a city to see its current conditions (temperature, humidity, wind speed, and a color-coded UV index) "
      + "and a 5-day forecast from the OpenWeather API. Searches are saved to a local history so you can jump back to any "
      + "city, and the dashboard reopens to your last search. Now go see what the weather is where you live!",
    tech: "Bootstrap CSS, OpenWeather API, Local Storage, HTML, CSS, JavaScript",
  },
];

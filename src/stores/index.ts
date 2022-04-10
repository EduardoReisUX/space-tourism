import { readable } from "svelte/store";
import { crew, destinations, technology } from "./../data/index.json";

export const destinationsData = readable(destinations);
export const crewsData = readable(crew);
export const technologiesData = readable(technology);

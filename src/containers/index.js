import { lazy } from "react";

import App from "./App";

const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));
const People = lazy(() => import("./People"));
const Person = lazy(() => import("./Person"));
const Contact = lazy(() => import("./Contact"));
const Unknown = lazy(() => import("./Unknown"));

export { App, Home, About, People, Person, Contact, Unknown };

import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { Events } from "./pages/Events";
import { EventDetail } from "./pages/EventDetail";
import { Contact } from "./pages/Contact";
import { Minigame } from "./pages/Minigame";
import { Layout } from "./components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "minigame", Component: Minigame },
      { path: "events", Component: Events },
      { path: "event/:eventId", Component: EventDetail },
      { path: "contact", Component: Contact },
    ],
  },
]);
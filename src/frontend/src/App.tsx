import { Skeleton } from "@/components/ui/skeleton";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { Suspense, lazy, useEffect } from "react";
import { Layout } from "./components/Layout";

// Lazy-load all pages
const HomePage = lazy(() =>
  import("./pages/Home").then((m) => ({ default: m.HomePage })),
);
const AboutPage = lazy(() =>
  import("./pages/About").then((m) => ({ default: m.AboutPage })),
);
const PropertiesPage = lazy(() =>
  import("./pages/Properties").then((m) => ({ default: m.PropertiesPage })),
);
const FyraHotelPage = lazy(() =>
  import("./pages/FyraHotel").then((m) => ({ default: m.FyraHotelPage })),
);
const AashiyanaPage = lazy(() =>
  import("./pages/Aashiyana").then((m) => ({ default: m.AashiyanaPage })),
);
const AashapuriPage = lazy(() =>
  import("./pages/Aashapuri").then((m) => ({ default: m.AashapuriPage })),
);
const GalleryPage = lazy(() =>
  import("./pages/Gallery").then((m) => ({ default: m.GalleryPage })),
);
const ActivitiesPage = lazy(() =>
  import("./pages/Activities").then((m) => ({ default: m.ActivitiesPage })),
);
const ContactPage = lazy(() =>
  import("./pages/Contact").then((m) => ({ default: m.ContactPage })),
);

function PageLoader() {
  return (
    <div className="min-h-[60vh] flex flex-col gap-4 items-center justify-center p-12">
      <Skeleton className="h-8 w-48" />
      <Skeleton className="h-4 w-72" />
      <Skeleton className="h-4 w-56" />
    </div>
  );
}

/** Scrolls to top on every route change */
function ScrollToTop() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  });
  return null;
}

// Root route with Layout wrapper
const rootRoute = createRootRoute({
  component: () => (
    <Layout>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Outlet />
      </Suspense>
    </Layout>
  ),
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});
const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
});
const propertiesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/properties",
  component: PropertiesPage,
});
const fyraHotelRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/properties/fyra-hotel",
  component: FyraHotelPage,
});
const aashiyanaRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/properties/aashiyana",
  component: AashiyanaPage,
});
const aashapuriRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/properties/aashapuri-snow-line",
  component: AashapuriPage,
});
const galleryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/gallery",
  component: GalleryPage,
});
const activitiesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/activities",
  component: ActivitiesPage,
});
const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactPage,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  aboutRoute,
  propertiesRoute,
  fyraHotelRoute,
  aashiyanaRoute,
  aashapuriRoute,
  galleryRoute,
  activitiesRoute,
  contactRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}

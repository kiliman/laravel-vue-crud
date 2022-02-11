import ExampleComponent from "./components/ExampleComponent.vue";
import productsRoutes from "./routes/products";

export const routes = [
    {
        name: "home",
        path: "/",
        component: ExampleComponent,
    },
    ...productsRoutes("products"),
];

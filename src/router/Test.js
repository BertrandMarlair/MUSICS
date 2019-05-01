import Dashboard from "../container/Dashboard/Dashboard";
import ProfileTest from "../container/ProfileTest/ProfileTest";

export const routes = [
    {path: "/", component: Dashboard, name: "Dashboard", exact: true},
    {
        path: "/bonjour",
        component: ProfileTest,
        name: "Profile",
        exact: true,
    },
];

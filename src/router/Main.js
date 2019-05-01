import Dashboard from "../container/Dashboard/Dashboard";
import Profile from "../container/Profile/Profile";

export const routes = [
    {path: "/", component: Dashboard, name: "Dashboard", exact: true},
    {path: "/profile", component: Profile, name: "Profile", exact: true},
];

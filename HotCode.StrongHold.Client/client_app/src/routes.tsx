import Dashboard from "@material-ui/icons/Dashboard";
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import DashboardPage from "./views/Dashboard/DashboardPage";
import RolePage from "./views/Role/RolePage";

interface RouteProperty {
    path: string;
    name: string;
    icon: any;
    component: any;
    layout: string;
}

export type StrongHoldRoutes = Array<RouteProperty>;

const routes: StrongHoldRoutes = [
    {
        path: "/dashboard",
        name: "Dashboard",
        icon: Dashboard,
        component: DashboardPage,
        layout: "/admin"
    },
    {
        path: "/role",
        name: "Role",
        icon: AccountTreeIcon,
        component: RolePage,
        layout: "/admin"
    },
];

export default routes;

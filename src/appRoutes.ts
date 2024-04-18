import {Routes} from "react-resource-router";
import TodoPage from "./pages/TodoPage/TodoPage";
import DemoPage from "./pages/DemoPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import SkillPage from "./pages/SkillPage";
import CounterPage from "./pages/CounterPage";

export const appRoutes: Routes = [
    {
        name: 'home',
        path: '/',
        exact: true,
        component: HomePage
    },
    {
        name: 'todo',
        path: '/todo',
        exact: true,
        component: TodoPage
    },
    {
        name: 'products',
        path: '/products',
        exact: true,
        component: ProductPage
    },
    {
        name: 'demo',
        path: '/demo',
        exact: true,
        component: DemoPage
    },
    {
        name: 'login',
        path: '/login',
        exact: true,
        component: LoginPage
    },
    {
        name: 'register',
        path: '/register',
        component: RegisterPage,
        exact: true
    },
    {
        name: 'Skills',
        path: '/skills',
        component: SkillPage,
        exact: true
    },
    {
        name: 'Counter',
        path: '/counter',
        component: CounterPage,
    }
]

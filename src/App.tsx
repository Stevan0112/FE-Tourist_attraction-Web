import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import AuthLayout from "./layouts/AuthLayout";

import HomePage from "./page/HomePage";
import RankingPage from "./page/RankingPage";
import DetailWisataPage from "./page/DetailWisataPage";
import DashboardIndex from "./page/dashboard/DashboardIndex";
import WisataIndex from "./page/dashboard/wisata/WisataIndex";
import WisataCreate from "./page/dashboard/wisata/WisataCreate";
import WisataEdit from "./page/dashboard/wisata/WisataEdit";
import LoginPage from "./page/LoginPage";
import ProtectedRoutes from "./routes/ProtectedRoutes";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },

            {
                path: "ranking",
                element: <RankingPage />,
            },

            {
                path: "wisata/:id",
                element: <DetailWisataPage />,
            }
        ],
    },

    {
        path: "/login",
        element: <AuthLayout />,
        children: [
            {
                index: true,
                element: <LoginPage />,
            },
        ],
    },

    {
        path: "/dashboard",
        element: <ProtectedRoutes />,
        children: [
            {
                element: <DashboardLayout />,
                children: [
                    {
                        index: true,
                        element: <DashboardIndex />,
                    },

                    {
                        path: "wisata",
                        element: <WisataIndex />,
                    },

                    {
                        path: "wisata/create",
                        element: <WisataCreate />,
                    },

                    {
                        path: "wisata/edit/:id",
                        element: <WisataEdit />,
                    },
                ],
            },
        ],
    },
]);

export default function App() {
    return <RouterProvider router={router} />;
}
import { createBrowserRouter, redirect } from "react-router-dom";
import HomePage from "../page/HomePage";
import DetailSurah from "../page/DetailSurah";
import TafsirPage from "../page/TafsirPage";
import DetailTafsir from "../page/DetailTafsir";
import DoaPage from "../page/DoaPage";
import DetailDoa from "../page/DetailDoa";
import JadwalSholat from "../page/JadwalSholat";
const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>
    },
    {
        path: "/tafsir",
        element: <TafsirPage/>
    },
    {
        path: "/doa",
        element: <DoaPage/>
    },
    {
        path: "/jadwal",
        element: <JadwalSholat/>
    },
    {
        path: "/surah/:id",
        element: <DetailSurah/>
    },
    {
        path: "/tafsir/:id",
        element: <DetailTafsir/>
    },
    {
        path: "/doa/:id",
        element: <DetailDoa/>
    }
])

export default router
import React, { lazy, Suspense } from "react";
import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "./component/Auth/SignIn/SignIn";
import SingUp from "./component/Auth/SingUp/SingUp";
import Users from "./component/features/Doctor/Users/Users";
import PageNotFound from "./component/Auth/PageNotFound";
import Timings from "./component/features/Doctor/Timings/Timings";
import PatientHome from "./component/features/Patient/Home/Home";
import Appointment from "./component/features/Patient/Appointment/Appointment";
import BookedAppointment from "./component/features/Patient/BookedAppointment/BookedAppointment";
import Setting from "./component/features/Patient/Setting/Setting";
import DoctorHome from "./component/features/Doctor/Home/Home";
import DoctorBookedAppointment from "./component/features/Doctor/DoctorBookedAppointment/DoctorBookedAppointment";
import { ADMIN_PATH, PATIENT_APPOINTMENT_PATH, PATIENT_BOOKAPPOINTMENT_PATH, PATIENT_HOME_PATH, PATIENT_PATH, SIGN_UP_PATH } from "./Constants/App.constant";
import Loading from "./component/module/Loading/Loading";


const Patient = lazy(() => import('./component/features/Patient/Patient'));
const Doctor = lazy(() => import('./component/features/Doctor/Doctor'));
const Admin = lazy(() => import('./component/features/Admin/Admin'))

export const userContext = React.createContext<any>({ test: "test" });
// https://reactrouter.com/en/main/hooks/use-params
const dyamicRoutes = [
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path: SIGN_UP_PATH,
    element: <SingUp />,
  },
  {
    path: PATIENT_PATH,
    element: <Patient />,
    children: [
      {
        path: PATIENT_HOME_PATH,
        element: <PatientHome />,
      },
      {
        path: PATIENT_APPOINTMENT_PATH,
        element: <Appointment />,
      },
      {
        path: PATIENT_BOOKAPPOINTMENT_PATH,
        element: <BookedAppointment />,
      },
      {
        path: "setting",
        element: <Setting />,
      },
    ]
  },
  {
    path: ADMIN_PATH,
    element: <Admin />,
  },
  {
    path: "/doctor",
    element: <Doctor />,
    children: [
      {path: 'home',
      element: <DoctorHome />,
    },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "timing",
        element: <Timings />,
      },
      {
        path: "bappointment",
        element: <DoctorBookedAppointment />,
      }
    ],
  },
  {
    path:"*",
    element: <PageNotFound />
  }
];

const router = createBrowserRouter(dyamicRoutes);

function App() {



  return (
      <Suspense fallback={<Loading />} >
      <RouterProvider router={router} />

      </Suspense>

  );
}
export default App;

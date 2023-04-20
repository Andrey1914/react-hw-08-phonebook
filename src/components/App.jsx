import React, { useEffect, lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";
import Loader from "./Loader/Loader";
import { Global } from "@emotion/react";
import { GlobalStyles } from "./GlobalStyles";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import PrivateRoute from "../routes/Private";
import PublicRoute from "../routes/Public";
import { refreshCurrentUser } from "../redux/auth/authOperations";
import {
  isModalShownSelector,
  openedContactSelector,
} from "../redux/modal/modalSelectors";
import { getIsRefreshingUser } from "../redux/auth/authSelectors";

const PhonebookPage = lazy(() =>
  import("../pages/PhonebookPage" /* webpackChunkName: "contacts" */)
);
const RegistrationPage = lazy(() =>
  import("../pages/RegistrationPage" /* webpackChunkName: "registration" */)
);
const LoginPage = lazy(() =>
  import("../pages/LoginPage" /* webpackChunkName: "authorization" */)
);
const ModalFormEditContact = lazy(() =>
  import(
    "./ModalFormEditContact/ModalFormEditContact" /* webpackChunkName: "modal-wdw" */
  )
);

export default function App() {
  const isModalShown = useSelector(isModalShownSelector);
  const openedContact = useSelector(openedContactSelector);
  const dispatch = useDispatch();
  const isRefreshingUser = useSelector(getIsRefreshingUser);

  useEffect(() => {
    dispatch(refreshCurrentUser());
  }, [dispatch]);

  return isRefreshingUser ? (
    <Loader />
  ) : (
    <>
      <Global styles={GlobalStyles} />
      <Header />
      <Suspense fallback={<Loader />}>
        <main>
          <Routes>
            <Route
              path="contacts"
              element={
                <PrivateRoute>
                  <PhonebookPage />
                </PrivateRoute>
              }
            />
            <Route
              path="registration"
              element={
                <PublicRoute restricted>
                  <RegistrationPage />
                </PublicRoute>
              }
            />
            <Route
              path="login"
              element={
                <PublicRoute restricted>
                  <LoginPage />
                </PublicRoute>
              }
            />
            <Route
              path="*"
              element={
                <PublicRoute restricted>
                  <Navigate to="/login" replace />
                  <LoginPage />
                </PublicRoute>
              }
            />
          </Routes>
        </main>
        <Footer />
        {isModalShown && <ModalFormEditContact openedContact={openedContact} />}
      </Suspense>
    </>
  );
}

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./page/HomePage";
import ShopPage from "./page/ShopPage";
import DetailPage from "./page/DetailPage";
import CartPage from "./page/CartPage";
import CheckoutPage from "./page/CheckoutPage";
import SignInPage from "./page/SignInPage";
import SignUpPage from "./page/SignUpPage";
import RootLayout from "./page/RootLayout";

// create a custom route
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "shop", element: <ShopPage /> },
      { path: "detail/:productId", element: <DetailPage /> },
      { path: "cart", element: <CartPage /> },
      { path: "checkout", element: <CheckoutPage /> },
    ],
  },
  { path: "signin", element: <SignInPage /> },
  { path: "signup", element: <SignUpPage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

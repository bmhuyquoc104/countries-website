import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import App from "./App";

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={client}>
    <React.StrictMode>
      <App />
      <ReactQueryDevtools position="right" initialIsOpen={false} />
    </React.StrictMode>
  </QueryClientProvider>,
);

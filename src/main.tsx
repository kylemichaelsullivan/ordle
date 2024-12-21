import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { OrdleContextProvider } from "@/context";
import App from "@/components/App";
import "@/index.css";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<OrdleContextProvider>
			<App />
		</OrdleContextProvider>
	</StrictMode>,
);

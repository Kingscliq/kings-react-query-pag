import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import People from "./components/people";
import Planets from "./components/planets";
import Navbar from "./design/widgets/nav-bar";
import GlobalStyles from "./design/GlobalStyles";
import theme from "./design/theme";
import { ThemeProvider } from "styled-components";
import { ReactQueryDevtools } from "react-query/devtools";
import { ReactQueryConfigProvider } from "react-query";
function App() {
	const [page, setPage] = React.useState("planets");

	const queryClient = new QueryClient();
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<ThemeProvider theme={theme}>
					<GlobalStyles />
					<Navbar setPage={setPage} />
					{page === "planets" ? <Planets /> : <People />}
				</ThemeProvider>

				<ReactQueryDevtools initialIsOpen={false} />
			</QueryClientProvider>
		</>
	);
}

export default App;

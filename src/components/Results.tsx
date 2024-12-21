import { Suspense, lazy } from "react";
import Loading from "@/components/Loading";

const ResultsContent = lazy(() => import("./ResultsContent"));

function Results() {
	return (
		<Suspense fallback={<Loading />}>
			<ResultsContent />
		</Suspense>
	);
}

export default Results;

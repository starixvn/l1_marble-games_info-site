import Page from "./app/page";
// Initialize Sentry on the client via side-effect import
import "../sentry.client.config";

export default function App() {
    return (
        <>
            <Page />
        </>
    );
}

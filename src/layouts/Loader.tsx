import { sMain } from "../app.store";

/// Thiết lập transparent
export default function Loader() {
    const loaderStatus = sMain.use(n => n.loaderStatus);

    if (loaderStatus === "CLOSE") {
        return <></>
    }

    return (
        <div className={`fixed z-5 top-0 left-0 w-full h-full flex ${loaderStatus === "INIT" ? "bg-white" : "bg-white-alpha-60"}`}>
            <h1 className='m-auto text-6xl'>Loading...</h1>
        </div>
    )
}

import ErrorBoundaryOne from "./ErrorBoundaryOne";
import ErrorBoundaryTwo from "./ErrorBoundaryTwo";
import Location from "./Location";
import LocationErrorBoundary from "./LocationErrorBoundary";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";



function Main() {
    return (
        <section id="section-one">
            <div className="grid">
                <ErrorBoundaryOne>
                    <SectionOne />
                </ErrorBoundaryOne>

                <ErrorBoundaryTwo>
                    <SectionTwo />
                </ErrorBoundaryTwo>

                <LocationErrorBoundary>
                    <Location />
                </LocationErrorBoundary>
            </div>
        </section>
    );
}

export default Main;
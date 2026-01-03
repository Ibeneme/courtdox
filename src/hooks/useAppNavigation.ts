import { useNavigate } from "react-router-dom";

/**
 * A reusable hook for consistent app navigation
 */
export const useAppNavigation = () => {
    const navigate = useNavigate();

    const goToBooking = () => {
        // Replace "/appointments" with your actual route path
        navigate("/booking");
        // This ensures the page scrolls to the top on navigation
        window.scrollTo(0, 0);
    };

    const goToHome = () => {
        navigate("/");
        window.scrollTo(0, 0);
    };

    return { goToBooking, goToHome };
};
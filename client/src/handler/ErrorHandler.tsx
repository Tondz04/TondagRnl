import { useNavigate } from "react-router-dom";

const ErrorHandler = (
  error: any,
  navigate: ReturnType<typeof useNavigate> | null
) => {
  if (navigate) {
    if (error.response.status === 4001 || error === 401) {
      navigate("/");
    }
  } else {
    console.error("Unexpected error:", error);
  }
};

export default ErrorHandler;

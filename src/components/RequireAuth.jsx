import { useEffect, useState } from "react";
import { supabase } from "../supabase/client";
import { useNavigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const navigate = useNavigate();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        navigate("/admin"); // belum login
      } else {
        setChecking(false);
      }
    };

    checkUser();
  }, [navigate]);

  if (checking)
    return <div className="text-center py-10">Checking auth...</div>;

  return children;
};

export default RequireAuth;

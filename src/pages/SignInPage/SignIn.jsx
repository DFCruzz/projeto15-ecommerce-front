import { PageContainer, StyledForm, StyledLink } from "./styled";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext"
import { ThreeDots } from "react-loader-spinner";
import apiAuth from "../../services/apiAuth"

export default function SignIn() {
  const [form, setForm] = useState({ email: "", password: "" });
  const { setToken } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleLogin(e) {
    e.preventDefault();
    setIsLoading(true);

    try {
      const data = await apiAuth.singIn(form);

      setToken(data.token);

      setIsLoading(false);

      navigate("/home");
    } catch (error) {
      setIsLoading(false);
      alert(error.response.data);
    }
  }

  return (
    <PageContainer>
      <StyledForm onSubmit={handleLogin}>
        <div className="email">E-mail</div>
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleForm}
          disabled={isLoading}
          required
        />
        <div className="email">Password</div>
        <input
          name="password"
          type="password"
          value={form.password}
          onChange={handleForm}
          disabled={isLoading}
          required
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? <ThreeDots width={50} color="#FFFFFF" /> : "Log in"}
        </button>
      </StyledForm>
      <StyledLink to={"/sign-up"}>
        <p>
          Don't have an account? <span>Sign up</span>
        </p>
      </StyledLink>
    </PageContainer>
  );
}

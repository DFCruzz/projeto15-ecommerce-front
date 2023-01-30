import { PageContainer, StyledForm, StyledLink } from "./styled";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import apiAuth from "../../services/apiAuth";
import { UserContext } from "../../contexts/UserContext";
import bigLogo from "../../assets/bigLogo.png"


export default function SignIn() {
  const [form, setForm] = useState({ email: "", password: "" });

  const { setUser } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSignIn(e) {
    e.preventDefault();
    setIsLoading(true);

    try {
      const {data:{token, id, name}} = await apiAuth.singIn(form);

      setUser({ id, name, token });

      setIsLoading(false);

      navigate("/home");
    } catch (error) {
      setIsLoading(false);

      alert(error.response);
    }
  }

  return (
    <PageContainer>
      <img src={bigLogo} alt="bigbang" />
      <StyledForm onSubmit={handleSignIn}>
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
          {isLoading ? <ThreeDots width={50} color="#FFFFFF" /> : "Entrar"}
        </button>
      </StyledForm>
      <StyledLink to={"/sign-up"}>
        <p>
          Não tem uma conta? <span>Cadastre-se!</span>
        </p>
      </StyledLink>
    </PageContainer>
  );
}

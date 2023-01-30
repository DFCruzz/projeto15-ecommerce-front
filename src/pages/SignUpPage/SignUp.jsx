import { PageContainer, StyledForm, StyledLink } from "./styled";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import apiAuth from "../../services/apiAuth";


export default function SignUp() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSignUp(e) {
    e.preventDefault();
    setIsLoading(true);
    

    try {
      await apiAuth.signUp(form);
      
      alert("Cadastro realizado com sucesso");

      setIsLoading(false);

      navigate("/");
    } catch (error) {
      setIsLoading(false);
      console.log(error)
      alert(error.response);
    }
  }

  return (
    <PageContainer>
      <StyledForm onSubmit={handleSignUp}>
        <div className="name">Full name</div>
        <input
          name="name"
          type="text"
          value={form.name}
          onChange={handleForm}
          disabled={isLoading}
          required
        />
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
          {isLoading ? <ThreeDots width={50} color="#FFFFFF" /> : "Sign up"}
        </button>
      </StyledForm>
      <StyledLink to={"/sign-in"}>
        <p>
          Already have an account? <span>Log In</span>
        </p>
      </StyledLink>
    </PageContainer>
  );
}

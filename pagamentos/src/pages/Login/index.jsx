import FormLogin from "../../components/FormLogin";
import styles from './Login.module.css'

function Login() {

  return (
    <div className={styles.container}>
      <FormLogin />
    </div>
  );
}

export default Login;
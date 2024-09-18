import { SubmitHandler, useForm } from "react-hook-form";

import "./App.css";

type FormFields = {
  username: string;
  password: string;
};

function App() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    defaultValues: {
      username: "testusername",
    },
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      throw new Error("Custom errro from the backend");
      console.log(data);
    } catch (error) {
      const backendError = error as { message: string };
      setError("username", {
        message: backendError.message,
      });
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("username", {
          required: "Username is required",
          validate: (data) => {
            if (!data.includes("@")) {
              return "The email must have @ character";
            }
            return true;
          },
        })}
        type="text"
        name="username"
        placeholder="Username"
      />
      {errors.username && <p>{errors.username.message}</p>}
      <input
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: 4,
            message: "The password should have atleast 4 characters",
          },
        })}
        type="password"
        name="password"
        placeholder="Password"
      />
      {errors.password && <p>{errors.password.message}</p>}
      <button disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}

export default App;

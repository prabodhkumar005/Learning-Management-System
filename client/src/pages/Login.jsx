import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  useLoginUserMutation,
  useRegisterUserMutation,
} from "@/features/api/authApi";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
  const [signupInput, setSignupInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loginInput, setLoginInput] = useState({ email: "", password: "" });

  const [errors, setErrors] = useState({}); // State to store validation errors

  const [
    registerUser,
    { data: registerData, error: registerError, isLoading: registerIsLoading, isSuccess: registerIsSuccess },
  ] = useRegisterUserMutation();

  const [
    loginUser,
    { data: loginData, error: loginError, isLoading: loginIsLoading, isSuccess: loginIsSuccess },
  ] = useLoginUserMutation();

   const navigate = useNavigate();

  const validateInputs = (type) => {
    let newErrors = {};

    if (type === "signup") {
      // Name validation (only alphabets, no digits or special characters)
      if (!/^[A-Za-z\s]+$/.test(signupInput.name)) {
        newErrors.name = "Name should only contain alphabets.";
      }

      // Email validation
      if (!/^\S+@\S+\.\S+$/.test(signupInput.email)) {
        newErrors.email = "Invalid email format.";
      }

      // Password validation (at least one uppercase, one lowercase, one special character, and 6+ chars)
      if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!]).{6,}$/.test(signupInput.password)) {
        newErrors.password =
          "Password must contain at least one uppercase letter, one lowercase letter, one special character (@#$%^&+=!), and be at least 6 characters long.";
      }
    } else {
      // Email validation for login
      if (!/^\S+@\S+\.\S+$/.test(loginInput.email)) {
        newErrors.email = "Invalid email format.";
      }

      // Password validation
      if (!loginInput.password) {
        newErrors.password = "Password is required.";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const changeInputHandler = (e, type) => {
    const { name, value } = e.target;
    if (type === "signup") {
      setSignupInput({ ...signupInput, [name]: value });
    } else {
      setLoginInput({ ...loginInput, [name]: value });
    }
  };

  const handleRegistration = async (type) => {
    if (!validateInputs(type)) return;

    const inputData = type === "signup" ? signupInput : loginInput;
    const action = type === "signup" ? registerUser : loginUser;
    await action(inputData);
  };

  useEffect(() => {
    if (registerIsSuccess && registerData) {
      toast.success(registerData.message || "Signup successful.");
    }
    if (registerError) {
      toast.error(registerError.data?.message || "Signup Failed");
    }
    if (loginIsSuccess && loginData) {
      toast.success(loginData.message || "Login successful.");
      navigate("/");
    }
    if (loginError) {
      toast.error(loginError.data?.message || "Login Failed");
    }
  }, [loginIsLoading, registerIsLoading, loginData, registerData, loginError, registerError]);

  return (
    <div className="flex items-center w-full justify-center mt-20">
      <Tabs defaultValue="login" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="signup">Signup</TabsTrigger>
          <TabsTrigger value="login">Login</TabsTrigger>
        </TabsList>
        <TabsContent value="signup">
          <Card>
            <CardHeader>
              <CardTitle>Signup</CardTitle>
              <CardDescription>Create a new account.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input
                  type="text"
                  name="name"
                  value={signupInput.name}
                  onChange={(e) => changeInputHandler(e, "signup")}
                  placeholder="Enter your Name"
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  value={signupInput.email}
                  onChange={(e) => changeInputHandler(e, "signup")}
                  placeholder="Enter your E-mail"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  value={signupInput.password}
                  onChange={(e) => changeInputHandler(e, "signup")}
                  placeholder="Enter your password"
                />
                {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
              </div>
            </CardContent>
            <CardFooter>
              <Button disabled={registerIsLoading} onClick={() => handleRegistration("signup")}>
                {registerIsLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
                  </>
                ) : (
                  "Signup"
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="login">
          <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>Login using your email and password.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  value={loginInput.email}
                  onChange={(e) => changeInputHandler(e, "login")}
                  placeholder="Enter Your Email"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  value={loginInput.password}
                  onChange={(e) => changeInputHandler(e, "login")}
                  placeholder="Enter your password"
                />
                {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
              </div>
            </CardContent>
            <CardFooter>
              <Button disabled={loginIsLoading} onClick={() => handleRegistration("login")}>
                {loginIsLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
                  </>
                ) : (
                  "Login"
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Login;

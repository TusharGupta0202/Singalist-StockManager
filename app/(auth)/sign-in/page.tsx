'use client';

import FooterLink from "@/components/forms/FooterLink";
import InputField from "@/components/forms/InputField";
import { Button } from "@/components/ui/button";
import { signInWithEmail } from "@/lib/actions/auth.actions";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const SignIn = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onBlur',
  });

  const onSubmit = async (data: SignInFormData) => {
    try {
      const result = await signInWithEmail(data);

      if(result.success){
        toast.success('Logged in successfully', {
          description: 'Welcome👋'
        });
        router.push('/');
      } else {
          toast.error('Sign In Failed',{
          description: result.error ?? 'Failed to sign in. Please try again later.'
        })
      }
    } catch (e) {
      console.error('Error signing in:', e);
    }
  };

  return (
    <>
      <h1 className='form-title'>Log In Your Account</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

        <InputField
          name="email"
          label="Email"
          placeholder="Enter your email"
          type="email"
          register={register}
          error={errors.email}
          validation={{
            required: 'Email is required',
            pattern: {
              value: /^\w+@\w+\.\w+$/,
              message: 'Invalid email address'
            }
          }}
        />

        <InputField
          name="password"
          label="Password"
          placeholder="Enter your password"
          type="password"
          register={register}
          error={errors.password}
          validation={{
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password must be at least 8 characters'
            }
          }}
        />

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full mt-5 yellow-btn"
        >
          {isSubmitting ? 'Logging In...' : 'Log In'}
        </Button>

        <FooterLink
          text="Don't have an account?"
          linkText="Sign Up"
          href="/sign-up"
        />
      </form>
    </>
  );
};

export default SignIn;

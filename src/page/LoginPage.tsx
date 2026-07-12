import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

import { loginSchema } from "../schemas/authSchema";
import type { LoginFormData } from "../schemas/authSchema";
import useUserAuthStore from "../store/userAuthStore";

import Input from "../components/atoms/Input";
import Button from "../components/atoms/Button";

import { useState } from "react";

import {
    Mountain,
    Eye,
    EyeOff,
} from "lucide-react";

export default function LoginPage() {

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
    });

    const login = useUserAuthStore(
        (state) => state.login
    );

    const [showPassword, setShowPassword] = useState(false);

    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (data: LoginFormData) => {
        setIsLoading(true);

        await new Promise((resolve) => setTimeout(resolve, 700));

        login({
            username: data.username,
        });

        navigate("/dashboard");
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="grid w-full max-w-6xl gap-10 lg:grid-cols-2">
                {/* LEFT */}
                <div className="hidden lg:flex flex-col justify-center">
                    <div className="inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-violet-600 text-white">
                        <Mountain size={42} />
                    </div>

                    <h1 className="mt-8 text-5xl font-bold leading-tight">
                        WisataKu
                        <br />
                        Admin Panel
                    </h1>

                    <p className="mt-5 text-lg text-slate-600">
                        Kelola destinasi wisata Kabupaten Tegal
                        dengan mudah melalui dashboard modern.
                    </p>
                </div>

                {/* CARD */}
                <div className="rounded-3xl bg-white p-10 shadow-xl">
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold">
                            Login
                        </h2>

                        <p className="mt-2 text-slate-500">
                            Masuk untuk mengelola data wisata.
                        </p>
                    </div>

                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="space-y-5"
                    >
                        <div>
                            <label className="mb-2 block text-sm font-medium">
                                Username
                            </label>

                            <Input
                                placeholder="Masukkan username"
                                {...register("username")}
                            />

                            <p className="mt-1 text-sm text-red-500">
                                {errors.username?.message}
                            </p>
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium">
                                Password
                            </label>

                            <div className="relative">
                                <Input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Masukkan password"
                                    {...register("password")}
                                />

                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowPassword(!showPassword)
                                    }
                                    className="
                                        absolute
                                        right-3
                                        top-1/2
                                        -translate-y-1/2
                                        text-slate-500
                                    "
                                >
                                    {
                                        showPassword
                                            ? <EyeOff size={18}/>
                                            : <Eye size={18}/>
                                    }
                                </button>
                            </div>

                            <p className="mt-1 text-sm text-red-500">
                                {errors.password?.message}
                            </p>
                        </div>

                        <Button
                            type="submit"
                            disabled={isLoading}
                            className="w-full"
                        >
                            {isLoading ? "Loading..." : "Masuk Dashboard"}
                        </Button>
                    </form>
                </div>
            </div>
        </div>
        );
}
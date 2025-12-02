import { useState } from "react"
import input from "../components/input"
import { api } from "../api/api"
import { useNavigate } from "react-router-dom"
import { useUserStore } from "../store/useUserStore"

const SignUp = () => {
    const [error, setError] = useState("")

    const navigate = useNavigate()
    const { setSession } = useUserStore()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")

        if (e.target.password.value !== e.target.password2.value) {
            setError("Пароли не совпадают")
            return
        }

        const user = {
            username: e.target.username.value,
            email: e.target.email.value,
            password: e.target.password.value
        }

        try {
            const data = await api.registerUser(user)
            setSession(data.data)
            navigate("/")
        } catch (error) {
            setError(error.response.data.error)
            console.error(error)
        }
    }

    return (
            <div class="auth-container">
                    <div class="auth-header">
                        <div class="auth-icon">👤</div>
                        <h1 class="auth-title">Регистрация</h1>
                        <p class="auth-subtitle">Создайте новый аккаунт</p>
                    </div>

                    <div class="alert alert-error" id="error-alert">
                        Такое имя пользователя уже занято
                    </div>

                    <form id="register-form">
                        <div class="form-group">
                            <label class="form-label">Имя пользователя</label>
                            <input 
                                type="text" 
                                class="form-input" 
                                name="username"
                                placeholder="Введите имя пользователя"
                                minlength="3"
                                required
                                autocomplete="username"
                            />
                            <div class="form-hint">Минимум 3 символа</div>
                            <div class="form-error">Имя пользователя должно быть не менее 3 символов</div>
                        </div>

                        <div class="form-group">
                            <label class="form-label">Email <span class="optional">(необязательно)</span></label>
                            <input 
                                type="email" 
                                class="form-input" 
                                name="email"
                                placeholder="example@email.com"
                                autocomplete="email"
                            />
                            <div class="form-error">Введите корректный email</div>
                        </div>

                        <div class="form-group">
                            <label class="form-label">Пароль</label>
                            <input 
                                type="password" 
                                class="form-input" 
                                name="password"
                                placeholder="Введите пароль"
                                minlength="6"
                                required
                                autocomplete="new-password"
                            />
                            <div class="password-strength">
                                <div class="password-strength-bar" id="password-strength-bar"></div>
                            </div>
                            <div class="form-hint">Минимум 6 символов</div>
                            <div class="form-error">Пароль должен быть не менее 6 символов</div>
                        </div>

                        <div class="form-group">
                            <label class="form-label">Подтверждение пароля</label>
                            <input 
                                type="password" 
                                class="form-input" 
                                name="confirmPassword"
                                placeholder="Повторите пароль"
                                required
                                autocomplete="new-password"
                            />
                            <div class="form-error">Пароли не совпадают</div>
                        </div>

                        <button type="submit" class="btn-submit">Зарегистрироваться</button>
                    </form>

                    <div class="auth-divider">или</div>

                    <div class="auth-link">
                        Уже есть аккаунт? <a href="/login">Войти</a>
                    </div>
                </div>

        )
}

export default SignUp
const Layout = () => {
    const { session } = useUserStore()
    return (
            <h2 class="logo">🛒Маркетплейс</h2>
                    {!session ? (
                        <ul class="nav-links" id="auth-nav">
                            <li>
                                <Link to={"/"} class="active">Товары</Link>
                            </li>    
                            <li>
                                <Link to={"/my-bids"}>Мои ставки</Link>
                            </li>
                            <li>
                                <Link to={/create-item} class="btn-primary">+Создать товар</Link>
                            </li>
                            <li class="user-info">
                                <span class="username">username</span>
                                <li>
                                    <Link to={"/"}>Выйти</Link>
                                </li>
                            </li>
                        </ul>
                    ) : (
                        <ul class="nav-links" id="guest-nav">
                            <li>
                                <Link to={"/"} class="active">Товары</Link>
                            </li>
                            <li>
                                <Link to={"/signin"}>Войти</Link>
                            </li>
                            <li>
                                <Link to={"/register"} class="btn-primary">Регистрация</Link>
                            </li>
                        </ul>
                    )}


                    <main>
                        <!-- Outlet - здесь будет рендериться содержимое дочерних маршрутов -->
                        <div id="outlet">
                            <!-- React Router Outlet заменит это содержимое -->
                        </div>
                    </main>

                    <footer>
                        <p>&copy; 2025 Маркетплейс. Все права защищены.</p>
                    </footer>
       )
    }

export default Layout
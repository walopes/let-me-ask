
import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

export function Home(){
    return (
        <div>
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando símbolos especiais" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire suas dúvidas em tempo-real</p>
            </aside>
            <main>
                <img src={logoImg} alt="letmeask" />
                <button>
                    <img src={googleIconImg} alt="logo do google"/>
                    Crie sua conta com o Google
                </button>
                <div>Ou entre em uma sala</div>

                <form>
                    <input
                        type="text"
                        placeholder="Digite o código da sala" 
                    />
                    <button type="submit">Entrar na sala</button>
                </form>

            </main>
        </div>
    )
};
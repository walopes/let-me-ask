
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import '../styles/auth.scss';

import { Button } from '../components/Button';
import { AuthContext } from '../App';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

export function Home(){
    const history = useHistory();
    const { user, signInWithGoogle } = useContext(AuthContext);

    function handleCreateRoom(){
        if(!user){
            signInWithGoogle();
        }
        history.push('/rooms/new');
    }

    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando símbolos especiais" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire suas dúvidas em tempo-real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="letmeask" />
                    <button onClick={handleCreateRoom} className="create-room">
                        <img src={googleIconImg} alt="logo do google"/>
                        Crie sua conta com o Google
                    </button>
                    <div className="separator">Ou entre em uma sala</div>

                    <form>
                        <input
                            type="text"
                            placeholder="Digite o código da sala" 
                        />
                        <Button type="submit">
                            Entrar na sala
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    )
};


import { Link, useHistory } from 'react-router-dom';
import { FormEvent, useState } from 'react';

import '../styles/auth.scss';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';

import {Button} from '../components/Button';
import { useAuth } from '../hooks/useAuth';
import { database } from '../services/firebase';

export function NewRoom(){

    const {user} = useAuth();
    const [ newRoom, setNewRoom ] = useState('');
    const history = useHistory();

    async function handleCreate(event: FormEvent){
        event.preventDefault();
        
        /* Do not procede if the room has no character at all */
        if(newRoom.trim() === ''){
            return;
        }

        const roomRef = database.ref('rooms');
        const firebaseRoom = await roomRef.push({
            title: newRoom,
            authorId: user?.id,
        });
        history.push(`/rooms/${firebaseRoom.key}`);

    };

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
                    <h2>Criar uma nova sala</h2>

                    <form onSubmit={handleCreate}>
                        <input
                            type="text"
                            placeholder="Digite o código da sala" 
                            onChange={event => setNewRoom(event.target.value)}
                            value={newRoom}
                        />
                        <Button type="submit">
                            Criar sala
                        </Button>
                    </form>

                    <p>
                        Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link>
                    </p>

                </div>
            </main>
        </div>
    )
};
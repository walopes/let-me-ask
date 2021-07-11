
import { useParams } from 'react-router-dom';
import { FormEvent, useEffect, useState } from 'react';

import '../styles/room.scss';

import logoImg from '../assets/images/logo.svg';
import { Button } from '../components/Button';
import { RoomCode } from '../components/RoomCode';
import { useAuth } from '../hooks/useAuth';
import { database } from '../services/firebase';

type firebaseQuestions = Record<string, {
    author: {
        name: string;
        avatar: string;
    }
    content: string;
    isAnswered: boolean;
    isHighlighted: boolean;
}>;

type Question = {
    id: string;
    author: {
        name: string;
        avatar: string;
    }
    content: string;
    isAnswered: boolean;
    isHighlighted: boolean;

};

type RoomParams = {
    id: string;
};

export function Room(){
    
    const {user} = useAuth();
    const params = useParams<RoomParams>();
    const roomId = params.id;

    const [newQuestion, setNewQuestion] = useState('');
    const [questions, setQuestions] = useState<Question[]>([]);
    const [title, setTitle] = useState('');

    useEffect(() => {
        const roomRef = database.ref(`rooms/${roomId}`);
        
        /*
            Tips on Javascript Event Listener
            roomRef.on(...) -> listen to the event more than once
            roomRef.once(...) -> Listen to the event only once
        */

        roomRef.once('value', room => {

            const databaseRoom = room.val();
            // the same as "const firebaseQuestions = databaseRoom.questions as firebaseQuestions"
            const firebaseQuestions: firebaseQuestions = databaseRoom.questions ?? {};

            // Object.entries() returns a object with key-value pairs
            const parsedQuestions = Object.entries(firebaseQuestions).map(([key, value]) => {
                return {
                    id: key,
                    content: value.content,
                    author: value.author,
                    isHighlighted: value.isHighlighted,
                    isAnswered: value.isAnswered,
                }
            });

            setTitle(databaseRoom.title);
            setQuestions(parsedQuestions);
        });

        /**
         * Every time the parameter changes (roomId in the case), the useEffect will be triggered.
         */
    }, [roomId]);

    async function handleCreateNewQuestion(event: FormEvent){
        
        event.preventDefault();

        if(newQuestion.trim() === ''){
            return;
        }

        if(!user){
            throw new Error('You must be logged in');
        }

        const question = {
            content: newQuestion,
            author: {
                name: user?.name,
                avatar: user?.avatar
            },
            isHighlighted: false,
            isAnswered: false
        };

        await database.ref(`rooms/${roomId}/questions`).push(question);
    };

    return(
        <div id="page-room">
            <header>
                <div className="content">
                    <img src={logoImg} alt="Letmeask" />
                    <RoomCode code={params.id}/>
                </div>
            </header>

            <main>
                <div className="room-title">
                    <h1>Sala {title}</h1>
                    {questions.length > 0 && <span>{questions.length} perguntas</span>}
                </div>

                <form onSubmit={handleCreateNewQuestion}>
                    <textarea 
                        placeholder="O que quer pergutar?" 
                        onChange={event => setNewQuestion(event.target.value)}
                        value={newQuestion}
                    />

                    <div className="form-footer">
                        { user ? (
                                <div className="user-info">
                                    <img src={user.avatar} alt={user.name} />
                                    <span>{user.name}</span>
                                </div>
                            ) : 
                            (
                                <span>Para enviar uma pergunta, <button>faça seu login</button>.</span>
                            ) 
                        }
                        <Button type="submit" disabled={!user}>Enviar pergunta</Button>
                    </div>

                </form>
            </main>

        </div>
    );
};
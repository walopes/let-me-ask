
import { useEffect, useState } from "react";

import { database } from "../services/firebase";
import { useAuth } from "./useAuth";


type firebaseQuestions = Record<string, {
    author: {
        name: string;
        avatar: string;
    }
    content: string;
    isAnswered: boolean;
    isHighlighted: boolean;
    likes: Record<string, {
        authorId: string
    }>;
}>;

type QuestionType = {
    id: string;
    author: {
        name: string;
        avatar: string;
    }
    content: string;
    isAnswered: boolean;
    isHighlighted: boolean;
    likeCount: number;
    likeId: string | undefined;
};


export function useRoom(roomId: string){
    const { user } = useAuth();
    const [questions, setQuestions] = useState<QuestionType[]>([]);
    const [title, setTitle] = useState('');


    useEffect(() => {
        const roomRef = database.ref(`rooms/${roomId}`);
        
        /*
            Tips on Javascript Event Listener
            roomRef.on(...) -> listen to the event more than once
            roomRef.once(...) -> Listen to the event only once
        */

        roomRef.on('value', room => {
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
                    likeCount: Object.values(value.likes ?? {}).length,
                    likeId: Object.entries(value.likes ?? {}).find(([key, like]) => like.authorId === user?.id)?.[0],
                }
            });

            setTitle(databaseRoom.title);
            setQuestions(parsedQuestions);
        });

        /*
        Unsubscribe this callback
        */
        return () => {
            roomRef.off('value');
        };

        /**
         * Every time the parameter changes (roomId in the case), the useEffect will be triggered.
         */
    }, [roomId, user?.id]);

    return { questions, title };
};

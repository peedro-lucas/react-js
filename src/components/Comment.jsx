import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment(){
    return (
        <div className={styles.comment}>
            <img src="https://github.com/peedro-lucas.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Pedro Lucas</strong>
                            <time title="11 de Maio às 08:13" dateTime="2023-05-11 08:13:30">Cerca há 1h atrás</time>
                        </div>

                        <button title='Deletar comentario'>
                            <Trash size={20} color="#808080" />
                        </button>
                    </header>
                    <p>Muito bom Devon, parabéns!!</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp size={20} color="#808080" />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    );

}
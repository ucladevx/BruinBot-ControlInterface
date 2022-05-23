import React, {useCallback, useEffect, useState} from 'react';
import { ArrowUp, ArrowLeft, ArrowDown, ArrowRight, PauseCircle } from 'lucide-react';
import Axios from 'axios';

const axios = Axios.create({
	baseURL: "http://18.144.75.162:8080/"
});

function ButtonContainer () {
    const [fired, setFired] = useState(false);

    const handleKeyDown = useCallback((e) => {
        if (fired) {
            return;
        }

        const keyCode = e.code;
        switch (keyCode) {
            case 'ArrowUp':
            case 'KeyW':
                sendMessage(e, 'up');
                break;
            case 'ArrowLeft':
            case 'KeyA':
                sendMessage(e, 'left');
                break;
            case 'ArrowDown':
            case 'KeyS':
                sendMessage(e, 'down');
                break;
            case 'ArrowRight':
            case 'KeyD':
                sendMessage(e, 'right');
                break;
            default:
                break;
        }

        setFired(true);
    }, [fired]);

    const handleKeyUp = useCallback((e) => {
        setFired(false);
        sendMessage(e, 'off');
    }, []);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);
    
        return () => {
          window.removeEventListener('keydown', handleKeyDown);
          window.removeEventListener('keyup', handleKeyUp);
        };
      }, [handleKeyDown, handleKeyUp]);
    
    const sendMessage = (e, m) => {
        e.preventDefault();
        console.log(m);
        axios.post('control/move', {
            botId: 'Teddy Bear',
            message: m
        });
    }
    return(
        <div>
            <table>
                <tbody>
                    <tr>
                        <td></td>
                        <td><ArrowUp size='50' onClick={(e) => sendMessage(e, 'up')}/></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><ArrowLeft size='50' onClick={(e) => sendMessage(e, 'left')}/></td>
                        <td><ArrowDown size='50' onClick={(e) => sendMessage(e, 'down')}/></td>
                        <td><ArrowRight size='50' onClick={(e) => sendMessage(e, 'right')}/></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><PauseCircle size='50' onClick={(e) => sendMessage(e, 'off')}/></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>            
        </div>
    );
}

export default ButtonContainer;
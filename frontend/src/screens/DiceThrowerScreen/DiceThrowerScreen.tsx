import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { socket } from '../../socket';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Trees from './components/Trees';
import { URLS } from '@/enum';

const DiceThrowerScreen = () => {
    const [treesData, setTreesData] = useState(null);
    const [inputField, setInputField] = useState<string>('');
    const [responseMessage, setResponseMessage] = useState<string>('');


    useEffect(() => {
        const handleTreeReady = (data:any) => {
            console.log(data);

                toast('🌳 You Add New Tree', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            setTreesData(data.trees); 
        };

        socket.on('treeReady', handleTreeReady);

        return () => {
            socket.off('treeReady', handleTreeReady);
        };
    }, []); 

    const handleInputChange = (event:any) => {
        setInputField(event.target.value);
    }; 
    

    const handleSubmit = async () => {
        try {
            const response = await axios.post(`${URLS.BASE_URL_SERVER}/dice/throw/${inputField}`);
            console.log(response)
            setResponseMessage(`Response: ${JSON.stringify(response.data)}`);
            setInputField("")
        } catch (error : any) {
            setResponseMessage(`Error: ${error.message}`);
        }
    };

    return (
        <>
            <ToastContainer />
            <div className="p-4 flex flex-col items-center">
                <div className="mb-4 w-64 p-4">
                    <TextField
                    fullWidth
                    label="Enter your User Id"
                    variant="outlined"
                    value={inputField}
                    onChange={handleInputChange}
                    className="bg-white mb-4"
                    />          
                    <Button 
                        variant="contained" 
                        color="primary" 
                        onClick={handleSubmit}
                        className="w-full"
                    >
                        Throw Dice
                    </Button>
                </div>
                <div className="container mx-auto p-4 ">
                
                {treesData && 
                <>
                    <h1 className="text-2xl font-bold text-center mb-4">Tree Visualizer</h1>
                    <Trees trees={treesData} />
                </> }
                </div>
            </div>
        </>
    );
};

export default DiceThrowerScreen;
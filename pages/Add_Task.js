import React from 'react'
import { useState } from 'react'
import { ethers } from 'ethers'
import { to_do_listAddress } from '../config';
import to_do_ABI from '../artifacts/contracts/To_do.sol/To_Do_List.json'
import { useRouter } from 'next/router';


const Add_Task = () => {

    const [task, setTask] = useState(null)
    const router = useRouter();

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (window.ethereum) {
            try {

                const provider = new ethers.providers.Web3Provider(window.ethereum);
                const signer = provider.getSigner();
                const contract = new ethers.Contract(
                    to_do_listAddress,
                    to_do_ABI.abi,
                    signer
                );
                console.log(contract);
                // const response = await contract.getAllTaskOfUser.call(function (err, res) {
                //     console.log(res, "==============================");
                // })
                console.log("Input Task Value", event.target.taskinput.value);
                const response = await contract.addTask((event.target.taskinput.value))
                setTask("")
                await response.wait()
                console.log("Response", response);

                router.push('/')
            }

            catch (error) {
                alert("Something Went Wrong, please See in Console")
                console.log("Error :", error);
            }


        }
        else {
            alert("Please Install MetaMask Wallet")
        }
    }

    return (
        <>
            <form className='flex flex-col h-screen justify-center items-center' onSubmit={handleSubmit}>

                <label className="">
                    <input
                        className="border-4 rounded-lg px-4 h-16 text-gray-600 text-[20px] p-[-5px]"
                        name="taskinput"
                        type="text"
                        value={task}
                        onChange={e => setTask(e.target.value)}
                        placeholder="Enter the Task"
                        required />
                </label>

                <button type='submit' className='m-5 border-4 px-8 rounded-lg text-gray-100'>Submit</button>



            </form >
        </>
    )
}


export default Add_Task;

import { to_do_listAddress } from '../config';
import to_do_ABI from '../artifacts/contracts/To_do.sol/To_Do_List.json'
import { ethers } from 'ethers';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const All_Task = () => {


    const [AllTaskArray, setAllTaskArray] = useState([]);
    const router = useRouter();

    const handleContract = async () => {
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
                const response = await contract.getAllTaskOfUser()

                console.log("AllTask of All Task", response);
                setAllTaskArray(response)
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

    const handleCheckBox = async (index, task_name, task_status) => {
        if (window.ethereum) {
            try {

                const provider = new ethers.providers.Web3Provider(window.ethereum);
                const signer = provider.getSigner();
                const contract = new ethers.Contract(
                    to_do_listAddress,
                    to_do_ABI.abi,
                    signer
                );
                const response = await contract.updateStatus(index, task_name, task_status)
                await response.wait();
                console.log("CheckBox", response);
                router.push('/')
            }

            catch (error) {
                alert("Something Went Wrong, please See in Console")
                console.log("Error :", error);
            }


        }
        else {
            router.push('/')
            alert("Please Install MetaMask Wallet")
        }
    }

    useEffect(() => {
        handleContract();
    }, [])

    return (
        <>
            {/* <div>All_Task</div>
            <div className='flex flex-col '>
                {AllTaskArray.map((e, index) => (
                    <div className={`flex bg-neutral-800 justify-between border-4 text-gray-400 ${!e[1] ? "" : "line-through"}`}>
                        <div className='px-4'>{e[0]}</div>
                        <div className=''><input
                            defaultChecked={e[1]}
                            onChange={() => handleCheckBox(index, e[0], !e[1])}
                            type="checkbox"
                        /></div>
                    </div>

                ))}
            </div> */}

            <div className='for-scrollbar'>
                <div class="container mb-2 flex justify-center relative z-10 overflow-auto h-screen ">
                    <ul class="flex flex-col p-4 mt-[430px]">
                        {AllTaskArray.map((e, index) => (
                            <li class="border-gray-400 flex flex-row bg-orange-500 rounded-xl my-6">
                                <div
                                    class="select-none flex flex-1 items-center p-4 transition duration-500 ease-in-out transform hover:-translate-y-2 rounded-2xl border-2 p-6 hover:shadow-2xl border-red-400"
                                >
                                    <div class="flex-1 pl-1 mr-16">
                                        <div class={`font-normal text- ${!e[1] ? "" : "line-through"}`}>
                                            {e[0]}
                                        </div>
                                    </div>

                                    <label for="checkbox" class="relative flex-inline items-center isolate p-4 rounded-2xl">
                                        <input id="checkbox" type="checkbox" class="relative peer z-20 text-purple-600 rounded-md focus:ring-0" defaultChecked={e[1]} onChange={() => handleCheckBox(index, e[0], !e[1])} />
                                    </label>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default All_Task
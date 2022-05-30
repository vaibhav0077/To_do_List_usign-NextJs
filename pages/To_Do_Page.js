import { to_do_listAddress } from '../config';
import to_do_ABI from '../artifacts/contracts/To_do.sol/To_Do_List.json'
import All_Task from '../components/All_Task';
import Link from 'next/link';


const To_Do_Page = () => {
    return (
        <>
            <div className='h-full'>
                <div className='flex flex-row justify-evenly z-10 relative'>
                    <header>
                        <div class="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
                            <div class="sm:justify-between sm:items-center sm:flex">
                                <div class="text-center sm:text-left">
                                    <h1 class="text-2xl font-bold text-slate-200 sm:text-3xl">
                                        Welcome Back!
                                    </h1>

                                    <p class="mt-1.5 text-lg text-slate-400">
                                        Let's complete the Task! 🎉
                                    </p>
                                </div>

                                <div class="flex flex-col gap-4 mt-4 sm:flex-row sm:mt-0 sm:items-center ml-5">
                                    <button
                                        class="inline-flex items-center justify-center px-5 py-3 text-gray-500 transition border border-gray-200 rounded-lg hover:text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring"
                                        type="button"
                                    >
                                        <span class="text-sm font-medium "> View Website </span>

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="w-4 h-4 ml-1.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            stroke-width="2"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                            />
                                        </svg>
                                    </button>

                                    <button

                                        class="block px-5 py-3 text-sm font-medium text-white transition bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring"
                                        type="button"
                                    > <Link href="/Add_Task">
                                            <a>Add Task</a>
                                        </Link></button>
                                </div>
                            </div>
                        </div>
                    </header>

                </div>
                <div className=''>
                    <All_Task />
                </div>

            </div >
        </>
    )

}


export default To_Do_Page;
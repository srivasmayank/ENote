import { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext'

function AddNote() {
    const context = useContext(myContext);
    const { title, setTitle, description, setDescription, tag, setTag, addNote } = context;
    return (
        <Layout>
            <div className=' flex justify-center items-center h-screen'>
                <div className=' lg:w-[60em]  rounded-xl p-10   '>
                    <div className="">

                        {/* Top Heading  */}
                        <div className=" mb-5">
                            <h1 className='text-center text-black text-xl  font-bold'>
                                Add Note
                            </h1>
                        </div>

                        {/* Input 1  */}
                        <div>
                            <input
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                type="text"
                                name='title'
                                className='
                                 mb-4 px-2 py-2 w-full rounded-lg text-black placeholder:text-black outline-none'
                                placeholder='Title'
                            />
                        </div>

                        {/* Input 2  */}
                        <div>
                            <input
                                value={tag}
                                onChange={(e) => setTag(e.target.value)}
                                type="text"
                                name='tag'
                                className='
                                  mb-4 px-2 py-2 w-full rounded-lg text-black placeholder:text-black outline-none'
                                placeholder='Tag'
                            />
                        </div>

                        {/* TextArea 3  */}
                        <div>
                            <textarea
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                             cols="30" rows="10" className='
                                  mb-4 px-2 py-2 w-full rounded-lg text-black placeholder:text-black outline-none'
                                placeholder='Description'>
                            </textarea>
                        </div>

                        {/* Button  */}
                        <div className=' flex justify-center mb-3'>
                            <button
                            onClick={addNote}
                                className=' bg-green-500 w-full text-white font-bold  px-2 
                                py-2.5 rounded-md'>
                                Add Note
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default AddNote
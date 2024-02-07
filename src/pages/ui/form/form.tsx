import React, { useState } from "react";
import { sendPost } from "../../api/hello";

const Form = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [userId, setUserId] = useState(1);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            await sendPost({ title, body, userId });
        } catch (error) {
            console.error("Error sending data:", error);
        }
    }

    return (
        <div className="my-4 flex flex-col">
            <h1 className="my-2">Form</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="Number"
                    required
                    placeholder="User Id"
                    className="border-2 border-black rounded-md p-2 mr-2"
                    onChange={(e) => setUserId(Number(e.target.value))}
                />
                <input
                    type="text"
                    required
                    placeholder="Title"
                    className="border-2 border-black rounded-md p-2 mr-2"
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="text"
                    required
                    placeholder="Body"
                    className="border-2 border-black rounded-md p-2 mr-2"
                    onChange={(e) => setBody(e.target.value)}
                />
                <button
                    type="submit"
                    className="rounded-md p-2 bg-blue-500 text-white cursor-pointer"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Form;

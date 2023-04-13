
export const Login = ({ loggedValidate }) => {

    const loggedTrue = () => {
        loggedValidate(true);
    };
    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center bg-blue-light">
            <h1 className="font-bold text-8xl min-w-25">LessonLinkApp 📚</h1>
            <div className="flex flex-row mt-8 justify-around w-56">
                <button onClick={loggedTrue} className="border border-black hover:bg-blue-light hover:border-black">Login</button>
                <button className="border border-black hover:bg-blue-light hover:border-black">Sign Up</button>
            </div>
        </div>
    )
}


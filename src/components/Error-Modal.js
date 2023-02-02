

function ErrorModal({ error }) {
    const x = error
    return (
        <div className="login-failed">
            Sign-in failed: {x.message}
            </div>
    )
}

export default ErrorModal
import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { User, ArrowRight, Loader2, MessageSquare } from "lucide-react";

const AuthPage = (props) => {
    const [username, setUsername] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!username.trim()) return;

        setLoading(true);
        setError("");

        try {
            const r = await axios.post("http://localhost:3002/authenticate", {
                username: username,
            });
            props.onAuth({ ...r.data, secret: username });
        } catch (e) {
            console.log("Auth Error", e);
            setError("Failed to login. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center relative" style={{ overflow: 'hidden' }}>

            <div className="blob blob-1" />
            <div className="blob blob-2" />

            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="auth-container"
            >
                <div className="flex flex-col items-center">
                    <div className="auth-logo-box">
                        <MessageSquare className="w-8 h-8 text-white" size={32} color="white" />
                    </div>
                    <h1 className="auth-title">Welcome Back</h1>
                    <p className="auth-subtitle text-center">Enter your username to start chatting</p>
                </div>

                <form onSubmit={onSubmit}>
                    <div className="input-group">
                        <label className="input-label">Username</label>
                        <div className="input-wrapper">
                            <User className="input-icon" size={20} />
                            <input
                                className="input-field"
                                name="username"
                                placeholder="johndoe"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        {error && <p className="error-msg">{error}</p>}
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="submit-btn"
                    >
                        {loading ? (
                            <Loader2 className="animate-spin" size={20} />
                        ) : (
                            <>
                                Get Started <ArrowRight size={20} />
                            </>
                        )}
                    </button>
                </form>
            </motion.div>
        </div>
    );
};

export default AuthPage;
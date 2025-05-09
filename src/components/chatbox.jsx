import { useState, useEffect, useRef } from "react";

export default function Chatbot() {
const [isOpen, setIsOpen] = useState(false);
const [messages, setMessages] = useState([
{ from: "bot", text: "🤖 Hello there! Welcome to Juju Electronics.Need help?" }
]);
const [input, setInput] = useState("");
const messagesEndRef = useRef(null);

// Scroll to the bottom when messages change
useEffect(() => {
if (messagesEndRef.current) {
messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
}
}, [messages]);

const getBotResponse = (input) => {
const msg = input.toLowerCase();

if (msg.includes("hello")) {
return "🤖  👋🙂Hello there! Welcome to Juju. How can I help today? ";
}
if (msg.includes("trouble")) {
return "🤖 Are you having trouble?😟 ";
}
if (msg.includes("about")) {
return "🤖 Please navigate to 'About us' to know more about juju .";
}
if (msg.includes("Juju ")) {
return "🤖 We are the best online markert for buying and selling quality electronic products ";
}
if (msg.includes("Partners")) {
return "🤖 Our partners are well-known and trusted companies globaly.Find some in the about us page";
}
if (msg.includes("home")) {
return "🤖 You can always gain access to our home page and find products of your choice.";
}

return `🤖 You said: "${input}". 😢Sorry! Unable to complete your request at the moment       .'.`;
};

const handleSend = () => {
if (!input.trim()) return;

const userMessage = { from: "user", text: `🧑 ${input}` };
setMessages((prev) => [...prev, userMessage]);

const botResponse = { from: "bot", text: getBotResponse(input) };
setMessages((prev) => [...prev, botResponse]);

setInput("");
};

return (
<div>
{/* Chatbot Toggle Button */}
{!isOpen && (
<div
className="position-fixed top-0 start-0 mt-5 m-4 zindex-tooltip"
onClick={() => setIsOpen(true)}
style={{ cursor: "pointer" }}
>
<div className="bg-primary text-white p-3 rounded shadow">
💬 Chatbot...press here to begin
</div>
</div>
)}

{/* Chatbot Panel */}
{isOpen && (
<div
className="position-fixed bottom-0 end-0 mb-5 me-4 bg-white rounded shadow d-flex flex-column"
style={{ width: "320px", zIndex: 1050 }}
>
{/* Header with Exit Button */}
<div className="bg-primary text-white px-3 py-2 d-flex justify-content-between align-items-center fw-bold">
Chat with us!
<button
className="btn-close btn-close-white"
onClick={() => setIsOpen(false)}
></button>
</div>

{/* Chat Messages */}
<div
className="flex-grow-1 p-3 overflow-auto"
style={{ height: "240px" }}
>
{messages.map((msg, idx) => (
<div
key={idx}
className={`p-2 rounded mb-2 ${
msg.from === "user"
? "bg-primary bg-opacity-10 text-end ms-5"
: "bg-light me-5"
}`}
>
{msg.text}
</div>
))}
<div ref={messagesEndRef} />
</div>

{/* Input Field */}
<div className="border-top p-2 d-flex">
<input
type="text"
className="form-control me-2"
placeholder="Type a message..."
value={input}
onChange={(e) => setInput(e.target.value)}
onKeyDown={(e) => e.key === "Enter" && handleSend()}
/>
<button className="btn btn-primary" onClick={handleSend}>
Send
</button>
</div>
</div>
)}
</div>
);
}

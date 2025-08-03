import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bot, X, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: "bot",
      content:
        "Hi! I'm Badr-Eddine's AI assistant. I can help you navigate the portfolio, answer questions about services, or provide contact information. How can I help you today?",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const { toast } = useToast();

  const quickQuestions = [
    "What services do you offer?",
    "Show me your projects",
    "How can I contact you?",
    "Tell me about your skills",
  ];

  const handleOpenChat = () => {
    setIsOpen(true);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage = inputValue;
    setMessages((prev) => [...prev, { type: "user", content: userMessage }]);
    setInputValue("");

    // Simulate AI response
    setTimeout(() => {
      let botResponse = "";
      const lowerInput = userMessage.toLowerCase();

      if (lowerInput.includes("service") || lowerInput.includes("offer")) {
        botResponse =
          "I offer three main services: Mobile App Development (Android & Flutter), Robotics Training & Mentoring, and Design & Multimedia Creation. Would you like me to scroll to the services section?";
      } else if (
        lowerInput.includes("project") ||
        lowerInput.includes("portfolio") ||
        lowerInput.includes("work")
      ) {
        botResponse =
          "My featured projects include Compteur Taxi (taxi fare app), Météo App (weather forecasting), and Sajda (prayer time app). Let me show you the portfolio section!";
        setTimeout(() => {
          document
            .querySelector("#portfolio")
            ?.scrollIntoView({ behavior: "smooth" });
        }, 1000);
      } else if (lowerInput.includes("contact") || lowerInput.includes("reach")) {
        botResponse =
          "You can reach me via phone (0676627273), email (badrbriki1@gmail.com), LinkedIn, or GitHub. I'll scroll to the contact section for you!";
        setTimeout(() => {
          document
            .querySelector("#contact")
            ?.scrollIntoView({ behavior: "smooth" });
        }, 1000);
      } else if (lowerInput.includes("skill") || lowerInput.includes("expertise")) {
        botResponse =
          "My expertise spans Development (Android, Flutter), Robotics (Arduino, mentoring), Design (multimedia, video editing), and Data Analysis. Let me show you the skills section!";
        setTimeout(() => {
          document
            .querySelector("#skills")
            ?.scrollIntoView({ behavior: "smooth" });
        }, 1000);
      } else if (lowerInput.includes("about") || lowerInput.includes("background")) {
        botResponse =
          "Badr-Eddine is a mobile developer and robotics enthusiast with experience in Android & Flutter development, multimedia design, and robotics coaching. Check out the about section for more details!";
        setTimeout(() => {
          document
            .querySelector("#about")
            ?.scrollIntoView({ behavior: "smooth" });
        }, 1000);
      } else {
        botResponse =
          "I'm here to help you explore Badr-Eddine's portfolio! Try asking about services, projects, skills, or contact information. You can also use the quick questions below.";
      }

      setMessages((prev) => [...prev, { type: "bot", content: botResponse }]);
    }, 1000);
  };

  const handleQuickQuestion = (question) => {
    setInputValue(question);
    handleSendMessage();
  };

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
          <Button
            onClick={handleOpenChat}
            variant="hero"
            size="icon"
            className={`w-14 h-14 rounded-full shadow-lg transition-all duration-300 floating-animation ${
              isOpen ? "scale-0" : "scale-100 hover:scale-110"
            }`}
          >
            <Bot className="w-6 h-6" />
          </Button>
          {/* Static Floating Notification Badge */}
          {!isOpen && (
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold text-white border-2 border-background shadow-md animate-bounce">
              1
            </span>
          )}
        </div>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[500px] bg-background-card border border-border rounded-lg shadow-2xl z-50 flex flex-col overflow-hidden animate-fade-in-up">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border bg-primary/5">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">AI Assistant</h3>
                <p className="text-xs text-muted-foreground">Online</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="w-8 h-8"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.type === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg text-sm ${
                    message.type === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}

            {/* Quick Questions */}
            {messages.length === 1 && (
              <div className="space-y-2">
                <p className="text-xs text-muted-foreground">Quick questions:</p>
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickQuestion(question)}
                    className="block w-full text-left p-2 text-xs bg-muted hover:bg-secondary rounded text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border">
            <div className="flex space-x-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask me anything..."
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                className="flex-1 text-sm"
              />
              <Button
                onClick={handleSendMessage}
                size="icon"
                className="w-10 h-10"
                disabled={!inputValue.trim()}
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIAssistant;

import { useRef, useEffect } from 'react'
import { ChatMessage } from "./ChatMessage";
import './ChatMessages.css';

function useAutoScroll(dependencies) {
  const containerRef = useRef(null);

  useEffect(() => {
    const containerElem = containerRef.current;
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);

  return containerRef;
}

function ChatMessages({ chatMessages }) {
  const chatMessagesRef = useAutoScroll([chatMessages]);

  return (
    <div className="chat-messages-containers" ref={chatMessagesRef}>
      {
        chatMessages.map((chatMessage) => {
          return (
            <ChatMessage
              message={chatMessage.message} 
              sender={chatMessage.sender} 
              key={chatMessage.id} 
              time={chatMessage.time}
            />
          )
        })
      }
    </div>
  );
}

export default ChatMessages;
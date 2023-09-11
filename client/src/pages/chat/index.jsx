import { useContext } from "react"
import { ChatContext } from "../../context/chatContext"
import TopMost from "../../components/topmost"
import { Container, Stack } from "react-bootstrap"
import styles from './chat.module.css'
import UserChat from "../../components/chatStuff/userChat"
import { AuthContext } from "../../context/authContext"
import PotentialChats from "../../components/chatStuff/potentialChats"
import ChatBox from "../../components/chatStuff/chatBox"

const Chat=()=>{
    const {user}= useContext(AuthContext)
    const {userChats,isUserChatsLoading,userChatsError,updateCurrentChat}= useContext(ChatContext)
            console.log("UserChats", userChats)

    return(
               <Container>
                <PotentialChats/>
                    {userChats?.length <1 ? null :(
                        <Stack direction="horizontal" gap={4}
                        className="align-items-start">
                            <Stack className="messages-box flex-grow-0 pe-3" gap={3}>
                                {isUserChatsLoading && <p>Loading chats</p>}
                                {userChats?.map((chat,index)=>{
                                    return(
                                        <div key={index} onClick={()=>updateCurrentChat(chat)}>
                                            <UserChat chat={chat} user={user}/>
                                        </div>
                                    )
                                })}
                            </Stack> 
                            <ChatBox/>
                        </Stack>
                    )
                    
                    }
                </Container>
                

  
    )

}
export default Chat
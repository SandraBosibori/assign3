import { useContext } from "react"
import { AuthContext } from "./context/authContext"
import { ChatContextProvider } from "./context/chatContext"
import { Container } from "react-bootstrap"
import Chat from "./pages/chat"
import { Navigate } from "react-router-dom"
import { Route } from "react-router-dom"
import Services from "./pages/services"
import Assignees from "./pages/assignees"
import Wallet from "./pages/wallet"
import History from "./pages/history"
import TodoApp from "./pages/todoApp"
import Banking from "./pages/banking"
import Calls from "./pages/calls"
import Shopping from "./pages/shopping"
import Delivery from "./pages/delivery"
import Driving from "./pages/driving"
import Writing from "./pages/writing"
import App from "./App"
import NewHome from "./pages/newHome"
import NewAssignee from "./pages/newAssignee"
import Log from "./pages/log"
import Register from "./pages/register"


const Routes=()=>{
    const {user}= useContext(AuthContext)
    return(
        <ChatContextProvider user={user}>

            <Container>
                <Routes>
                    <Route path="/" element={<App/>}/>
                    <Route path="/log" element={<Log/>}/>
                    <Route path="/register" element={<Register/>}/>
                    
                    {user?(
                        <>
                            <Route path="/chat" element={<Chat/>}/>
                            <Route path="/services" element={<Services/>}/>
                            <Route path="/assignees" element={<Assignees/>}/>
                            <Route path="/wallet" element={<Wallet/>}/>
                            <Route path="/history" element={<History/>}/>
                            <Route path="/todo" element={<TodoApp/>}/>
                            <Route path="/banking" element={<Banking/>}/>
                            <Route path="/calls" element={<Calls/>}/>
                            <Route path="/shopping" element={<Shopping/>}/>
                            <Route path="/delivery" element={<Delivery/>}/>
                            <Route path="/driving" element={<Driving/>}/>
                            <Route path="/writing" element={<Writing/>}/>
                            <Route path="/newHome" element={<NewHome/>}/>
                            <Route path="/newAssignee" element={<NewAssignee/>}/>

                        </>
                    ):(
                        <>
                            <Route path="/" element={<App/>}/>
                        </>
                    )
                    
                    }
                 <Route path="*" element={<Navigate to='/'/>}/>
                </Routes>
            </Container>

        </ChatContextProvider>
    )
}
export default Routes
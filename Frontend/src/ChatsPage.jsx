import { PrettyChatWindow } from "react-chat-engine-pretty";
const ChatsPage = (props) => {
   
    return <div style={{ height: '100vh' }}>
        <PrettyChatWindow
        projectId='38839539-4cd5-4fec-998b-0ffc1dc32a7f'
        username={props.user.username}
        secret={props.user.secret}
        style={{height:'100%'}}
      />
    </div>
}

export default ChatsPage;